-- insert info
INSERT INTO info (
    mail,
    number1,
    number2,
    address
) VALUES 
('Harvard@gmail.com', '+998941756227', '+998941756227', 'Mirzo Ulug''bek ko''chasi 70-uy');

-- inser home_contact
INSERT INTO home_contact(
    name,
    number
) VALUES 
(
    'Palonchi1',
    '+998999999999'
),
(
    'Palonchi2',
    '+998999999999'
),
(
    'Palonchi3',
    '+998999999999'
),
(
    'Palonchi4',
    '+998999999999'
);

-- insert contact
INSERT INTO contact(
    name,
    number,
    body
) VALUES 
(
    'Palonchi1',
    '+998999999999',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.'
),
(
    'Palonchi2',
    '+998999999999',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.'
),
(
    'Palonchi3',
    '+998999999999',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.'
),
(
    'Palonchi4',
    '+998999999999',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.'
);

-- insert news
INSERT INTO news (
    title,
    body,
    image,
    author
) VALUES 
(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptas!', 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.', 
    'https://picsum.photos/400?random=1', 
    'Palonchi Palonchiyev1'
),
(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptas!', 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.', 
    'https://picsum.photos/400?random=2', 
    'Palonchi Palonchiyev2'
),
(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptas!', 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.', 
    'https://picsum.photos/400?random=3', 
    'Palonchi Palonchiye3'
),
(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptas!', 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.', 
    'https://picsum.photos/400?random=4', 
    'Palonchi Palonchiye4'
);

-- insert courses
INSERT INTO courses (
    image,
    title,
    teacher,
    prise
) VALUES 
(
    'https://picsum.photos/400?random=1',
    'Ingliz tili',
    'Palonchi Palonchiyev1',
    150
),
(
    'https://picsum.photos/400?random=2',
    'Rus tili',
    'Palonchi Palonchiyev2',
    100
),
(
    'https://picsum.photos/400?random=3',
    'Arab tili tili',
    'Palonchi Palonchiyev3',
    150
),
(
    'https://picsum.photos/400?random=4',
    'Dasturlash',
    'Palonchi Palonchiyev4',
    300
);

-- insert comment_course
-- INSERT INTO comment_course (
--     name,
--     body
-- ) VALUES 
-- (
--     'Palonchi Palonchiyev1',
--     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.'
-- ),
-- (
--     'Palonchi Palonchiyev2',
--     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.'
-- ),
-- (
--     'Palonchi Palonchiyev3',
--     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.'
-- ),
-- (
--     'Palonchi Palonchiyev4',
--     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.'
-- ),
-- (
--     'Palonchi Palonchiyev5',
--     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.'
-- );

-- insert about
INSERT INTO about (
    body,
    vidoe,
    students,
    teachers,
    exprience
) VALUES (
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.',
    'https://youtu.be/HV7DtH3J2PU',
    876,
    56,
    5
);