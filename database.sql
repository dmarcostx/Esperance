CREATE TABLE cliente (
    cd_cliente INT UNSIGNED NOT NULL,
    nm_cliente VARCHAR(60) NOT NULL,
    dt_nascimento DATE NOT NULL,
    ds_endereco VARCHAR(100) NOT NULL,
    ds_email VARCHAR(45) NOT NULL,
    PRIMARY KEY ( cd_cliente )
);

CREATE TABLE produto (
    cd_produto  INT UNSIGNED NOT NULL,
    nm_produto VARCHAR (20) NOT NULL,
    ds_produto VARCHAR(30) NOT NULL,
    vl_produto DOUBLE NOT NULL,
    vl_quantidade INT UNSIGNED NOT NULL,
    PRIMARY KEY ( cd_produto )
);

CREATE TABLE compras_efetuadas(
    cd_compra INT UNSIGNED NOT NULL,
    cd_cliente INT UNSIGNED NOT NULL,
    cd_produto INT UNSIGNED NOT NULL,
    dt_compra DATE NOT NULL,
    vl_compra DOUBLE UNSIGNED NOT NULL,
    PRIMARY KEY ( cd_compra ),
    CONSTRAINT FOREIGN KEY ( cd_cliente ) REFERENCES cliente ( cd_cliente ),
    CONSTRAINT FOREIGN KEY ( cd_produto ) REFERENCES produto ( cd_produto )
);