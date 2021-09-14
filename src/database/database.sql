CREATE DATABASE harward_db;

CREATE TABLE info(
    mail varchar(156) not null,
    number1 varchar(13) not null,
    number2 varchar(13) not null,
    address varchar(100) not null
);

CREATE TABLE contact(
    name varchar(70) not null,
    number varchar(13) not null,
    body text not null,
    time timestamptz default null
);

CREATE TABLE news(
    news_id serial primary key,
    title varchar(100) not null,
    body text not null,
    image varchar(100) not null,
    author varchar(70) not null,
    time timestamptz default null
);

CREATE TABLE courses(
    course_id serial primary key,
    image varchar(100) not null,
    title varchar(100) not null,
    teacher varchar(100) not null,
    prise int not null
);

CREATE TABLE comment_course(
    comment_id serial primary key,
    name varchar(70) not null,
    body text not null,
    time timestamptz default null
);

CREATE TABLE about(
    title varchar(50) not null,
    body text not null,
    iframe varchar(70) not null
);