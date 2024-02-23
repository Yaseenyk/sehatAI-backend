const express= require('express');
const router= express.Router();
const signUpApi=require('../../../controller/api/v1/addUser_api');

router.post('/add',signUpApi.signUp);
module.exports=router;