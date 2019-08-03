const express = require('express');
const expressVue = require('express-vue');
const app = express();
const path = require('path');
var port = process.env.PORT || 3001;
var bodyParser = require('body-parser');
const db = require('../database/index.js');

expressVue.use(app);

app.use(express.static(path.join(__dirname, '../public/')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/comments/init', (req, res) => {
  //first 10 comments
  let start = Number(req.query.start);
  // console.log("REQ QUERY", req.query);
  db.getAllComments((allComments) => {
    let returningComments = allComments.slice(start * 10, (start + 1) * 10);
    // console.log('DATA RANGE:', start * 10, " TO ", (start + 1) * 10);
    res.send(returningComments);
    // res.send(allComments);
  })
});

app.get('/comments/count', (req, res) => {
  let songName = [req.query.songName];
  // console.log('SONGNAME',songName[0]);
  db.getCommentCount(songName, (commentCount) => {
    // console.log('COMMENTCOUNT', commentCount[0]['count(*)']);
    res.send(commentCount[0]);
  })
});

app.post('/comments/new', (req, res) => {
  let userName = req.body.user_name;
  let songName = 'This Song';
  let comment = req.body.comment;
  let timeStamp = req.body.time_stamp;
  let responseId = req.body.response_id ? req.body.response_id: 0;
  let songTime = Math.floor(Math.random() * 180);
  let profilePic = req.body.profile_pic;
  // console.log('RESPONSE ID ACTUAL', req.body.response_id);
  // console.log('RESPONSE ID', responseId);
  db.postNewUser([userName, profilePic], () => {
    db.postNewSong([songName], () => {
      db.postNewComment([comment, timeStamp, songTime, userName, songName, responseId], (newComment) => {
        // console.log('NEW COMMENT:', newComment);
        res.send(newComment);
      });
    });
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));