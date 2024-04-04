CREATE DATABASE IF NOT EXISTS andean_coffeeshop_db;

CREATE TABLE Customer (
    customer_id INT AUTO_INCREMENT,
    customer_name VARCHAR(300),
    customer_phone VARCHAR(15),
    customer_email VARCHAR(300),
    is_member BOOLEAN
);

CREATE TABLE Coffee (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(300),
    unit_price DECIMAL(10, 2),
    flavor_description VARCHAR(300),
    origin VARCHAR(300),
    drink_type ENUM('Espresso', 'Latte', 'Cappuccino', 'Americano', 'Macchiato', 'Mocha', 'Affogato'),
    bean_type ENUM('Arabica', 'Robusta'),
    roast ENUM('Light', 'Medium', 'Dark')
);

CREATE TABLE Order (
    order_id INT PRIMARY KEY,
    customer_id INT,
    date DATE,
    total_price DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);


