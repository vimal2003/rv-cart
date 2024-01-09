const express=require('express')

const {addUser,getUser}=require('../controllers/userController')
const {loginUser}=require('../controllers/loginController')
const router=express.Router();

router.route('/adduser').post(addUser)
router.route('/getUser').get(getUser)
router.route('/login').get(loginUser)

module.exports=router;