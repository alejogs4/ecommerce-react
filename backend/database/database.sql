CREATE TABLE users (
  dni varchar(15),
  name varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(200) NOT NULL,
  CONSTRAINT pk_users PRIMARY KEY(dni)
);

CREATE TABLE products (
  id serial,
  name VARCHAR(150) NOT NULL,
  description text,
  price float NOT NULL,
  CONSTRAINT pk_products PRIMARY KEY(id)
);

CREATE TABLE cart (
  dni_user varchar(15),
  product_id int,
  CONSTRAINT pk_cart PRIMARY KEY(dni_user, product_id),
  CONSTRAINT fk_user_cart FOREIGN KEY(dni_user) REFERENCES users(dni) ON DELETE CASCADE,
  CONSTRAINT fk_products_cart FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
);