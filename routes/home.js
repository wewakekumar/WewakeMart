const express=require('express');

const route=express.Router();

route.use('/',(req,res,next)=>
{
    res.render('home');
});

module.exports=route;