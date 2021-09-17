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

exports.getNews = () => fetchAll(SELECT_NEWS);

exports.getOneNews = (id) => fetch(SELECT_ONE, id)