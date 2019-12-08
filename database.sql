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
    UNIQUE (nr_cpf),
    UNIQUE (ds_email)
);

CREATE TABLE categoria (
    cd_categoria TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    nm_categoria VARCHAR(20) NOT NULL,
    PRIMARY KEY (cd_categoria)
);

CREATE TABLE produto (
    cd_produto INT UNSIGNED NOT NULL AUTO_INCREMENT,
    cd_categoria TINYINT UNSIGNED NOT NULL,
    nm_produto VARCHAR(100) NOT NULL,
    ds_produto VARCHAR(200) NOT NULL,
    vl_produto DOUBLE NOT NULL,
    nm_autor VARCHAR(40)  NOT NULL,
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

INSERT categoria VALUES (1,'Infantil'),(2,'Romance'),(3,'Ficção'),(4,'Esotérico');
INSERT produto VALUES (1,1,'Tenho Monstros na Barriga','Os livros tenho monstros na barriga e tenho mais monstros na barriga foram escritos por tonia casarin com o objetivo de ajudar as crianças a reconhecerem e entenderem melhor suas emoções... ',40,'Tonia Casarin'),(2,1,'Sulwe','Coleção Orgulho de ser eu (desde pequenx)SULWE TEM A PELE DA COR DA MEIA-NOITE.Ela é mais escura que todos de sua família...',30,'Lupita Nyong’o'),(3,1,'O Diário Perdido de Gravity Falls','Você possui em suas mãos o cobiçado diário do autor da série Gravity Falls, um tesouro de 288 páginas coloridas e sem dono, com segredos nunca antes revelados...',50,'Alex Hirsch'),(4,1,'A Pequena Sereia e o Reino das Ilusões','Esqueça as histórias sobre sereias que você conhece. Esta é uma história diferente ― e necessária. E tudo começa no fundo do mar..',50.5,'Louise Neill'),(5,1,'Senhor Milagre Volume 02','Órion não é mais o novo pai celestial, mas a mudança de comando em nova gênese pode não trazer o fim dos conflitos que assolam o reino, e...',30.3,'Tom King'),(6,2,'Grandes Obras de Tolstói - Caixa','O boxe Grandes obras de Leon Tolstói traz quatro clássicos da literatura mundial, em três volumes: Ana Karenina; Ressurreição; A morte de Ivan Ilitch e...',80,'Leon Tolstói'),(7,2,'Box - Fiódor Dostoiévski: Memórias da casa dos mortos','Este box reúne dois grandes romances de Fiódor Dostoiévski: Em Memórias da Casa dos Mortos, romance autobiográfico inspirado no período em que Dostoiésvki passou na prisão de Omsk...',80.5,'Fiódor Dostoiévski '),(8,2,'O Homem sem Qualidades','Nesta que é considerada uma das obras literárias mais importantes do século XX, o autor Robert Musil tece uma intrincada trama centralizada em Ulrich. O personagem vive...',109.9,'Robert Musil'),(9,2,'Código dos Homens Honestos','Como obra pré-Comédia Humana, Código dos homens honestos (1825) preconiza temas marcantes dos romances de Balzac. Com sua habitual...',50.5,'Honoré de Balzac'),(10,2,'A Casa Soturna','Publicado em 1853 e considerado pela crítica o romance mais perfeito de Charles Dickens, A Casa Soturna traz à luz questões fundamentais de vida e sociedade...',30.5,'Charles Dickens'),(11,3,'1984 ','Publicada originalmente em 1949, a distopia futurista 1984 é um dos romances mais influentes do século XX, um inquestionável clássico moderno. Lançada poucos meses antes da ...',30.5,' George Orwell'),(12,3,'Fahrenheit 451','Escrito após o término da Segunda Guerra Mundial, em 1953, Fahrenheit 451, de Ray Bradubury, revolucionou a literatura com um texto que condena não só a opressão anti-intelectual nazista, mas ...',16,'Ray Bradbury'),(13,3,'Conto da Aia','O romance distópico O conto da aia, de Margaret Atwood, se passa num futuro muito próximo e tem como cenário uma república onde não existem mais jornais, revistas...',12,'Margaret Atwood'),(14,3,'Box Trilogia O Senhor dos Anéis','Apesar de ter sido publicado em três volumes – A Sociedade do Anel, As Duas Torres e O Retorno do Rei – desde os anos 1950, O Senhor dos Anéis ...',117,'J.R.R. Tolkien'),(15,3,'O Silmarillion','O Silmarillion\" é um relato dos Dias Antigos da Primeira Era do mundo criado por J.R.R. Tolkien. É a história longínqua para a qual os personagens de ...',44.5,'J. R. R. Tolkien'),(16,4,'Eram Os Deuses Astronautas ?','O autor, que dedicou a vida a pesquisas pelo mundo todo, defende neste livro a existência de outros seres inteligentes no universo e propõe que extraterrestres tenham ...',30,'Erich Daniken'),(17,4,'Almanaque Do Pensamento 2020','Esta é uma obra de referência para você conhecer a influência dos astros e saber tudo o que acontecerá no ano que vem. O Almanaque do Pensamento 2020 traz, além de previsões astrológicas, artigos...',15,'Edicoes Pensamento'),(18,4,'Almanaque Wicca 2020','O Almanaque Wicca 2020 é uma obra moderna e indispensável para todas as pessoas interessadas em conhecer o universo fascinante do misticismo e da bruxaria. Em sua 17ª publicação...',30,'Edicoes Pensamento'),(19,4,'O Livro Completo De Bruxaria','O Livro Completo de Bruxaria de Raymond Buckland influenciou e orientou incontáveis bruxos do mundo todo. Mais que um livro de referência sobre o assunto...',85,'Raymond Buckland'),(20,4,'O Caibalion','Publicado desde 1910 pela Editora Pensamento e com mais de 500 mil exemplares vendidos, esta renomada obra supostamente baseada na sabedoria do Antigo Egito e...',24.9,'William Walker Atkinson');

GRANT ALL PRIVILEGES ON pweb.* TO pweb@localhost;
