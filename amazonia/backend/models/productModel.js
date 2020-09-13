import mongoose from 'mongoose';

//Schema for the user model
const productSchema = new mongoose.Schema({
    name:{type:String, required: true},
    image:{type:String, required: true},
    brand:{type:String, required: true},
    Price:{type:Number, default:0, required: true},
    category:{type:String, required: true},
    countinStock:{type:Number,default:0, required: true},
    description:{type:String, required: true},
    rating:{type:Number, required: true},
    numReviews:{type:Number, default:0, required: true},
    

   
})

// In database productSchema will be saved with the name: Product
const productModel = mongoose.model("Product", productSchema)

export default productModel;