-- update info
UPDATE info 
SET mail = '',
    number1 = '',
    number2 = '',
    address = '';

-- select info
SELECT 
    *
FROM info;

-- select home_contact
SELECT 
    name,
    number,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM home_contact;

-- select contact
SELECT 
    name,
    number,
    body,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM contact
WHERE checked = 0;

SELECT 
    name,
    number,
    body,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM contact
WHERE checked = 1;

-- update contact
UPDATE contact
SET checked = 1
WHERE contact_id = 1;

-- select news
SELECT 
    title,
    body,
    image,
    author,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM news;

-- select courses
SELECT 
    image,
    title,
    teacher,
    prise || '$' as prise
FROM courses;

-- select table about

SELECT * FROM about


-- update about
UPDATE about
SET body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam. x',
    vidoe = 'https://youtu.be/HV7DtH3J2PU',
    students = 876,
    teachers = 56,
    exprience = 5,
    checked = 1;


