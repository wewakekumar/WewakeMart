const express=require('express');
const Sequelize=require('../Utils/Databases/database');
const User=require('../Utils/Databases/user');
const route=express.Router();

const bcrypt=require('bcryptjs');


route.get('/signup',(req,res,next)=>
{
    res.render('signup');
});

route.post('/signup',(req,res,next)=>
{
   const myname=req.body.name;
   const myemail=req.body.email;
   const myphone=req.body.phone;
   const mypassword=req.body.password;
   const myconfirm=req.body.confirmpassword;
   User.findAll({where:{email:myemail}})
   .then(users=>{
       if(users.length>0)
      console.log('Email already taken');
       else
       {
           bcrypt.hash(mypassword,12).then(hashpassword=>
            {
                User.create(
                    {
                        name:myname,
                        email:myemail,
                        phone:myphone,
                        password:hashpassword,
                        confirmpassword:myconfirm
                    }).then(result=>{console.log('Created');})
                    .catch(err=>console.log(err));
            }).catch(err=>console.log(err));
       }
   }).catch(err=>console.log(err));
    res.redirect('/');
});

module.exports=route;