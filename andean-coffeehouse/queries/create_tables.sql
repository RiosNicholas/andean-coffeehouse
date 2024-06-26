CREATE DATABASE IF NOT EXISTS andean_coffeehouse_db;

CREATE TABLE Customer (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(300),
    customer_phone VARCHAR(15),
    customer_email VARCHAR(300),
    is_member TINYINT(1)
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

CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    date_purchased DATE,
    total_price DECIMAL(10, 2),
    is_member TINYINT(1),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

CREATE TABLE Emails (
    email_id INT PRIMARY KEY AUTO_INCREMENT,
    contact_name VARCHAR(200),
    contact_email VARCHAR(200),
    contact_message TEXT,
    date_sent DATE
);

CREATE TABLE Location (
    location_id INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(100),
    state VARCHAR(100),
    address VARCHAR(255),
    phoneNumber VARCHAR(20)
);
