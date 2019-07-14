const express = require('express');
const expressVue = require('express-vue');
const app = express();
const path = require('path');
const port = 3001;
var bodyParser = require('body-parser');
const db = require('../database/index.js');

expressVue.use(app);

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
  let userName = req.body.user_name;
  let songName = 'Song1';
  let comment = req.body.comment;
  let timeStamp = req.body.time_stamp;
  let responseId = req.body.responseId ? req.body.responseId: 0;
  let songTime = Math.floor(Math.random() * 180);
  db.postNewUser([userName, ''], () => {
    db.postNewSong([songName], () => {
      db.postNewComment([comment, timeStamp, songTime, userName, songName, responseId], (newComment) => {
        console.log(newComment);
        res.send(newComment);
      });
    });
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));