-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 16, 2023 at 09:59 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sales`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `type` varchar(3) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `type`, `price`) VALUES
(1, 'A', '3000.00'),
(2, 'B', '3200.00'),
(3, 'C', '2000.00');

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE `record` (
  `id` int(11) NOT NULL,
  `sales_id` int(11) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `sales_year` year(4) DEFAULT NULL,
  `毛利率` decimal(5,2) NOT NULL,
  `銷售佔比` decimal(5,2) NOT NULL,
  `銷售數量` int(11) NOT NULL,
  `銷售金額` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `record`
--

INSERT INTO `record` (`id`, `sales_id`, `type`, `sales_year`, `毛利率`, `銷售佔比`, `銷售數量`, `銷售金額`) VALUES
(1, 5, 'A', 2022, '59.64', '32.63', 20, 60000),
(2, 6, 'A', 2022, '59.73', '29.55', 10, 30000),
(3, 7, 'A', 2022, '63.90', '16.79', 5, 15000);

-- --------------------------------------------------------

--
-- Table structure for table `sales_person`
--

CREATE TABLE `sales_person` (
  `id` int(11) NOT NULL,
  `person` varchar(20) NOT NULL,
  `region` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sales_person`
--

INSERT INTO `sales_person` (`id`, `person`, `region`) VALUES
(1, ' Maria  Harris', '花蓮縣'),
(2, 'Daniel', '嘉義縣'),
(3, 'Nathan', '屏東縣'),
(4, 'Violet', '新竹市'),
(5, 'Quinn', '雲林縣'),
(6, 'Ben', '雲林縣'),
(7, 'Nathan', '雲林縣'),
(8, 'Violet', '宜蘭縣'),
(9, 'Zach', '臺北市'),
(10, 'Chloe', '臺中市'),
(11, 'Kate', '新竹縣'),
(12, 'Peter', '苗栗縣'),
(13, 'Leo', '桃園市'),
(14, 'Sam', '彰化縣'),
(15, 'Helen', '金門縣');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sales_id` (`sales_id`);

--
-- Indexes for table `sales_person`
--
ALTER TABLE `sales_person`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `record`
--
ALTER TABLE `record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sales_person`
--
ALTER TABLE `sales_person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `record`
--
ALTER TABLE `record`
  ADD CONSTRAINT `record_ibfk_1` FOREIGN KEY (`sales_id`) REFERENCES `sales_person` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
