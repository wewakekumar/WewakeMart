const Sequelize=require('sequelize');
const db=require('./database');

const User=db.define('User',{
    name:{
            type:Sequelize.STRING,
            allowNull:false
        },
    email:{
            type:Sequelize.STRING,
            allowNull:false,
            primaryKey:true
        },
    phone:{
            type:Sequelize.STRING,
            allowNull:false
        },
    password:{
            type:Sequelize.STRING,
            allowNull:false
        },
    confirmpassword:{
            type:Sequelize.STRING,
            allowNull:false
        },
})

module.exports=User;