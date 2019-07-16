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
  var opening = ['Im glad ', 'This makes me happy ', 'wut ', 'Im sad ', '', '', '', 'Check out my song ', 'Yo ', 'YOOOOOO ', 'What did I just listen to? ', "Hi im a 15 year old rapper. Please check out my song named: "];
  var verbs = ['', 'dab ', 'lel ',];
  var objects = ['my ', 'your ', 'the ', 'a ', 'my ', 'an entire ', 'this ', 'that ', 'the '];
  var nouns = ['music ', 'song ', 'jam ', 'sandwich ', 'life ', 'wack '];
  var emoji = ['', '', '', ':) ', ':) :) :) ', ':( ', '', '', ':D ', 'D: ', 'H'];
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(emoji)];
};



let userName;
let profilePic;
let songName = 'This Song';
let responseId = 1;
for (let i = 0; i < 100; i++) { // [comment, timestamp, username, songname]
  userName = faker.internet.userName(); // random userName
  profilePic = faker.image.avatar();
  songTime = Math.floor(Math.random() * 180);
  mysql.postNewUser([userName, profilePic]);
  mysql.postNewSong([songName]);
  mysql.postNewComment([createComment(), moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'), songTime,  userName, songName, responseId++]);
}