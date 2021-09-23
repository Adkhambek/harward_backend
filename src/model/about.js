const { fetch, fetchAll } = require("../lib/database");

const SELECT_ALL = `
SELECT * FROM about
`;

const GET_VIDEO_NAME = `
SELECT vidoe FROM about
`;

const UPDATE = `
UPDATE about
SET body = $1, students = $2, teachers = $3, exprience = $4, vidoe = $5
`;

const UPDATE_WITHOUT_VIDEO = `
UPDATE about
SET body = $1, students = $2, teachers = $3, exprience = $4
`;

const SELECT_TEACHERS = `
SELECT 
    teacher_image,
    teacher_first_name || ' ' || teacher_last_name teacher_name,
    teacher_detail
FROM teachers;
`;

const SELECT_INFO = `SELECT * FROM info;`;

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

exports.selectAllData = () => fetch(SELECT_ALL);

exports.updateAbout = (data, videoName) =>
  fetch(
    UPDATE,
    data.body,
    data.student,
    data.teacher,
    data.experience,
    videoName
  );

exports.updateWithoutVideo = (data) => {
  fetch(
    UPDATE_WITHOUT_VIDEO,
    data.body,
    data.student,
    data.teacher,
    data.experience
  );
};

exports.getVideoName = () => fetch(GET_VIDEO_NAME);

exports.getAbout = () => fetch(SELECT_ALL);

exports.getTeachers = () => fetchAll(SELECT_TEACHERS);

exports.getInfo = () => fetch(SELECT_INFO);

exports.getCourses = () => fetchAll(SELECT_COURSES);

exports.getContacts = () => fetchAll(SELECT_CONTACT);
