import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from  "body-parser"
import dotenv from "dotenv"
import posts from "./routes/posts.js"
import userRouter from "./routes/user.js";

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());
dotenv.config()

 app.use("/posts", posts)
 app.use("/user", userRouter);

const DB_URI = process.env.DATABASE_URI
const PORT = process.env.PORT || 5000
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`app running on port ${PORT}`)
        }) 
    })
    .catch(error=>{
        console.log(error.message, "can't connect to DB")
    })