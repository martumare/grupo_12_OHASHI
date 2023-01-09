-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-01-2023 a las 23:16:41
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ohashi.v2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dish`
--

CREATE TABLE `dish` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(2500) NOT NULL,
  `price` varchar(11) NOT NULL,
  `image` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `dish`
--

INSERT INTO `dish` (`id`, `name`, `description`, `price`, `image`) VALUES
(21, 'producto 1', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', '2800', 'image1673118463798-.jpg'),
(22, 'producto 2', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.', '38002', 'image1673128536462-.jpg'),
(23, 'producto 3', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.', '3800', 'image1673128750524-.jpg'),
(24, 'producto 4', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.', '2800', 'image1673128816216-.jpg'),
(25, 'PRODUCTO 5', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', '4481', 'image1673129140837-.jpg'),
(26, 'PRODUCTO 6', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', '3088', 'image1673129169392-.jpg'),
(27, 'PRODUCTO 7', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', '3640', 'image1673129187517-.jpg'),
(28, 'PRODUCTO 8', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', '3303', 'image1673129216999-.jpg'),
(29, 'PRODUCTO 9', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', '3858', 'image1673129249415-.jpg'),
(30, 'PRODUCTO 10', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', '4083', 'image1673129268116-.jpg'),
(31, 'PRODUCTO 11', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', '2007', 'image1673129293986-.jpg'),
(32, 'PRODUCTO 12', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', '2471', 'image1673129324801-.jpg'),
(33, 'PRODUCTO 13', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', '3898', 'image1673129352711-.jpg'),
(34, 'PRODUCTO 14', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', '4725', 'image1673129378687-.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user dish`
--

CREATE TABLE `user dish` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `dish_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `email` varchar(2000) NOT NULL,
  `address` varchar(2000) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `password` varchar(2500) NOT NULL,
  `image` varchar(2500) NOT NULL,
  `admin` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `email`, `address`, `phone`, `password`, `image`, `admin`) VALUES
(6, 'PRUEBA', 'garcia', 'josepgar01@gmail.com', 'Albert Schweitzer', '254313213123', '$2a$10$2B8s1YtccBON7KlS2bywzOpGVhw0CYl96QM9MNEKD4i4AmGntAZaq', 'image1672966222481-.jpg', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dish`
--
ALTER TABLE `dish`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user dish`
--
ALTER TABLE `user dish`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `dish_id` (`dish_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dish`
--
ALTER TABLE `dish`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `user dish`
--
ALTER TABLE `user dish`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `user dish`
--
ALTER TABLE `user dish`
  ADD CONSTRAINT `user dish_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user dish_ibfk_2` FOREIGN KEY (`dish_id`) REFERENCES `dish` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
