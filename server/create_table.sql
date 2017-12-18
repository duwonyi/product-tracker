-------------------------
-- Create products table
-------------------------
CREATE TABLE products
(
  id int NOT NULL,
  description varchar(50) NOT NULL
);

----------------------
-- Create location_products table
----------------------
CREATE TABLE locations_products
(
  id int NOT NULL,
  datetime timestamptz NOT NULL,
  longitude float8 NOT NULL,
  latitude float8 NOT NULL,
  elevation int NOT NULL,
  product_id int NOT NULL 
);

----------------------
-- Define primary keys
----------------------
ALTER TABLE products ADD PRIMARY KEY (id);
ALTER TABLE locations_products ADD PRIMARY KEY (id);

----------------------
-- Define foreign keys
----------------------
ALTER TABLE locations_products ADD CONSTRAINT FK_locations_products_products FOREIGN KEY (product_id) REFERENCES products (id);