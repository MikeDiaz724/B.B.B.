// const { groceryList } = require('../database/data');
const db = require('../database/mysql');

exports.addUser = (request, response) => {
  console.log("node adduser is invokeds")
  const { descript, email, password } = request.body;
  db.postUser(descript, email, password, res => {
    response
      .status(200)
      .send(res)
      .end();
  });
};
