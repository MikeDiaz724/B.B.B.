const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const db = require('../database/mysql');


const app = express();

//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here


app.post('/register', function (request, response) {
  const { descript, email, password } = request.body;
  db.postUser(descript, email, password, res => {
    response
      .status(200)
      .send(res)
      .end();
  });
});
module.exports = app;
