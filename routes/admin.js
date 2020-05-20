const express=require('express');

const router=express.Router();

router.get('/add-products',(req,res,next)=>
{
    res.render('form');
});

router.post('/add-products',(req,res,next)=>
{
    console.log(req.body);
    res.redirect('/')
});

module.exports=router;