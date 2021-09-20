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

UPDATE contact
SET checked = 1
WHERE contact_id = 1;

-- select comment_course
SELECT 
    name,
    number,
    body,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM comment_course
WHERE checked = 0;

SELECT 
    name,
    number,
    body,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM comment_course
WHERE checked = 1;

UPDATE comment_course
SET checked = 1
WHERE comment_id = 1;

-- news
SELECT 
    title,
    body,
    image,
    author,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM news;

-- select courses
SELECT 
    course_id,
    image,
    name,
    title,
    body,
    teacher,
    prise
FROM courses;

-- select table about
SELECT * FROM about;

-- update about
UPDATE about
SET body =  ,
    students = 876,
    teachers = 56,
    exprience = 5,
    checked = 1,
RETURNING;

-- select teachers
SELECT
    teacher_image,
    teacher_first_name || ' ' || teacher_last_name teacher_name,
    teacher_detail
FROM teachers;

-- delete teacher

SELECT
    teacher_id,
    teacher_first_name,
    teacher_last_name
FROM teachers;



-- select more_about
SELECT * FROM more_about;

-- update more_about
UPDATE more_about
SET title = '',
    body = '',
    vidoe = '';


-- admin
UPDATE admin
SET username = 'imron',
    password = crypt('imron', gen_salt('bf'));

SELECT * FROM admin;