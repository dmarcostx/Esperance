CREATE USER pweb@localhost;
CREATE DATABASE pweb;
USE pweb;

CREATE TABLE cliente (
    cd_cliente INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nm_cliente VARCHAR(60) NOT NULL,
    senha VARCHAR(16) NOT NULL,
    nr_cpf BIGINT UNSIGNED NOT NULL,
    ds_email VARCHAR(45) NOT NULL,
    nr_telefone BIGINT UNSIGNED NOT NULL,
    ds_endereco VARCHAR(100) NOT NULL,
    PRIMARY KEY (cd_cliente),
    UNIQUE (nr_cpf)
);

CREATE TABLE categoria (
    cd_categoria TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    nm_categoria VARCHAR(20) NOT NULL,
    PRIMARY KEY (cd_categoria)
);

CREATE TABLE produto (
    cd_produto INT UNSIGNED NOT NULL AUTO_INCREMENT,
    cd_categoria TINYINT UNSIGNED NOT NULL,
    nm_produto VARCHAR(20) NOT NULL,
    ds_produto VARCHAR(30) NOT NULL,
    vl_produto DOUBLE NOT NULL,
    PRIMARY KEY (cd_produto),
    FOREIGN KEY (cd_categoria) REFERENCES categoria (cd_categoria)
);

CREATE TABLE compra (
    cd_compra INT UNSIGNED NOT NULL AUTO_INCREMENT,
    cd_cliente INT UNSIGNED NOT NULL,
    dt_compra DATE NOT NULL,
    PRIMARY KEY (cd_compra),
    FOREIGN KEY (cd_cliente) REFERENCES cliente (cd_cliente)
);

CREATE TABLE produto_comprado (
    cd_produto INT UNSIGNED NOT NULL,
    cd_compra INT UNSIGNED NOT NULL,
    qt_produto TINYINT UNSIGNED NOT NULL,
    vl_produto DOUBLE UNSIGNED NOT NULL,
    PRIMARY KEY (cd_produto, cd_compra),
    FOREIGN KEY (cd_produto) REFERENCES produto (cd_produto),
    FOREIGN KEY (cd_compra) REFERENCES compra (cd_compra)
);

GRANT ALL PRIVILEGES ON pweb.* TO pweb@localhost;