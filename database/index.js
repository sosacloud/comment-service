var mysql = require('mysql');
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

};
var getAllComments = () => {

};
var newComment = () => {

};

