const express=require('express');

const router=express.Router();

const db=require('../Utils/Databases/database');

router.get('/groceries',(req,res,next)=>
{
    db.execute('Select * from groceries')
    .then(products=>{
        res.render('items/groceries',{bp:'groceries',groceries:products[0]});
    })
    .catch(err=>console.log(err));
});

router.get('/medicines',(req,res,next)=>
{
    db.execute('Select * from medicines')
    .then(products=>{
        res.render('items/medicines',{bp:'medicines',medicines:products[0]});;
    })
    .catch(err=>console.log(err));
    
});

router.get('/vegetables',(req,res,next)=>
{
    db.execute('Select * from vegetables')
    .then(products=>{
        res.render('items/vegetables',{bp:'vegetables',vegetables:products[0]});;
    })
    .catch(err=>console.log(err));
});

router.get('/fruits',(req,res,next)=>
{
    db.execute('Select * from fruits')
    .then(products=>{
        res.render('items/fruits',{bp:'fruits',fruits:products[0]});;
    })
    .catch(err=>console.log(err));
});

router.get('/milkproducts',(req,res,next)=>
{
    db.execute('Select * from milkproducts')
    .then(products=>{
        res.render('items/milkproducts',{bp:'milkproducts',milkproducts:products[0]});;
    })
    .catch(err=>console.log(err));
});

module.exports=router;