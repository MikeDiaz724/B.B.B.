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

INSERT INTO User (user, email, passcode) VALUES ( "Panchito", "haha@gmail.com", "1234");
INSERT INTO User (user, email, passcode) VALUES ("Marquito", "haha@gmail.com", "1234");
INSERT INTO User (user, email, passcode) VALUES ("Brunito", "haha@gmail.com", "1234");

CREATE TABLE Items (
  id int NOT NULL AUTO_INCREMENT,
  info varchar(150) NOT NULL,
  fecha DATE NOT NULL,
  title varchar(150) NOT NULL,
  postalCode INT NOT NULL,
  pics VARCHAR(150) NOT NULL,
  donde VARCHAR(150) NOT NULL,
  userid INT NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Items (info, fecha, title, postalCode, pics, donde, userid) VALUES ("Laptop", curdate(), "Laptop for sale", 30144,"https://i.imgur.com/x9kgxN3.jpg", 1);
INSERT INTO Items (info, fecha, title, postalCode, pics, donde, userid) VALUES ("TV", curdate(), "TV for sale", 06000, "https://i.imgur.com/L07NVYm.jpg", 2);
