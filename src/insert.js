//mysql Database connect with nodejs
var con = require('../db_connections');
var connection = con.getConnection();
connection.connect();

var express = require('express');

var router = express.Router();

router.post('/', (req,res)=>{
    var id = req.body.id;
    var name = req.body.name;
    var salary = req.body.salary;

    connection.query("insert into employees values ("+id+",'"+name+"',"+salary+")", (err,result)=>{
        if(err){
            res.send({"insert":"fail"});
        }
        else{
            res.send({"insert":"success"});
        }
    });
});

module.exports = router;
