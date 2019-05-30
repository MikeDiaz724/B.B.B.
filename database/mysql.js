// If using MySQL, install mysql2 package with npm install -S mysql2
//mysql2 npm package has support for Promises
const mysql = require('mysql2');

//change database credentials as needed
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

const checkUser = (email, cb) => {
  console.log(email);
  
  connection.query(
    'SELECT id, user, email FROM User WHERE email="' + email + '"LIMIT 1',
    (err, res) => {
      cb(res[0]);     
    }
  );
};

module.exports = {
  postUser,
  checkUser
};
