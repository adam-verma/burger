-- Drop the burgers_db database if already exists 
DROP DATABASE IF EXISTS h6mmoj5dbwnra8gn;

-- Create database and specify it for use
CREATE DATABASE h6mmoj5dbwnra8gn;

USE h6mmoj5dbwnra8gn;

-- Create the table burger.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured boolean,
  PRIMARY KEY (id)
);