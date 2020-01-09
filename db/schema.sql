-- Drop the burgers_db database if already exists 
DROP DATABASE IF EXISTS burgers_db;

-- Create database and specify it for use
CREATE DATABASE burgers_db; 

USE burgers_db;

-- Create the table burger.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured boolean,
  PRIMARY KEY (id)
);