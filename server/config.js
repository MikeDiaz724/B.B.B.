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
  const { user, email, password } = request.body;
  db.postUser(user, email, password, res => {
    response
      .status(200)
      .send(res)
      .end();
  });
});

app.post('/post', function (request, response) {
  const { info, fecha, title, postalCode, pics, donde, userid } = request.body;
  db.postUser(info, fecha, title, postalCode, pics, donde, userid, res => {
    response
      .status(200)
      .send(res)
      .end();
  });
});

module.exports = app;
