DROP DATABASE IF EXISTS airbnbCarousel;

CREATE DATABASE airbnbCarousel;

\c airbnbCarousel;

DROP TABLE IF EXISTS property;
DROP TABLE IF EXISTS imageArray;

CREATE TABLE property(
   property_id   SERIAL PRIMARY KEY,
   description   VARCHAR(255)
);

CREATE TABLE imageArray(
   image_id      SERIAL PRIMARY KEY,
   property_id   INTEGER REFERENCES property(property_id),
   url           VARCHAR(255),
   description   VARCHAR(255)
);

INSERT INTO property VALUES (0, 'Rock Reach House - as profiled in dwell');

INSERT INTO imageArray VALUES (0, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/00.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (1, 0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/01.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (2, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/02.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (3, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/03.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (4, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/04.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (5, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/05.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (6, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/06.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (7, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/07.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (8, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/08.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (9, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/09.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (10, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/10.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (11, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/11.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (12, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/12.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (13, 0,'https://6-pack.s3-us-west-1.amazonaws.com/00/13.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (14,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/14.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (15,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/15.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (16,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/16.jpg', 'Rock Reach House - as profiled in dwell');
INSERT INTO imageArray VALUES (17,0, 'https://6-pack.s3-us-west-1.amazonaws.com/00/17.jpg', 'Rock Reach House - as profiled in dwell');
