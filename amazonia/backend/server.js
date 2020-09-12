import express from "express";
import data from "./data";
import dotenv from "dotenv";
import config from './config';
import mongoose from "mongoose";

dotenv.config()

//Get access to mongodbrul
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true
})
.catch(error => console.log(error.reason))


const app = express();

app.get("/api/products", (req, res)=>{
    res.send(data.products)
})

app.get("/api/products/:id", (req,res)=>{
    // const {productId}= req.params
    const productId = req.params.id
    const product =data.products.find(product=>product._id=== productId)
    if(product){
      res.send(product) 
    }else{
        res.status(404).send({message: "Product not found!"})
    }
    
})
app.listen(8000, ()=>{
    console.log("Server started at http://localhost:8000")
})
