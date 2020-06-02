DROP DATABASE IF EXISTS airbnbcarousel;

  CREATE DATABASE airbnbcarousel;

  \c airbnbcarousel;

  CREATE TABLE properties(
    id             SERIAL PRIMARY KEY
  );

  CREATE TABLE images(
    id             SERIAL PRIMARY KEY,
    property_id    INTEGER,
    position       INTEGER,
    url            VARCHAR(255),
    description    VARCHAR(255)
  );

-- ADD CONSTRAINTS
-- AFTER THE DATABASE HAS BEEN SEEDED !!

ALTER TABLE images ADD FOREIGN KEY (property_id) REFERENCES properties(id);
