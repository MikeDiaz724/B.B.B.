DROP DATABASE IF EXISTS BBB;

CREATE DATABASE BBB;

USE BBB;

CREATE TABLE User (
  id int NOT NULL AUTO_INCREMENT,
  user varchar(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  passcode VARCHAR(150) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO User (id, user, email, passcode) VALUES (1, "Panchito", "haha@gmail.com", "1234");
INSERT INTO User (id, user, email, passcode) VALUES (2, "Marquito", "haha@gmail.com", "1234");
INSERT INTO User (id, user, email, passcode) VALUES (3, "Brunito", "haha@gmail.com", "1234");

