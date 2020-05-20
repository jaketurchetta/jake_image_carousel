DROP DATABASE IF EXISTS airbnbcarousel;

CREATE DATABASE airbnbcarousel;

\c airbnbcarousel;

DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS images;

CREATE TABLE properties(
   id   SERIAL PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(255),
   description   VARCHAR(255),
   address VARCHAR(255)
);

CREATE TABLE images(
   id      SERIAL PRIMARY KEY AUTO_INCREMENT,
   property_id   INTEGER REFERENCES properties(id),
   url           VARCHAR(255)
);



INSERT INTO properties VALUES (0, 'Rock Reach House - as profiled in dwell');

INSERT INTO images VALUES (0, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/0.jpg', 'Rock Reach House - mail floor');
INSERT INTO images VALUES (1, 0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/1.jpg', 'Rock Reach House - dawn outside');
INSERT INTO images VALUES (2, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/2.jpg', 'Rock Reach House - sunshine outter area');
INSERT INTO images VALUES (3, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/3.jpg', 'Rock Reach House - outside Bathtub');
INSERT INTO images VALUES (4, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/4.jpg', 'Rock Reach House - noon house overview');
INSERT INTO images VALUES (5, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/5.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (6, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/6.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (7, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/7.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (8, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/8.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (9, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/9.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (10, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/10.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (11, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/11.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (12, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/12.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (13, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/13.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (14,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/14.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (15,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/15.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (16,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/16.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO images VALUES (17,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/17.jpg', 'Rock Reach House - as profiled in dwell');