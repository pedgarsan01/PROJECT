
CREATE TABLE IF NOT EXISTS planrepas
(
    numeroplan integer NOT NULL,
    categorie VARCHAR(15) NOT NULL,
    frequence VARCHAR(15) NOT NULL,
    nbpersonnes integer,
    nbcalories integer,
    prix integer,
    numerofournisseur integer NOT NULL,
    PRIMARY KEY (numeroplan),
    FOREIGN KEY (numerofournisseur)
);

CREATE TABLE IF NOT EXISTS Fournisseur
(
    numerofournisseur INTEGER NOT NULL,
    nomfournisseur VARCHAR(20),
    adressefournisseur VARCHAR(20),
    PRIMARY KEY (numerofournisseur)
);