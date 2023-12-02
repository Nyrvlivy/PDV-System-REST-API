CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
);

CREATE TABLE produtos (
id SERIAL PRIMARY KEY,
descricao VARCHAR(255) NOT NULL,
quantidade_estoque INTEGER NOT NULL,
valor DECIMAL(10,2) NOT NULL,
categoria_id INTEGER NOT NULL,
FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

