const userModel= require('../models/userModel')
const {hashPassword, comparePassword} =require('../helpers/authHelper')
const jwt =require('jsonwebtoken')

const registerController= async (req,res)=>{
    try{
        const {name,email,password,phone,address,answer}=req.body
        if(!name){
            res.status(400).send({Error:"Name is required"})
        }
         if(!email){
            res.status(400).send({Error:"Email is required"})
        } if(!password){
            res.status(400).send({Error:"Password is required"})
        } if(!phone){
            res.status(400).send({Error:"Phone is required"})
        }
        let existinguser=await userModel.findOne({email})
        console.log("existting",existinguser)
        
        if(existinguser){
            res.status(200).send({
                success:false,
                message:"User already exists"
            })
        }
        let hashedPassword = await hashPassword(password)
        let user= await new userModel({name,email,password:hashedPassword,phone}).save()
        res.status(201).send({
            success:true,
            message:"User created successfully",
            user
        })
        }catch(error){
        res.status(500).send({
            success:false,
            message:"Error while creating new user"
        })
    }
}

const loginController= async(req,res)=>{
try{
    const {email,password}=req.body
    if(!email|| !password){
        res.status(404).send({Error:"Invalid email or password"})
    }
    let user= await userModel.findOne({email})
    if(!user){
        res.send(404).send({
            Error:"Email is not register"
        })
    }
    let match= await comparePassword(password,user.password)
    let token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})
       
    if(!match){
        res.status(400).send({Error:"Invalid Password"})
    }
    res.status(200).send({
        success:true,
        message:"User logged in successfully",
        user:{
                name:user.name,
                email:user.email,
                password:user.password,
                phone:user.phone,
            },
            token
    })
}catch(error){
    res.status(500).send({
            success:false,
            message:"Error while login user"
        })
}
}

module.exports={registerController,loginController}