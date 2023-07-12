var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

//import fetch module
var fetch = require("./src/fetch");
app.use('/fetch',fetch);

//create/insert data
var insert = require("./src/insert");
app.use('/insert',insert);

//update data
var update = require("./src/update");
app.use('/update',update);

//update data 
var remove = require("./src/delete");
app.use('/delete',remove);


//Assigning the port number
app.listen(8080);
console.log('server listning on port 8080');