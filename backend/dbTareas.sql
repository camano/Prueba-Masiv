create database tareas;
create table if not exists estados(
    estado_id SERIAL primary key,
    estado_nombre varchar(50)
);
CREATE TABLE IF not EXISTS tarea(
    tarea_id SERIAL PRIMARY key,
    tarea_descripcion varchar(150) not null,
    fecha DATE not null,
    estado_id INT,
    creado VARCHAR(200),
    FOREIGN key(estado_id) REFERENCES estados (estado_id)
);
insert into estados(estado_nombre)
VALUES('Pendiente'),
    ('Completado');
    
   