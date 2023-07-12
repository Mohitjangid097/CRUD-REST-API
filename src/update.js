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

    connection.query("update employees set name='"+name+"', salary="+salary+" where id="+id, (err,result)=>{
        if(err){
            res.send({"update":"fail"});
        }
        else{
            res.send({"update":"success"});
        }
    });
});
module.exports = router;