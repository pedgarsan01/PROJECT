


CREATE TABLE IF NOT EXISTS planrepas
(
    numeroplan integer NOT NULL,
    categorie VARCHAR(15) NOT NULL,
    frequence VARCHAR(15) NOT NULL,
    nbpersonnes integer,
    nbcalories integer,
    prix integer,
    PRIMARY KEY (numeroplan)
);