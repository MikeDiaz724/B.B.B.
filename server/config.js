const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const routes = require('./routes');


const app = express();

//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here


app.post('/register', routes.addUser);

module.exports = app;
