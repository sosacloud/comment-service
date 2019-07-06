const express = require('express');
const app = express();
const path = require('path');
var faker = require('faker');
const port = 3001;
var bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '../public/')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/comments/init', (req, res) => {
  //first 10 comments
  let start = 0;
  db.getAllComments((allComments) => {
    let returningComments = allComments.slice(start, start + 10);
    res.send(returningComments);
  })
});

app.get('/comments/load', (req, res) => {
  res.send('Hello')
});

app.post('/comments/new', (req, res) => {// [comment, timestamp, username, songname]
  let userName = 'User1';
  let songName = 'Song1';
  let comment = 'Hello again';
  let timeStamp = '2019-06-25 08:14:54';
  db.postNewUser([userName, ''], () => {
    db.postNewSong([songName], () => {
      db.postNewComment([comment, timeStamp, userName, songName], (newComment) => {
        console.log(newComment);
        res.send(newComment);
      });
    });
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));