--------------------------
-- Populate products table
--------------------------

INSERT INTO products(id, description)
VALUES(1, 'Cesna 120');
INSERT INTO products(id, description)
VALUES(2, 'DC-6 Twin Otter');
INSERT INTO products(id, description)
VALUES(3, 'Piper M600');
INSERT INTO products(id, description)
VALUES(4, 'Art Boom 6500');

INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(1, '2016-10-12T12:00:00-05:00', 43.2583264, -81.8149807, 500, 1);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(2, '2016-10-13T12:00:00-05:00', 42.559112, -79.286693, 550, 1);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(3, '2016-10-14T12:00:00-05:00', 43.559112, -85.286693, 600, 1); 
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(4, '2016-10-15T12:00:00-05:00', 42.3119735, -83.0941179,650, 1);

INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(5, '2016-10-12T12:00:00-05:00', 43.459112, -80.386693, 500, 2);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(6, '2016-10-13T12:00:00-05:00', 42.459112, -79.386693, 550, 2);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(7, '2016-10-14T12:00:00-05:00', 43.459112, -85.386693, 450, 2);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(8, '2016-10-15T12:00:00-05:00', 44.459112, -81.386693, 400, 2);

INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(9, '2016-10-15T12:00:00-05:00', 44.459112, -81.386693, 500, 3);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(10, '2016-10-15T12:00:00-05:00', 45.459112,	-82.386693, 600, 3);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(11, '2016-10-15T12:00:00-05:00', 46.459112,	-83.386693,	700, 3);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(12, '2016-10-15T12:00:00-05:00', 47.459112,	-84.386693,	800, 3);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(13, '2016-10-15T12:00:00-05:00', 48.459112,	-85.386693,	900, 3);

INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(14, '2017-08-04T14:20:38-05:00', 43.7634618, -79.3688191, 800, 4);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(15, '2017-08-04T16:20:38-05:00', 43.8001468, -79.2342365, 400, 4);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(16, '2017-08-04T14:20:38-05:00', 44.51165, -80.1239422, 550, 4);
INSERT INTO locations_products(id, datetime, longitude, latitude, elevation, product_id)
VALUES(17, '2017-08-04T14:20:38-05:00', 43.1501439, -79.0504945, 300, 4);