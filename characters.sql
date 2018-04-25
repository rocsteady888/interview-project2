USE bamazon_db;

CREATE TABLE characters(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  home INT DEFAULT 0,
  stock_quantity INT DEFAULT 0,
  PRIMARY KEY (id)
);
INSERT INTO characters (first_name, last_name, home) VALUES ('Rose', 'Tyler', 'Earth');
INSERT INTO characters (first_name, last_name, home) VALUES ('Zoe', 'Heriot', 'Space Station W3');
INSERT INTO characters (first_name, last_name, home) VALUES ('Jo', 'Grant', 'Earth');
INSERT INTO characters (first_name, last_name, home) VALUES ('Leela', null, 'Unspecified');
INSERT INTO characters (first_name, last_name, home) VALUES ('Romana', null, 'Gallifrey');
INSERT INTO characters (first_name, last_name, home) VALUES ('Clara', 'Oswald', 'Earth');
INSERT INTO characters (first_name, last_name, home) VALUES ('Adric', null, 'Alzarius');
INSERT INTO characters (first_name, last_name, home) VALUES ('Susan', 'Foreman', 'Gallifrey');

SELECT * FROM characters;