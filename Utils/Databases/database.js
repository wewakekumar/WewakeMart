const mysql=require('mysql2');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'wewakemart',
    password:'Fluse@wewake123'
});
module.exports=pool.promise();