const express=require('express');

const path=require('path');

const bodyParser=require('body-parser');

const app=express();

const sequelize=require('./Utils/Databases/database');
const groceries=require('./Utils/Databases/grocery');
const user=require('./Utils/Databases/user');

const adminRoute=require('./routes/admin');
const homeRoute=require('./routes/home');
const itemsRoute=require('./routes/items');
const loginsignuproute=require('./routes/loginsignup');

app.set('view engine','pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoute);
app.use(loginsignuproute);
app.use(itemsRoute);
app.use(homeRoute);

app.use((res,req,next)=>
{
    res.send('<h1>Page not found!!</h1>')
})

sequelize.sync().then(result=>{
    app.listen(3000);
}).catch(err=>{console.log(err)});
