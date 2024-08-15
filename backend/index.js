require('dotenv').config();

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authController = require('./controllers/authController')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI)

// ROUTES
app.post('/register', authController.register)
app.post('/login', authController.login)

app.listen(3001, () => {
    console.log("server is running")
})