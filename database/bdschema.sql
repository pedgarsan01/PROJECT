SET search_path = TP4;

DROP SCHEMA IF EXISTS TP4 CASCADE;
CREATE SCHEMA TP4;

CREATE TABLE IF NOT EXISTS "TP4".Planrepas
(
    numeroplan integer NOT NULL,
    categorie VARCHAR(15) NOT NULL,
    frequence VARCHAR(15) NOT NULL,
    nbpersonnes integer,
    nbcalories integer,
    prix integer,
    CONSTRAINT "Planrepas_pkey" PRIMARY KEY (numeroplan)
);