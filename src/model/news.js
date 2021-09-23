const { fetch, fetchAll } = require("../lib/database");

const SELECT_NEWS = `
SELECT 
    news_id,
    title,
    image,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM news
ORDER BY news_id DESC
LIMIT $1;
`;

const SELECT_IMAGE = `
SELECT image
FROM news
WHERE news_id = $1
`;

const SELECT_ONE = `
SELECT 
    news_id,
    title,
    body,
    image,
    author,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM news
WHERE news_id = $1;
`;

const SELECT_SEVEN = `
SELECT 
    news_id,
    title,
    body,
    image,
    author,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM news ORDER BY
  news_id DESC
LIMIT 7;
`;

const SELECT_FOUR = `
SELECT 
    news_id,
    title,
    body,
    image,
    author,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM news ORDER BY
    news_id DESC
OFFSET 7
LIMIT 4;
`;

const INSERT_NEWS = `
INSERT INTO news (
    title,
    author,
    body,
    image
) VALUES ($1, $2, $3, $4)
`;

const DELETE_NEWS = `
DELETE 
FROM news
WHERE news_id = $1
`;

const UPDATE_NEWS = `
UPDATE news 
SET title = $1, author = $2, body = $3, image = $4
WHERE news_id = $5
`;

const UPDATE_WITHOUT_IMAGE = `
UPDATE news 
SET title = $1, author = $2, body = $3
WHERE news_id = $4
`;

const SELECT_INFO = `
SELECT * FROM info;

const PAGINATON = `
SELECT 
    news_id,
    title,
    image,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM news
ORDER BY news_id DESC
OFFSET $1 LIMIT $2;
`;

const COUNT_NEWS = `
SELECT COUNT(news_id)
FROM news
`

exports.getNews = (limit) => fetchAll(SELECT_NEWS, limit);

exports.getOneNews = (id) => fetch(SELECT_ONE, id);

exports.getAllLatesNews = () => fetchAll(SELECT_NEWS);

exports.getSevenLatest = () => fetchAll(SELECT_SEVEN);

exports.getFourLatest = () => fetchAll(SELECT_FOUR);

exports.addNews = (data, ImageName) => fetch(
    INSERT_NEWS, 
    data.title, 
    data.author, 
    data.body, 
    ImageName);

exports.getImage = (id) => fetch(SELECT_IMAGE, id);

exports.deleteNews = (id) => fetch(DELETE_NEWS, id);

exports.updateNews = (id, data, ImageName) => fetch(
    UPDATE_NEWS, 
    data.title, 
    data.author, 
    data.body, 
    ImageName, 
    id);

exports.updateWithoutImage = (id, data) => fetch(
    UPDATE_WITHOUT_IMAGE, 
    data.title, 
    data.author, 
    data.body, 
    id);

exports.getInfo = () => fetch(SELECT_INFO);

exports.pagination = (offset, limit) => fetchAll(PAGINATON, offset, limit);

exports.countNews = () => fetch(COUNT_NEWS);