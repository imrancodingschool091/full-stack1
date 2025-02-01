import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import { connectDb } from "./db/connection.js";
import router from "./routes/user.routes.js";



const app=express()



app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


dotenv.config()
connectDb()



app.use("/api/user",router)

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`the app is listning on port ${PORT}`)
})