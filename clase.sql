create database ecomerce;
use ecomerce;

create table usuarios (
	-- atributo tipo_dato longitud_dato
	id_usuario INT PRIMARY KEY auto_increment,
    nombre_usuario VARCHAR (30),
    apellidos_usuario VARCHAR (20),
    fecha_nacimiento_usuario DATE,
    email VARCHAR (100),
    clave VARCHAR (255)
);
-- insertar un solo usuario 
INSERT INTO usuarios (nombre_usuario, apellidos_usuario, email, clave)
VALUES ("Leonardo", "caprio", "leo24d@gmail.com", "987654321");

-- insertar varios usuarios a la vez 
INSERT INTO usuarios (nombre_usuario, apellidos_usuario, email, clave)
VALUES 
("Steven", "Torner", "lstonerd@gmail.com", "7654321"),
("Timi", "Guerrero", "Ttimi24d@gmail.com", "654321"),
("Velazquiño", "deiño", "quiño2d@gmail.com", "q987654321"),
("Marta", "Lopez", "marlod@gmail.com", "mart654321"),
("Lucia", "Gomez", "goo24d@gmail.com", "LgoM654321");

select * from usuarios;