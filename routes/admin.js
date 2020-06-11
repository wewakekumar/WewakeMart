const express=require('express');

const db=require('../Utils/Databases/database');
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
    db.execute('CREATE TABLE IF NOT EXISTS '+mycategory+' (id INTEGER NOT NULL auto_increment , title VARCHAR(255) NOT NULL, price DOUBLE PRECISION NOT NULL,imageURL VARCHAR(255) NOT NULL, category VARCHAR(255) NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB')
    .then(db.execute('Insert into '+mycategory+' (id,title,price,imageURL,category) values (DEFAULT,?,?,?,?)',[mytitle,myprice,myurl,mycategory]))
    .then(res.redirect('/'))
    .catch(err=>console.log(err));
});

module.exports=router;