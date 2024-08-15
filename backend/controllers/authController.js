require('dotenv').config()

const userModel = require('../models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = (req, res) => {
  const { username, email, password } = (req.body)
  
  userModel.findOne({ email })
    .then(existingUser => {
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }
      return bcrypt.hash(password, 10);
    })
    .then(hashedPassword => {
      return userModel.create({ username, email, password: hashedPassword });
    })
    .then(newUser => {
      res.status(201).json({ id: newUser._id, username: newUser.username, email: newUser.email });
    })
    .catch(err => {
      res.status(500).json({ message: 'Server error', error: err });
    });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  userModel.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            return res.status(400).json({ message: 'Password is incorrect' });
          }
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
          res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
        });
    })
    .catch(err => {
        console.error(err); // Log errors
      res.status(500).json({ message: 'Server error', error: err });
    });
};
