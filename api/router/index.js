var router=require("express").Router()
var user=require('../controller/user') //controller


router.post('/register',user.register)

module.exports=router;
