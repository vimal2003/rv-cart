const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter user name"]
    },
    email:{
        type:String,
        required:[true,"please enter user email"]
    },
    password:{
        type:String,
        required:[true,"please enter user password"]
    }

})

let schema=mongoose.model('User',userSchema);
 
module.exports=schema