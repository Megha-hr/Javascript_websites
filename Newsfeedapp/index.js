import express from "express"
import axios from "axios";
import path from "path";
import cors from "cors";
import dotenv from 'dotenv';
import { fileURLToPath } from "url";
import { dirname } from 'path';
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const app = express();
const port=3000;

dotenv.config();
const API_key=process.env.API_KEY;

// Example of setting CORS headers

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));




app.get("/newsapi",(req,res)=>{
  let category =req.query.category||"general";
    axios.get(`http://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_key}`)
    .then(response => {

     res.json(response.data);
     
    })
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})