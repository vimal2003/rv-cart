const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please enter product name"],
        trim:true
    },
    price:{
        type:Number,
        required:[true,"please enter product price"]
    },
    description:{
        type:String,
        required:[true,"please enter product description"]
    },
    rating:{
        type:String,
        default:0
    },
    images:[{
        
            type:Array,
            required:true
        
    }],
    category:{
        type:String,
        required:[true,"please enter product category"],
           
    },
    brand:{
        type:String,
        required:[true,"please enter product brand"]
    },
    stock:{
        type:Number,
        required:[true,"please enter product stock"]
    }
   
})

let schema=mongoose.model('Product',productSchema)

module.exports=schema