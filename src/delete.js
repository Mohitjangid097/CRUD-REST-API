//mysql Database connect with nodejs
var con = require('../db_connections');
var connection = con.getConnection();
connection.connect();

var express = require('express');
var router = express.Router();

router.post('/', (req,res)=>{
    var id = req.body.id;

    connection.query("delete from employees where id=" +id, (err,result)=>{
        if(err){
            res.send({"delete":"fail"});
        }
        else{
            res.send({"delete":"success"});
        }
    });
});

module.exports = router;
