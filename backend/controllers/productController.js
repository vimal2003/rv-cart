const Product=require('../models/productModel')

//get all products
exports.getAllProducts=async(req,res)=>{
    try{
    const products=await Product.find()
    res.status(200).json({message:"get products success",
    count:products.length,
    products})
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: "server error" });
    }
}

//adds a new product
exports.newProduct=async(req,res)=>{
    try{
 const product=await Product.create(req.body)
 res.status(200).json({product})
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: "server error" });
    }
}

//get a single product
exports.getSingleProduct=async(req,res)=>{
    try{
      
      const product=await Product.findById(req.params.id);
      if(!product)
      return res.status(400).send({message:"product not found"})
    return res.status(200).json({message:"product found",product})
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: "server error" });
    }
}

//update a product
exports.updateProduct=async(req,res)=>{
    try{
    let product=await Product.findById(req.params.id);
    if(!product)
    return res.status(400).send({message:"product not found"})
   product =await Product.findByIdAndUpdate(req.params.id,req.body,
{
    new:true,
    runValidators:true
})
res.status(200).json({message:"successfully updated",product})
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: "server error" });
    }
}

//delete a product
exports.deleteProduct=async(req,res)=>{
    try{
    let product=await Product.findById(req.params.id);
    if(!product)
    return res.status(400).send({message:"product not found"})
     await Product.findByIdAndDelete(req.params.id);
     res.status(200).json({message:"product deleted"})
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ message: "server error" });
    }
}