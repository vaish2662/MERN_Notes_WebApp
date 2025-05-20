const userModel= require('../models/userModel')
const jwt= require('jsonwebtoken')

const requireSignIn=(req,res,next)=>{
    try{
        let decode= jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode
    }catch(error){
        res.status(500).send(error)
    }
}
module.exports={requireSignIn}