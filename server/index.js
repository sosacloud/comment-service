const express = require('express');
const app = express();
var faker = require('faker');
const port = 3001;
var bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.static('/../client/dist'));
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


app.listen(port, () => console.log(`Example app listening on port ${port}!`));