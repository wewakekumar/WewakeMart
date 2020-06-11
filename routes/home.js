const express=require('express');

const route=express.Router();

route.get('/',(req,res,next)=>
{
    res.render('home',{text:req.session.email,auth:req.session.isLoggedIn});
});

module.exports=route;