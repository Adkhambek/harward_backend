const { fetch, fetchAll } = require("../lib/database");

const SELECT_ALL = `
SELECT 
    course_id,
    image,
    title,
    teacher,
    prise
FROM courses;
`

const SELECT_INFO = `
SELECT * FROM info;
`

const SELECT_ONE = `
SELECT 
    course_id,
    image,
    title,
    body,
    teacher,
    counts,
    prise
FROM courses
WHERE course_id = $1;
`

const INSERT_DATA = `
INSERT INTO enrolements (
    course_id,
    name,
    number
) VALUES
( $1, $2, $3)
RETURNING id;
`

const INSERT_COURSE = `
INSERT INTO courses (
    title,
    teacher,
    counts,
    prise,
    body,
    image
) VALUES ($1, $2, $3, $4, $5, $6) 
`

const SELECT_IMAGE = `
SELECT image
FROM courses
WHERE course_id = $1
`

const DELETE_COURSE =`
DELETE 
FROM courses
WHERE course_id = $1 
`

const UPDATE_COURSE = `
UPDATE courses 
SET title = $1, teacher = $2, counts = $3, prise = $4, body = $5, image = $6
WHERE course_id = $7
`;

const UPDATE_WITHOUT_IMAGE = `
UPDATE courses 
SET title = $1, teacher = $2, counts = $3, prise = $4, body = $5
WHERE course_id = $6
`;

const SELECT_COURSES = `
SELECT 
    title,
    e.name,
    e.number
FROM enrolements e
RIGHT JOIN courses c ON c.course_id = e.course_id
WHERE checked = 0
LIMIT 2;;
`;

const SELECT_CONTACT = `
SELECT 
    name,
    number
FROM home_contact
WHERE checked = 0
LIMIT 2;
`;

exports.getCourseList = () => fetchAll(SELECT_ALL);

exports.getInfo = () => fetch(SELECT_INFO);

exports.getCourse = (id) => fetch(SELECT_ONE, id);

exports.getImage = (id) => fetch(SELECT_IMAGE, id);

exports.inserData = ({ name, phones }, id ) => fetch(INSERT_DATA, id, name, phones);

exports.addCourse = (data, imageName) => fetch(INSERT_COURSE, data.title, data.teacher, +data.lessons, +data.prize, data.body, imageName);

exports.deleteCourse = (id) => fetch(DELETE_COURSE, id);

exports.updateCourse = (id, data, ImageName) => fetch(
    UPDATE_COURSE, 
    data.title, 
    data.teacher,
    data.lessons,
    data.prize,
    data.body, 
    ImageName, 
    id);

exports.updateWithoutImage = (id, data) => fetch(
    UPDATE_WITHOUT_IMAGE, 
    data.title, 
    data.teacher,
    data.lessons,
    data.prize,
    data.body,  
    id);

exports.getCourses = () => fetchAll(SELECT_COURSES);

exports.getContacts = () => fetchAll(SELECT_CONTACT);

