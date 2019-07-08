const express = require('express');
const expressVue = require('express-vue');
const app = express();
const path = require('path');
const port = 3001;
var bodyParser = require('body-parser');
const db = require('../database/index.js');

/////////////////////////////////
// const vueOptions = {
//   rootPath: path.join(__dirname, '../example/views'),
//   head: {
//       title: 'Hello this is a global title',
//       scripts: [
//           { src: 'https://example.com/script.js' },
//       ],
//       styles: [
//           { style: '/assets/rendered/style.css' }
//       ]
//   },
//   data: {
//       foo: true,
//       bar: 'yes',
//       qux: {
//           id: 123,
//           baz: 'anything you wish, you can have any kind of object in the data object, it will be global and on every route'
//       }
//   }
// };

expressVue.use(app);

///////////////////////////////////

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