//mysql Database connect with nodejs
var con = require('../db_connections');
var connection = con.getConnection();
connection.connect();


var express = require('express');

var router = express.Router();

router.get('/', (req,res)=>{
    connection.query('select * from employees', (err,array,feilds)=>{
        res.send(array);
    });
});

module.exports = router;
