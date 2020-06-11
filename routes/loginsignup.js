const express=require('express');
const route=express.Router();
const db=require('../Utils/Databases/database');

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
   db.execute('Select * from users where users.email=?',[myemail])
   .then(([users])=>{
      if(users.length>0)
      console.log('Email already taken');
      else if(mypassword!==myconfirm)
      console.log('Password and confirm password should be same');
      else
       {
           bcrypt.hash(mypassword,12).then(hashpassword=>
            {
                db.execute('Create table if not exists users (id INTEGER NOT NULL auto_increment,name varchar(200) NOT NULL,email varchar(200) not null,phone varchar(10) not null,password varchar(200) not null,confirmpassword varchar(200) not null,PRIMARY KEY (id))')
                .then(db.execute('insert into users (id,name,email,phone,password,confirmpassword) values (default,?,?,?,?,?)',[myname,myemail,myphone,hashpassword,hashpassword])
                    .then(result=>{console.log('Created')})
                    .catch(err=>console.log(err))
                )
                .catch(err=>console.log(err))
            }).catch(err=>console.log(err));
       }
    }).catch(err=>console.log(err));
    res.redirect('/');
});

route.post('/login',(req,res,next)=>
{
    const email=req.body.username;
    const password=req.body.password;
    db.execute('Select * from users where email=?',[email])
    .then(([user])=>{
        if(user.length<1)
        {
            console.log('Invalid Username');
            res.redirect('/');
        }
    bcrypt.compare(password,user[0].password)
    .then(issame=>{ 
                if(!issame)
                console.log('Invalid Password');
                else
                
                {
                    req.session.isLoggedIn=true;
                    req.session.email=user[0].email;
                    res.redirect('/');
                }
                
            })
    .catch(err=>console.log(err));
})
});


route.post('/logout',(req,res,next)=>{
    req.session.destroy(err=>{
        console.log(err);
        res.redirect('/');
    })
})

module.exports=route;