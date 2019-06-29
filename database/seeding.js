const mysql = require('./index.js');
var faker = require('faker');
var moment = require('moment');

let createComment = () => {
  let comment = randomMessage();
  return comment[0] + comment[1] + comment[2] + comment[3] + comment[4];
}

let randomElement = (array) => {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var randomMessage = function(){
  var opening = ['Im glad ', 'This makes me happy ', 'wut ', 'Im sad ', '', '', '', 'Check out my song ', 'Yo ', 'YOOOOOO ', 'What did I just listen to? '];
  var verbs = ['', 'dab ', 'lel ',];
  var objects = ['my ', 'your ', 'the ', 'a ', 'my ', 'an entire ', 'this ', 'that ', 'the '];
  var nouns = ['music ', 'song ', 'jam ', 'sandwich ', 'life ', 'wack '];
  var emoji = ['', '', '', ':) ', ':) :) :) ', ':( ', '', '', ':D ', 'D: '];
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(emoji)];
};



let userName;
let songName = 'This Song'

for (let i = 0; i < 100; i++) { // [comment, timestamp, username, songname]
  userName = faker.internet.userName(); // random userName
  mysql.postNewUser([userName, '']);
  mysql.postNewSong([songName]);
  mysql.postNewComment([createComment(), moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'), userName, songName]);
}