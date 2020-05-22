const Sequelize=require('sequelize');
const db=new Sequelize('wewakemart','root','Fluse@wewake123',{
                                dialect:'mysql',
                                host:'localhost'
});

module.exports=db;