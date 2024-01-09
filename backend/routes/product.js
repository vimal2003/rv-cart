const express=require('express');
const { getAllProducts, newProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const router=express.Router();

router.route('/get').get(getAllProducts);
router.route('/new').post(newProduct);
router.route('/get-single-product/:id').get(getSingleProduct);
router.route('/update/:id').put(updateProduct)
router.route('/delete/:id').delete(deleteProduct)

module.exports=router