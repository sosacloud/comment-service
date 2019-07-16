var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: 'pass',
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
  connection.query('SELECT * FROM comments INNER JOIN users ON comments.user_id=users.user_id ORDER BY response_id DESC, time_stamp ASC', function (error, results, fields) {
    if (error) throw error;
    cb(results);
  });
};
var getCommentCount = (songName, cb) => {
  connection.query('SELECT count(*) from comments INNER JOIN songs ON comments.song_id=songs.song_id where song_name=?;', songName, function (error, results, fields) {
    if (error) throw error;
    if (cb) {
      cb(results);
    }
  });
};
var postNewComment = (newEntry, cb) => {
  connection.query('INSERT INTO comments (comment, time_stamp, song_time, user_id, song_id, response_id) VALUES (?, ?, ?, (SELECT user_id from users WHERE user_name = ?), (SELECT song_id from songs WHERE song_name = ?), ?)', newEntry, function (error, results, fields) {
    if (error) throw error;
    if (cb) {
      cb(results);
    }
  });
};
var postNewUser = (entry, cb) => {
  connection.query('INSERT INTO users (user_name, profile_pic) VALUES (?, ?) ON DUPLICATE KEY UPDATE user_name=user_name;', entry, function (error, results, fields) {
    if (error) throw error;
    if (cb) {
      cb();
    }
  });
};
var postNewSong = (entry, cb) => {
  connection.query('INSERT INTO songs (song_name) VALUES (?) ON DUPLICATE KEY UPDATE song_name=song_name;', entry, function (error, results, fields) {
    if (error) throw error;
    if (cb) {
      cb();
    }
  });
};

module.exports = {
  getComment,
  getAllComments,
  getCommentCount,
  postNewComment,
  postNewUser,
  postNewSong
}