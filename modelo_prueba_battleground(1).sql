-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-12-2023 a las 15:15:44
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `modelo_prueba_battleground`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fighters`
--

CREATE TABLE `fighters` (
  `fighter_id` int(11) NOT NULL,
  `accuracy` int(11) NOT NULL,
  `active` varchar(50) NOT NULL,
  `attack` int(11) NOT NULL,
  `current_hp` int(11) NOT NULL,
  `current_xp` int(11) NOT NULL,
  `defense` int(11) NOT NULL,
  `img_back` varchar(255) NOT NULL,
  `img_front` varchar(255) NOT NULL,
  `in_party` varchar(50) NOT NULL,
  `level` int(11) NOT NULL,
  `max_hp` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `special_attack` int(11) NOT NULL,
  `special_defense` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `fighters`
--

INSERT INTO `fighters` (`fighter_id`, `accuracy`, `active`, `attack`, `current_hp`, `current_xp`, `defense`, `img_back`, `img_front`, `in_party`, `level`, `max_hp`, `name`, `price`, `special_attack`, `special_defense`) VALUES
(1, 65, '1', 100, 150, 125, 175, 'charizard.back', 'charizard.front', '1', 1, 300, 'Charizard', 110, 200, 220),
(2, 65, '1', 100, 150, 125, 130, 'batman.back', 'batman.front', '1', 1, 200, 'Batman', 100, 210, 190),
(3, 65, '1', 100, 110, 125, 130, 'goku.back', 'goku-front', '1', 1, 280, 'Goku', 100, 220, 160);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userfighters`
--

CREATE TABLE `userfighters` (
  `user_fighter_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `fighter_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `userfighters`
--

INSERT INTO `userfighters` (`user_fighter_id`, `user_id`, `fighter_id`) VALUES
(1, 1, 1),
(2, 2, 3),
(3, 2, 1),
(4, 5, 2),
(5, 6, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `money` int(11) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `profile` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `email`, `password`, `name`, `money`, `avatar`, `profile`) VALUES
(1, 'lina@gmail.com', '123456', 'Lina', 5000, 'lina.jpg', 'Admin'),
(2, 'luis@gmail.com', '123456', 'Luigi', 5000, 'luis.jpg', 'Admin'),
(3, 'maxip@gmail.com', '123456', 'Maxi', 5000, 'Maxi.jpg', 'Admin'),
(4, 'negro@gmail.com', '123456', 'Negro Poket', 5000, 'Negro.jpg', 'Admin'),
(5, 'kbdejuin@gmail.com', '123456', 'Max', 5000, 'Kb.jpg', 'Admin'),
(6, 'pedro@gmail.com', '123456', 'Pedri', 5000, 'pedro.jpg', 'Player'),
(7, 'ameo@gmail.com', '123456', 'Ameo', 5000, 'Ameo.jpg', 'Admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `fighters`
--
ALTER TABLE `fighters`
  ADD PRIMARY KEY (`fighter_id`);

--
-- Indices de la tabla `userfighters`
--
ALTER TABLE `userfighters`
  ADD PRIMARY KEY (`user_fighter_id`),
  ADD KEY `userfighter_fighter` (`fighter_id`),
  ADD KEY `userfighter_user` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `fighters`
--
ALTER TABLE `fighters`
  MODIFY `fighter_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `userfighters`
--
ALTER TABLE `userfighters`
  MODIFY `user_fighter_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `userfighters`
--
ALTER TABLE `userfighters`
  ADD CONSTRAINT `userfighter_fighter` FOREIGN KEY (`fighter_id`) REFERENCES `fighters` (`fighter_id`),
  ADD CONSTRAINT `userfighter_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
