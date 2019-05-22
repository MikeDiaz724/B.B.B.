const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
	password: 'Holacode1',
	database: 'BBB'
});

connection.connect(err => {
	if (err){
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId)
});

exports.getAllItems = cb => {
	connection.query('SELECT * from Items', (err, res) => {
		if (err) {
			throw err;
		} else {
			cb(res);
		}
	});
};
