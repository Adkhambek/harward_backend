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

UPDATE home_contact
SET checked = 1
WHERE home_contact_id = 1;

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

DELETE contact
WHERE contact_id = 1;

-- select enrolements
SELECT 
    title,
    e.name,
    e.number,
    TO_CHAR(e.time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM enrolements e
RIGHT JOIN courses c ON c.course_id = e.course_id
WHERE checked = 0;

SELECT 
    title,
    e.name,
    e.number,
    TO_CHAR(e.time, 'yyyy-MM-dd HH24:MI:SS') as time
FROM enrolements e
RIGHT JOIN courses c ON c.course_id = e.course_id
WHERE checked = 1;

UPDATE enrolements
SET checked = 1
WHERE id = 1;

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
SET password = crypt('imron', gen_salt('bf'))
WHERE 
    password = crypt('ppp', gen_salt('bf')) AND
    password = (
        SELECT password FROM admin
    );

SELECT * FROM admin;

-- student_comments
SELECT 
    student_first_name || ' ' || student_last_name student_name,
    job,
    age,
    image,
    comment
FROM student_comments;

UPDATE
SET student_first_name = '',
    student_last_name = '',
    job = '',
    age = ,
    image = '',
    comment = '';

DELETE student_comments
WHERE student_id = 1;