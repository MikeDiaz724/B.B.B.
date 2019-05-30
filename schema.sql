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
  userid INT NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Items (info, fecha, title, postalCode, userid) VALUES ("Laptop", curdate(), "Laptop for sale", 30144, 1);
INSERT INTO Items (info, fecha, title, postalCode, userid) VALUES ("TV", curdate(), "TV for sale", 06000, 2);


CREATE TABLE Photo (
  id int NOT NULL AUTO_INCREMENT,
  url_item VARCHAR(150) NOT NULL,
  userid INT NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO photo (url_item, userid) VALUES ("https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000213115_sa.jpg", 1);
INSERT INTO photo (url_item, userid) VALUES ("https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000213115_sa.jpg", 2);