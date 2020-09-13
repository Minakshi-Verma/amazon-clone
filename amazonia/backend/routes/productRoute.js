import express from 'express';
import Product from '../models/productModel';
import getToken from '../util';

const router = express.Router();

//Route to get the list of products
router.get("/", async(req, res)=>{
//Get all the products in the database by quering using find(without any filter)
const products = await Product.find({});
res.send(products)
})

//Endpoint to create/add the product
router.post("/", async(req, res)=>{
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews
    });
    const newProduct = await product.save();
    if(newProduct){
        return res.send(201).send({msg: "New Product Created", data: newProduct})
    }
    return res.status(500).send({msg:"Error in creating Product"})
})
export default router