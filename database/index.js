var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'M@trix224',
  database: 'SoSaCloud'
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
var newComment = (newEntry) => {
  connection.query('INSERT INTO comments (comment, time_stamp, user_id, song_id) VALUES (?, ?, (SELECT user_id from users WHERE user_name = ?), (SELECT song_id from songs WHERE song_name = ?))', newEntry, function (error, results, fields) {
    if (error) throw error;

  });
};

module.exports = {
  getComment,
  getAllComments,
  newComment
}