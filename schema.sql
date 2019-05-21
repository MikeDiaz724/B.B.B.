DROP DATABASE IF EXISTS BBB;

CREATE DATABASE BBB;

USE BBB;

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  user varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO user (id, user) VALUES (1, "Panchito");
INSERT INTO user (id, user) VALUES (2, "Marquito");
INSERT INTO user (id, user) VALUES (3, "Brunito");

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  info varchar(150) NOT NULL,
  fecha DATE NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO items (id, info, fecha) VALUES (1, "Laptop", curdate());
INSERT INTO items (id, info, fecha) VALUES (2, "TV", curdate());


CREATE TABLE photo (
  id int NOT NULL AUTO_INCREMENT,
  url_item VARCHAR(150) NOT NULL
  PRIMARY KEY (ID)
);

INSERT INTO photo (id, url_item) VALUES (1, "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000213115_sa.jpg");
INSERT INTO photo (id, url_item) VALUES (2, "https://pisces.bbystatic.com/image2/BestBuy_MX/images/products/1000/1000213115_sa.jpg");