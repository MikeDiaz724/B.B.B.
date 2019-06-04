const mysql = require('mysql2');

const config = {
  host: 'localhost',
  user: 'student',
  password: 'Holacode1',
  database: 'BBB',
};

const connection = mysql.createConnection(config);

const postUser =  (user, email, password, cb) => {
  connection.query(
    'INSERT INTO User (user, email, passcode) VALUES (?,?,?)',
    [user, email, password],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        cb(results);
      }
    }
  );
};

const postItem = (info, title, postalCode, pics, donde, userid, cb) => {
  connection.query(
    'INSERT INTO Items (info, title, postalCode, pics, donde, userid) VALUES (?,?,?,?,?,?)',
    [info, title, postalCode, pics, donde, userid],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        cb(results);
      }
    }
  );
};


module.exports = {
  postUser,
  postItem
};
