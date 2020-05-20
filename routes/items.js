const express=require('express');

const router=express.Router();

router.get('/groceries',(req,res,next)=>
{
    res.render('items/groceries');
});

module.exports=router;