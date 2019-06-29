DROP DATABASE IF EXISTS SoSaCloud;

CREATE DATABASE SoSaCloud;
USE SoSaCloud;

CREATE TABLE users(
  user_id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(30) UNIQUE NOT NULL,
  profile_pic TEXT,
  PRIMARY KEY (user_id)
);

CREATE TABLE songs(
  song_id INT NOT NULL AUTO_INCREMENT,
  song_name VARCHAR(255) UNIQUE NOT NULL,
  PRIMARY KEY (song_id)
);

CREATE TABLE comments(
  comment_id INT NOT NULL AUTO_INCREMENT,
  user_id INT,
  song_id INT,
  time_stamp DATETIME NOT NULL,
  response_id INT DEFAULT 0,
  comment TEXT NOT NULL, PRIMARY KEY ( comment_id ),
  FOREIGN KEY ( user_id )
    REFERENCES users ( user_id ),
  FOREIGN KEY ( song_id )
    REFERENCES songs ( song_id )
);

/*  To execute, run:
 *    mysql -u <USER> -p < schema.sql
 *  in the terminal. */