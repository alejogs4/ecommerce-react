CREATE TABLE users (
  id serial,
  name varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(200) NOT NULL,
  admin boolean DEFAULT FALSE,
  CONSTRAINT pk_users PRIMARY KEY(id)
);

CREATE TABLE products (
  id serial,
  name VARCHAR(150) NOT NULL,
  description text,
  price float NOT NULL,
  image varchar(500) DEFAULT '',
  CONSTRAINT pk_products PRIMARY KEY(id)
);

CREATE TABLE cart (
  id serial,
  id_user int,
  product_id int,
  CONSTRAINT pk_cart PRIMARY KEY(id),
  CONSTRAINT fk_user_cart FOREIGN KEY(id_user) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_products_cart FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
);