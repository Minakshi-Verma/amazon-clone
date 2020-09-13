import express from 'express';
import User from '../models/userModel';
import getToken from '../util';

const router = express.Router();

//Route for register
router.post("/register", async(req,res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    const newUser = await user.save()   
    if(newUser){
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            //token will be sent to authenticate the user
            token: getToken(newUser)
        })
    }else{
        res.status(401).send({msg:"Invalid User Data"})
    }

})

//Route for signin
router.post("/signin", async(req,res)=>{
    //findone is a filter to check if fields have matching values
    //when query is sent to database
    //.findOne()available through mongoose
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if(signinUser){
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            //token will be sent to authenticate the user
            token: getToken(signinUser)
        })
    }else{
        res.status(401).send({msg:"Invalid Email or Password"})
    }

})

// router.get("/api/users/createadmin", async (req, res)=>{
router.get("/createadmin", async (req, res)=>{
    try{
        const user = new User({
            name: "Mini",
            email: "mvedwan@gmail.com",
            password: '1234',
            isAdmin:true
        });
        const newUser = await user.save();
        res.send(newUser)
    }
    catch(error){
        res.send({msg: error.message})
    }   
})
export default router