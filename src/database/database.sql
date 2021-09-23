CREATE DATABASE harward_db;
CREATE EXTENSION pgcrypto;

-- create info table
CREATE TABLE info(
    mail varchar(156) not null,
    number1 varchar(13) not null,
    number2 varchar(13) not null,
    address varchar(100) not null
);

-- create home_contact
CREATE TABLE home_contact(
    home_contact_id serial primary key,
    name varchar(70) not null,
    number varchar(13) not null,
    checked smallint default 0,
    time timestamptz default current_timestamp
);

-- create contact table
CREATE TABLE contact(
    contact_id serial primary key,
    name varchar(70) not null,
    number varchar(13) not null,
    body text not null,
    checked smallint default 0,
    time timestamptz default current_timestamp
);

-- create courses table
CREATE TABLE courses(
    course_id serial primary key,
    image varchar(100) not null,
    title varchar(70) not null,
    body text not null,
    teacher varchar(100) not null,
    counts smallint not null,
    prise int not null
);

-- create table enrolements
CREATE TABLE enrolements(
    id serial primary key,
    course_id int not null references courses(course_id),
    name varchar(70) not null,
    number varchar(13) not null,
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


-- create table about
CREATE TABLE about(
    body text not null,
    vidoe text not null,
    students int not null,
    teachers int not null,
    exprience smallint not null
);

-- create table teachres
CREATE TABLE teachers(
    teacher_id serial primary key,
    teacher_image varchar(100) not null,
    teacher_first_name varchar(30) not null,
    teacher_last_name varchar(30) not null,
    teacher_detail text not null
);

-- more about
CREATE TABLE more_about(
    title varchar(100) not null,
    body text not null,
    vidoe text not null
);

-- admin
CREATE TABLE admin(
    username varchar(70) not null,
    password text not null
);

-- students_comment 
CREATE TABLE student_comments(
    student_id serial primary key,
    student_first_name varchar(50) not null,
    student_last_name varchar(50) not null,
    job varchar(50) not null,
    age smallint not null,
    image varchar(50) not null,
    comment text not null
);