var mysql = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'password',
  database: 'SoSaCloud'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
})

var getComment = () => {
  connection.query(`CREATE TABLE comments(
    comment_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    song_id INT NOT NULL,
    timestamp DATETIME NOT NULL,
    comment TEXT,
    PRIMARY KEY ( comment_id ),
    FOREIGN KEY ( user_id )
    REFERENCES users( user_id ),
    FOREIGN KEY ( song_id )
    REFERENCES songs( song_id ));`, function (error, results, fields) {
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

