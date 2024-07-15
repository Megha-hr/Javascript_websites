import express from "express"
import axios from "axios";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from 'path';

//  to get __dirname in ES modules
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const app = express();
const port=3000;

// Example of setting CORS headers
app.use(cors());



// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname,'public')));


app.use(express.json());

app.get("/newsapi",(req,res)=>{
  let category =req.query.category||"general";
    axios.get(`http://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=446fef67ae134121a073af1989944e7e`)
    .then(response => {
     res.json(response.data);// Send the JSON response to the client
     
    })
})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})