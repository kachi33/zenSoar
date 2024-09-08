import dotenv from 'dotenv'

// import crypto from 'crypto';
import userModel from '../models/users.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import sendResetEmail from './utils/sendResetEmail.js'


dotenv.config()

const register = async(req, res) => { // REGISTER HANDLER
  try {
    const { username, email, password } = (req.body)
    
    const user = await userModel.findOne({ email }) // Retrieve user from database
    if (user) {
      return res.status(400).json({ message: 'Email already registered' })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await userModel.create({ username, email, password: hashedPassword })

    newUser.save()

    return res.json({ status: true, message: 'User sucessfully registered' });
  } catch(err){
    console.error('Error during registration:', err)
    return res.status(500).json({ status: false, message: 'Registration failed', error: err.message})

  }
};

const login = async(req, res) => { //LOGIN HANDLER
  try{
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }) // Retrieve user from database

    if (!user) return res.status(404).json({message:'User not found', status: 'false'});

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) { // compare passwords 
      return res.status(400).json({ message: 'Password is incorrect' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, {httpOnly: true, maxAge: 360000}) // store token in cookies on the browser with http requests only

    return res.status(200).json({status: true, message:'login successful' });
  } catch(err){
    console.error('Error during login:', err)
    return res.status(500).json({ status: false, message: 'Login failed', error: err.message})
  }
};

const resetRequestHandler = async (req, res) => { //FORGOT PASSWORD HANDLER
  try{
    const { email } = req.body;
    const user = await userModel.findOne({ email }); // Retrieve user from database

    if (!user) return res.status(404).json('user not found');

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const hashedToken = bcrypt.hashSync(resetToken, 10);

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    user.save();
    const resetUrl = `http://localhost:3000/reset-password?token=${resetToken}&id=${user._id}`;

    // send reset email
    sendResetEmail(user.email, resetUrl);

    return res.status(200).json({status: true, message:'Password reset link sent to your email'});
  } catch(err){
    console.error('Error sending reset request:', err)
    return res.status(500).json({ status: false, message: 'Reset request failed', error: err.message})
  }
};

const passwordResetHandler = async (req, res) => {
  try{
  const { token, id, newPassword } = req.body;

  const user = await userModel.findById(id); // Retrieve user from database

  if(!user) return res.status(400).json('User not found')

  console.log('Stored resetPasswordToken:', user.resetPasswordToken);

  if (Date.now() > user.resetPasswordExpires) {
    return res.status(400).json('Invalid or expired token');
  }

  const isTokenValid = bcrypt.compareSync(token, user.resetPasswordToken);

  if (!isTokenValid) return res.status(400).json('Invalid or expired token');

  user.password = bcrypt.hashSync(newPassword, 10);
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();
  console.log('Password has been reSet')
  return res.status(200).json('Password has been reSet');
} catch(err){
  console.error('Error resetting password:', err);
  return res.status(500).json({ status: false, message: 'Password reset failed', error: err.message });
}
};

export default {register, login, resetRequestHandler, passwordResetHandler};