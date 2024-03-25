CREATE TABLE "autor"(
    "id" INT PRIMARY KEY NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "pais_nascimento" VARCHAR(255) NOT NULL,
    "nota_biografica" TEXT
);

CREATE TABLE "livro"(
    "codigo" INT PRIMARY KEY NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "lingua" VARCHAR(100) NOT NULL,
    "ano" VARCHAR(4) NOT NULL
);

CREATE TABLE "autor_ivro"(
    "cod_autor" INT NOT NULL,
    "cod_livro" INT NOT NULL,

    FOREIGN KEY ("cod_autor") REFERENCES autor("id"),
    FOREIGN KEY ("cod_livro") REFERENCES livro("codigo")

);

CREATE TABLE "edição"(
    "id" INT PRIMARY KEY NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "pais_nascimento" VARCHAR(255) NOT NULL,
    "nota_biografica" TEXT
);

CREATE TABLE editora (
    "codigo" SERIAL PRIMARY KEY,
    "nome" VARCHAR(255) NOT NULL,
    "endereco" VARCHAR(255) NOT NULL,
    "telefone" VARCHAR(20) NOT NULL
);

CREATE TABLE edicao (
    "isbn" SERIAL PRIMARY KEY,
    "cod_livro" INT,
    "cod_editora" INT,
    "preco" DECIMAL(10,2) NOT NULL,
    "ano" INT NOT NULL,
    "numero_paginas" INT NOT NULL,
    "quantidade_estoque" INT NOT NULL,
    FOREIGN KEY ("cod_livro") REFERENCES livro("codigo"),
    FOREIGN KEY ("cod_editora") REFERENCES editora("codigo")
);
