var mysql = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'password',
  database: 'comments'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
})

var getComment = () => {
  connection.query('', function (error, results, fields) {
    if (error) throw error;

  });
};
var getAllComments = () => {
  connection.query('', function (error, results, fields) {
    if (error) throw error;

  });
};
var newComment = () => {
  connection.query('', function (error, results, fields) {
    if (error) throw error;

  });
};

