DROP DATABASE IF EXISTS SoSaCloud;

CREATE DATABASE SoSaCloud;
USE SoSaCloud;

CREATE TABLE users(
  user_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (user_id)
);

CREATE TABLE songs(
  song_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (song_id)
);

CREATE TABLE comments(
  comment_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL, song_id INT NOT NULL,
  time_stamp DATETIME NOT NULL,
  comment TEXT, PRIMARY KEY ( comment_id ),
  FOREIGN KEY ( user_id )
    REFERENCES users ( user_id ),
  FOREIGN KEY ( song_id )
    REFERENCES songs ( song_id )
);
