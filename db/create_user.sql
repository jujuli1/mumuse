DROP DATABASE IF EXISTS joueur;

DROP USER IF EXISTS joueur;


CREATE USER joueur WITH PASSWORD 'play';
CREATE DATABASE sylvanas OWNER joueur;