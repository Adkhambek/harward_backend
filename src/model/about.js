const { fetch, fetchAll } = require("../lib/database");

const SELECT_ALL = `
SELECT * FROM about
`;

const UPDATE = `
UPDATE about
SET body = $1, students = $2, teachers = $3, exprience = $4, vidoe = $5
`;

const UPDATE_WITHOUT_VIDEO = `
UPDATE about
SET body = $1, students = $2, teachers = $3, exprience = $4
`

const GET_VIDEO_NAME = `
SELECT vidoe FROM about
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
    data.experience,
  )
}

exports.getVideoName = () => fetch(GET_VIDEO_NAME);

