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
var getAllComments = (cb) => {
  connection.query('SELECT * FROM comments ORDER BY time_stamp DESC', function (error, results, fields) {
    if (error) throw error;
    cb(results);
  });
};
var newComment = (newEntry) => {
  connection.query('INSERT INTO comments (comment, time_stamp, user_id, song_id) VALUES (?, ?, (SELECT user_id from users WHERE user_name = ?), (SELECT song_id from songs WHERE song_name = ?))', newEntry, function (error, results, fields) {
    if (error) throw error;

  });
};
var newUser = (entry) => {
  connection.query('INSERT INTO users (user_name) VALUES (?) ON DUPLICATE KEY UPDATE user_name=user_name;', entry, function (error, results, fields) {
    if (error) throw error;

  });
};
var newSong = (entry) => {
  connection.query('INSERT INTO songs (song_name) VALUES (?) ON DUPLICATE KEY UPDATE song_name=song_name;', entry, function (error, results, fields) {
    if (error) throw error;

  });
};

module.exports = {
  getComment,
  getAllComments,
  newComment,
  newUser,
  newSong
}