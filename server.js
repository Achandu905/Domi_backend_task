import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from "morgan";
import connectDB from "./config/db.js";

//configure env file
dotenv.config()

//rest object
const app=express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//config DB
connectDB()


app.get('/',(req,res)=>{
    res.send("<h1>Welcome to backend</h1>")
})

const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
  console.log(`Server is running on PORT NO :${PORT} `)
})