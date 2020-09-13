import jwt from "jsonwebtoken";
import config from './config';

const getToken = (user) =>{
    //must pass a user object in jwt.sign
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    },config.JWT_SECRET,{
        expiresIn: '48h'
    })
}

//user authentication added using express middleware
 const isAuth = (req, res, next)=>{
    const token = req.headers.authorization;
    if(token){
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode)=>{
            if(err){
                return res.status(401).send({msg: "invalid Token"})
            }
            req.user = token
            next();
            return
        })
    }
    return res.status(401).send({msg: "Token is not supplied"})
 }

 //admin authentication added using express middleware
 const isAdmin = (req,res,next) =>{
     //check is req.user exist and isAdmin is true to verify
    if(req.user && req.user.isAdmin){
        return next()
    }
    return res.status(401).send({msg: "Admin token is not valid"})
 }

export  {
    getToken, isAuth, isAdmin
}