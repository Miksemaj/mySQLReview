DROP DATABASE IF EXISTS fooddb;

CREATE DATABASE fooddb;

USE fooddb;

CREATE TABLE Food (
  id int auto_increment not null,
  name varchar(255) not null,
  price int not null,
  rating int not null,
  primary key (id)
);