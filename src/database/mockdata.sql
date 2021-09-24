-- admin
INSERT INTO admin ( username, password ) VALUES ( 'admin', crypt('admin', gen_salt('bf')) ); 

-- insert about
INSERT INTO about (
    body,
    vidoe,
    students,
    teachers,
    exprience
) VALUES (
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque impedit tenetur iusto eveniet? Incidunt a omnis facere libero veritatis voluptatibus eius error enim ab, doloremque odit dolores magni numquam.',
    'nimadir_birnima.mp4',
    876,
    56,
    5
);

INSERT INTO info (
    mail,
    number1,
    number2,
    address
) VALUES 
('Harvard@gmail.com', '+998941756227', '+998941756227', 'Mirzo Ulug''bek ko''chasi 70-uy');

 