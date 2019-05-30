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

app.post('/authenticate', (req, res) => {
  const { email } = req.body ;
  console.log(req.body)
  db.checkUser(email, (result) =>{
    res.end(JSON.stringify(result));
  });
});


module.exports = app;
