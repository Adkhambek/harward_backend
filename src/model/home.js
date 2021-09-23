const { fetch, fetchAll } = require("../lib/database");

const SELECT_ABOUT = `SELECT * FROM about;`

const SELECT_INFO = `
SELECT * FROM info;
`

const SELECT_NEWS = `
SELECT 
    news_id,
    title,
    body,
    image,
    author,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM news ORDER BY
  news_id DESC
LIMIT 6;
`

const SELECT_COURSES = `
SELECT 
    course_id,
    image,
    title,
    teacher,
    prise
FROM courses;
`

const SELECT_COMMENTS = `
SELECT 
    student_first_name || ' ' || student_last_name student_name,
    job,
    age,
    image,
    comment
FROM student_comments;
`

const INSERT_DATA = `
INSERT INTO home_contact(
    name,
    number
) VALUES ( $1, $2 );
`

exports.getAbout = () => fetch(SELECT_ABOUT);

exports.getInfo = () => fetch(SELECT_INFO);

exports.getNews = () => fetchAll(SELECT_NEWS);

exports.getCourses = () => fetchAll(SELECT_COURSES);

exports.getComments = () => fetchAll(SELECT_COMMENTS);

exports.insertData = ({ name, number }) => fetch(INSERT_DATA, name, number );