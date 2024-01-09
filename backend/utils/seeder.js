const products=require('../data/products.json')
const Product=require('../models/productModel')
const dotenv=require('dotenv')
const connectDatabase=require('../config/database')

dotenv.config({path:'backend/config/config.env'})
connectDatabase();

const seedProducts=async()=>{
    try{
        //console.log(products)
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("All products added")
}catch(error){
    console.log(error,'error');
}
process.exit();
}
seedProducts();