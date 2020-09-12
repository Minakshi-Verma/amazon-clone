import mongoose from 'mongoose';

//define userSchema
const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true, unique: true},
    password:{type:String, required: true},
    isAdmin:{type: Boolean, required, default: false}
})

const userModel = mongoose.model("User", userSchema)

export default userModel;
