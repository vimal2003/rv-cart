const express=require('express');
const cors=require('cors')
const app=express();
 app.use(express.json())
 app.use(cors())
const products=require('./routes/product')
const user=require('./routes/user')

app.use('/product',products)

app.use('/user',user)

module.exports=app;