const Sequelize=require('sequelize');

const db=require('./database');

const Grocery=db.define('grocery',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        title:
        {
            type:Sequelize.STRING,
            allowNull:false
        },
        price:
        {
            type:Sequelize.DOUBLE,
            allowNull:false
        },
        imageURL:{
            type:Sequelize.STRING,
            allowNull:false
        },
        category:
        {
            type:Sequelize.STRING,
            allowNull:false
        }
});

module.exports=Grocery;