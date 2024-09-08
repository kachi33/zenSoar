import dotenv from 'dotenv'

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/authroutes.js'

dotenv.config()
const app = express()

app.use(cors({
    origin: ["http://localhost:3000"], 
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use('/auth', userRouter)

mongoose.connect(process.env.MONGODB_URI)

.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err))

app.listen(process.env.PORT, () => {
    console.log(`server is running on Port ${process.env.PORT} `)
})