CREATE DATABASE harward_db;

-- create info table
CREATE TABLE info(
    mail varchar(156) not null,
    number1 varchar(13) not null,
    number2 varchar(13) not null,
    address varchar(100) not null
);

-- create home_contact
CREATE TABLE home_contact(
    name varchar(70) not null,
    number varchar(13) not null,
    time timestamptz default current_timestamp
);

-- create contact table
CREATE TABLE contact(
    name varchar(70) not null,
    number varchar(13) not null,
    body text not null,
    checked smallint default 0,
    time timestamptz default current_timestamp
);

-- create news table
CREATE TABLE news(
    news_id serial primary key,
    title varchar(100) not null,
    body text not null,
    image varchar(100) not null,
    author varchar(70) not null,
    time timestamptz default current_timestamp
);

-- create courses table
CREATE TABLE courses(
    course_id serial primary key,
    image varchar(100) not null,
    title varchar(100) not null,
    teacher varchar(100) not null,
    prise int not null
);

-- create table comment_course
CREATE TABLE comment_course(
    comment_id serial primary key,
    name varchar(70) not null,
    body text not null,
    time timestamptz default current_timestamp
);

-- create table about
CREATE TABLE about(
    title varchar(50) not null,
    body text not null,
    iframe text not null
);