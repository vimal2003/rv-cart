const express=require('express')
const bcrypt=require('bcrypt')
const User=require('../models/userModal')

exports.loginUser=async(req,res)=>{
    try{
        const { email, password } = req.body;
        if (email.trim() === "" || password.trim() === "")
            return res.status(400).send({ message: "user name or password cannot be empty" });
        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).send({ message: "user name or password is invalid" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            return res.status(400).send({ message: "Invalid username or password" });
        return res.status(200).send({message:"Login success"})
    }
    catch (error) {
        console.log(error);
         return res.status(500).send({ message: "server error" });
     }
}