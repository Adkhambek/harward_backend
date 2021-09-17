const { fetch, fetchAll } = require("../lib/database");

const SELECT_NEWS = `
SELECT 
    news_id,
    title,
    image,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM news;
`

const SELECT_ONE = `
SELECT 
    title,
    body,
    image,
    author,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM news
WHERE news_id = $1;
`

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
`

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
`

exports.getNews = () => fetchAll(SELECT_NEWS);

exports.getOneNews = (id) => fetch(SELECT_ONE, id);

exports.getAllLatesNews = () => fetchAll(SELECT_NEWS);

exports.getSevenLatest = () => fetchAll(SELECT_SEVEN);

exports.getFourLatest = () => fetchAll(SELECT_FOUR);