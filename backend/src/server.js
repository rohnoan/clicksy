import express from "express"
import dotenv from 'dotenv'
import connectDB from "./config/db.js";

const app=express();
dotenv.config();
connectDB();

app.get("/",(req,res)=>{
    res.send("hello word");
})

const PORT=5000;

app.listen(PORT,()=>console.log(`server running on PORT : ${PORT}`))