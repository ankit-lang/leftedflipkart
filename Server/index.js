import express from "express"
import { Connection } from "./databse/db.js";
import dotenv from "dotenv"
import Defaultdata from "./default.js";
import router from "./routes/route.js";
import cors from  "cors"
const PORT = 8000;

const app = express()
app.use(express.json())

dotenv.config()
const username = process.env.mongouser
const password = process.env.password

app.use(cors())
app.use("/",router)

Connection(username,password);
app.listen(PORT,()=>{
    console.log("server runing hello0-")
})
Defaultdata();