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

CREATE TABLE Items (
  id int NOT NULL AUTO_INCREMENT,
  info varchar(150) NOT NULL,
  fecha DATE NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Items (id, info, fecha) VALUES (1, "Laptop", curdate());
INSERT INTO Items (id, info, fecha) VALUES (2, "TV", curdate());


CREATE TABLE Photo (
  id int NOT NULL AUTO_INCREMENT,
  url_item VARCHAR(150) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO photo (id, url_item) VALUES (1, "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000213115_sa.jpg");
INSERT INTO photo (id, url_item) VALUES (2, "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000213115_sa.jpg");