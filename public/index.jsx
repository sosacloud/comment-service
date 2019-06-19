



let createComment = () => {

}

let randomElement = (array) => {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var randomMessage = function(){
  var opening = ['Im glad', 'This makes me happy', 'wut', 'Im sad', '', '', '', 'Check out my song', 'Yo', 'YOOOOOO', 'What did I just listen to?'];
  var verbs = ['', 'dab', 'lel',];
  var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the'];
  var nouns = ['music', 'song', 'jam', 'sandwich', 'life', 'wack'];
  var emoji = ['', '', '', ':)', ':) :) :)', ':(', '', '', ':D', 'D:'];
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(emoji)].join(' ');
};