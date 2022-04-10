DROP DATABASE IF EXISTS sexy_db;
CREATE DATABASE sexy_db;
USE sexy_db;
-- DROP DATABASE IF EXISTS ;
-- CREATE DATABASE ;
-- USE ;
-- sequalize goes here

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(10) NOT NULL,
    email VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL
);


CREATE TABLE recipes (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    ingredients VARCHAR(1000) NOT NULL,
    directions VARCHAR(2000) NOT NULL,
    user_id INT references users(id)
);