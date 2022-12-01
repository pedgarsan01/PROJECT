SET search_path = TP4;

DROP SCHEMA IF EXISTS TP4 CASCADE;
CREATE SCHEMA TP4;

CREATE TABLE IF NOT EXISTS TP4.planrepas
(
    numeroplan integer NOT NULL,
    categorie VARCHAR(15) NOT NULL,
    frequence VARCHAR(15) NOT NULL,
    nbpersonnes integer,
    nbcalories integer,
    prix integer,
    PRIMARY KEY (numeroplan)
);