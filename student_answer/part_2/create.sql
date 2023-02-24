CREATE TABLE movie (
movie_id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
adult boolean NOT NULL,
budget integer NOT NULL,
original_language text NOT NULL,
original_title text NOT NULL,
overview text NOT NULL,
popularity float NOT NULL,
status text NOT NULL,
title text NOT NULL,
vote_average real NOT NULL,
vote_count integer NOT NULL
);

CREATE TABLE genre (
genre_id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
name text NOT NULL,
);

CREATE TABLE movie_genre (
movie_id integer NOT NULL,
genre_id integer NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
FOREIGN KEY (genre_id) REFERENCES genre(genre_id)
);

CREATE TABLE keyword (
keyword_id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
name text NOT NULL,
);

CREATE TABLE movie_keyword (
movie_id integer NOT NULL,
keyword_id integer NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
FOREIGN KEY (keyword_id) REFERENCES keyword(keyword_id)
);

CREATE TABLE language (
language_id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
code text NOT NULL,
name text NOT NULL,
);

CREATE TABLE movie_language (
movie_id integer NOT NULL,
language_id integer NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
FOREIGN KEY (language_id) REFERENCES language(language_id)
);

CREATE TABLE movie_company (
movie_id integer NOT NULL,
company_id integer NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
FOREIGN KEY (company_id) REFERENCES production_company(company_id)
);

CREATE TABLE production_company (
company_id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
name text NOT NULL,
origin_country text NOT NULL,
);

CREATE TABLE movie_cast (  
movie_cast_id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
movie_id integer NOT NULL,
gender_id integer NOT NULL,
person_id integer NOT NULL,
character_name text NOT NULL,
cast_order integer NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
FOREIGN KEY (gender_id) REFERENCES gender(gender_id),
FOREIGN KEY (person_id) REFERENCES person(person_id)
);

CREATE TABLE gender (
gender_id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
name text NOT NULL, 
);

CREATE TABLE person (
person_id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
firstName text NOT NULL,
lastName text NOT NULL,
birthDate text NOT NULL,
popularity real NOT NULL,
gender_id integer NOT NULL,
FOREIGN KEY (gender_id) REFERENCES gender(gender_id)
);

CREATE TABLE movie_crew (
movie_id integer NOT NULL,
department_id integer NOT NULL,
person_id integer NOT NULL,
job text NOT NULL,
FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
FOREIGN KEY (department_id) REFERENCES department(department_id),
FOREIGN KEY (person_id) REFERENCES person(person_id)
);

CREATE TABLE department (
department_id integer PRIMARY KEY AUTO_INCREMENT NOT NULL,
department_name text NOT NULL,
);
