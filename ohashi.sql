CREATE DATABASE IF NOT EXISTS `Ohashi`;

USE `Ohashi`;

CREATE TABLE IF NOT EXISTS `CustomerCategory`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Customer`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `lastname` VARCHAR(30) NOT NULL,
    `email` VARCHAR(30) NOT NULL,
    `address` VARCHAR(30) NOT NULL,
    `phone_number` VARCHAR(30) NOT NULL,
    `customerCategory_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`customerCategory_id`) REFERENCES CustomerCategory(`id`)
);

CREATE TABLE IF NOT EXISTS `DishCategory`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Dish`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `description` TEXT NOT NULL,
    `price` VARCHAR(30) NOT NULL,
    `dishCategory_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`dishCategory_id`) REFERENCES DishCategory(`id`)
);

CREATE TABLE IF NOT EXISTS `Customer_Dish`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `customer_id` INT NOT NULL,
    `dish_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`customer_id`) REFERENCES Customer(`id`),
    FOREIGN KEY (`dish_id`) REFERENCES Dish(`id`)
);