var express = require('express');
const UserController = require('../../controllers/admin/UserController');
var UserRouter = express.Router();

UserRouter.post("/adminapi/user/login",UserController.login)
UserRouter.get("/adminapi/user/home",(req,res)=>{
    res.send({ok:1})
})

module.exports = UserRouter;
