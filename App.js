const express=require('express');
const path=require('path');
const session=require('express-session');
const bodyParser=require('body-parser');
const mysql=require('mysql2');

const app=express();

const adminRoute=require('./routes/admin');
const homeRoute=require('./routes/home');
const itemsRoute=require('./routes/items');
const loginsignuproute=require('./routes/loginsignup');

app.set('view engine','pug');
app.set('views','views');


const mysqlstore=require('express-mysql-session')(session);
const sessionstore=new mysqlstore({ host:'localhost',
user:'root',
database:'wewakemart',
password:'Fluse@wewake123'
});
app.use(session({key:'mykey',secret:'mysecret',resave:false,saveUninitialized:false,store:sessionstore}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoute);
app.use(loginsignuproute);
app.use(itemsRoute);
app.use(homeRoute);

app.use((req,res,next)=>
{
    res.send('<h1>Page not found!!</h1>')
})


app.listen(3000);

