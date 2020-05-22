const express=require('express');

const Sequelize=require('../Utils/Databases/database');
const Grocery=require('../Utils/Databases/grocery');
const router=express.Router();

router.get('/add-products',(req,res,next)=>
{
    res.render('form');
});

router.post('/add-products',(req,res,next)=>
{
    const mytitle=req.body.title;
    const myprice=req.body.price;
    const myurl=req.body.url;
    const mycategory=req.body.category;
    Grocery.create(
        {
            title:mytitle,
            price:myprice,
            imageURL:myurl,
            category:mycategory
        }).then(result=>{
        console.log('Inserted');
       })
        .catch(err=>console.log(err));
    res.redirect('/');
});

module.exports=router;