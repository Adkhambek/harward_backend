-- update info
UPDATE info 
SET mail = '',
    number1 = '',
    number2 = '',
    address = '';

-- select info
SELECT 
    name,
    number,
    TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as time
FROM info;

-- select home_contact
SELECT 
    *
FROM home_contact;

-- select contact
SELECT 
    name,
    number,
    body,
    TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as time
FROM contact;

SELECT 
    name,
    number,
    body,
    TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as time
FROM contact
WHERE checked = 1;

-- update contact
UPDATE contact
SET checked = 1;

-- select news
SELECT 
    title,
    body,
    image,
    author,
    TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as time
FROM news;

-- select courses
SELECT 
    *
FROM courses;

-- select table
SELECT 
    *
FROM table;