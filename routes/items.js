const express=require('express');

const router=express.Router();

const Grocery=require('../Utils/Databases/grocery');

router.get('/groceries',(req,res,next)=>
{
    Grocery.findAll()
    .then(products=>{
        res.render('items/groceries',{bp:'groceries',id:'1',groceries:products});
    })
    .catch(err=>console.log(err));
});

router.get('/medicines',(req,res,next)=>
{
    res.render('items/medicines',{bp:'medicines'});
});

router.get('/vegetables',(req,res,next)=>
{
    res.render('items/vegetables',{bp:'vegetables'});
});

router.get('/fruits',(req,res,next)=>
{
    res.render('items/fruits',{bp:'fruits'});
});

router.get('/milkproducts',(req,res,next)=>
{
    res.render('items/milkproducts',{bp:'milkproducts'});
});

module.exports=router;