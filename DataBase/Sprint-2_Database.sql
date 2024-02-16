
-- Create category table
CREATE TABLE category (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL
);

-- Create brand table
CREATE TABLE brand (
    brand_id INT PRIMARY KEY AUTO_INCREMENT,
    brand_name VARCHAR(255) NOT NULL
);

-- Create model table
CREATE TABLE model (
    model_id INT PRIMARY KEY AUTO_INCREMENT,
    model_name VARCHAR(255) NOT NULL,
    brand_id INT,
    category_id INT,
    base_price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    FOREIGN KEY (brand_id) REFERENCES brand(brand_id),
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

-- Create product table
CREATE TABLE product (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    model_id INT,
    discounted_price DECIMAL(10, 2),
    seller_id INT,
    FOREIGN KEY (model_id) REFERENCES model(model_id),
    FOREIGN KEY (seller_id) REFERENCES seller(seller_id)
);

-- Create orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    consumer_id INT,
    product_id INT,
    date_of_order DATE,
    FOREIGN KEY (consumer_id) REFERENCES consumer(consumer_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

-- Inserting data into the category table
INSERT INTO category (category_name) VALUES ('TV');
INSERT INTO category (category_name) VALUES ('Mobile');
INSERT INTO category (category_name) VALUES ('Laptop');
INSERT INTO category (category_name) VALUES ('Tablet');

-- Inserting data into the brand table
INSERT INTO brand (brand_name) VALUES ('Samsung');
INSERT INTO brand (brand_name) VALUES ('Apple');
INSERT INTO brand (brand_name) VALUES ('Dell');


-- Insert data for mobile phones
INSERT INTO model (model_name, brand_id, category_id, base_price, description)
VALUES 
    ('iPhone 13', 1, 1, 999.99, 'The latest iPhone with advanced features.'),
    ('Samsung Galaxy S21', 2, 1, 899.99, 'High-performance Android smartphone.'),
    ('Google Pixel 6', 3, 1, 799.99, 'Flagship Google smartphone with top-notch camera.'),
    ('OnePlus 9 Pro', 6, 1, 899.99, 'Flagship smartphone from OnePlus with powerful specs.');

-- Insert data for tablets
INSERT INTO model (model_name, brand_id, category_id, base_price, description)
VALUES 
    ('iPad Pro', 1, 4, 1099.99, 'Powerful iPad for professionals.'),
    ('Samsung Galaxy Tab S7', 2, 4, 649.99, 'High-performance Android tablet.'),
    ('Amazon Fire HD 10', 8, 4, 149.99, 'Affordable tablet with great entertainment features.'),
    ('Microsoft Surface Pro 7', 9, 4, 999.99, 'Versatile tablet with laptop-like performance.');

-- Insert data for laptops
INSERT INTO model (model_name, brand_id, category_id, base_price, description)
VALUES 
    ('MacBook Pro', 1, 5, 1299.99, 'Powerful laptop for professionals.'),
    ('Dell XPS 15', 10, 5, 1499.99, 'High-performance laptop with stunning display.'),
    ('HP Spectre x360', 11, 5, 1199.99, 'Convertible laptop with premium design.'),
    ('Lenovo ThinkPad X1 Carbon', 12, 5, 1399.99, 'Business-class laptop with robust features.');

-- Insert data for TVs
INSERT INTO model (model_name, brand_id, category_id, base_price, description)
VALUES 
    ('Samsung QLED 4K TV', 2, 2, 1499.99, 'High-quality QLED TV with 4K resolution.'),
    ('LG OLED 4K TV', 4, 2, 1699.99, 'Premium OLED TV with stunning picture quality.'),
    ('Sony Bravia 4K TV', 5, 2, 1299.99, 'Feature-rich 4K TV with HDR support.'),
    ('TCL Roku Smart TV', 13, 2, 799.99, 'Affordable smart TV with Roku integration.');



-- Inserting data into the product table
INSERT INTO product (model_id, discounted_price, seller_id) VALUES (1, NULL, 1);
INSERT INTO product (model_id, discounted_price, seller_id) VALUES (2, NULL, 2);
INSERT INTO product (model_id, discounted_price, seller_id) VALUES (3, NULL, 3);
INSERT INTO product (model_id, discounted_price, seller_id) VALUES (4, NULL, 3);

-- Inserting data into the orders table
INSERT INTO orders (consumer_id, product_id, date_of_order) VALUES (1, 1, '2024-02-16');
INSERT INTO orders (consumer_id, product_id, date_of_order) VALUES (2, 2, '2024-02-16');
INSERT INTO orders (consumer_id, product_id, date_of_order) VALUES (1, 3, '2024-02-16');
INSERT INTO orders (consumer_id, product_id, date_of_order) VALUES (2, 4, '2024-02-16');
