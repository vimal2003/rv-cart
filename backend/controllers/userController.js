const User=require('../models/userModal')
const bcrypt = require('bcrypt');

exports.addUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const mail=await User.findOne({email});
        if(mail)
        return res.status(402).json({message:"This email already exist"})
        const pass=await bcrypt.hash(password,10);
        const user=await User.create({
    name,email,password:pass
        })
        res.status(200).json({user})
           }
    catch (error) {
    console.log(error);
     return res.status(500).send({ message: "server error" });
 }
}

exports.getUser=async(req,res)=>{
    try{
      const user=await User.find();
      return res.status(200).json({user});
    }
    catch (error) {
        console.log(error);
         return res.status(500).send({ message: "server error" });
     }
}

