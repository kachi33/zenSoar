import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetPasswordToken:{ type: String,},
    resetPasswordExpires:{type: String}
  })

const userModel = mongoose.model("Users", userSchema)
export default userModel