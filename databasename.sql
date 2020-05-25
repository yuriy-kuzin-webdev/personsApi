-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 30, 2020 at 05:13 PM
-- Server version: 10.3.13-MariaDB-log
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `databasename`
--

-- --------------------------------------------------------

--
-- Table structure for table `persons`
--

CREATE TABLE `persons` (
  `Id` int(11) NOT NULL,
  `FName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `LName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `BirthDay` datetime DEFAULT NULL,
  `Sex` enum('male','female') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `persons`
--

INSERT INTO `persons` (`Id`, `FName`, `LName`, `MName`, `BirthDay`, `Sex`, `Email`) VALUES
(1, 'Alexander', 'Butterfee', 'Porter ', '1986-04-06 00:00:00', 'male', 'aaLex@somemail.com'),
(2, 'George', 'Oldhart', 'Robert', '1986-04-17 00:00:00', 'male', 'george.oldhart@gmail.com'),
(3, 'Bob', 'Wallson', 'Jeiho', '1984-06-19 00:00:00', 'male', 'bob.wallson@mail.uu'),
(4, 'Ceviq', 'Kronenkarr', 'Yoske', '1989-03-09 00:00:00', 'male', 'yoskeone@pl.mail.com'),
(5, 'Derek', 'Banaas', 'Ohveldhun', '1987-10-21 00:00:00', 'male', 'derekbanaas87@gmail.com'),
(6, 'Evgen', 'Khornek', 'Checstolov', '1990-03-15 00:00:00', 'male', 'checst.evgen@pml.pl'),
(7, 'Fendi', 'Clein', 'Bob', '1991-03-13 00:00:00', 'female', 'fendiclein@gmail.com'),
(8, 'Hanna', 'Mirosnicenko', 'Alekseevna', '1986-01-05 00:00:00', 'female', 'hanna.mko@mail.ru'),
(9, 'Igor', 'Bruskowicz', 'Kein', '1986-11-29 00:00:00', 'male', 'igor.bk@mm.en'),
(10, 'Joan', 'Galakher', 'Black', '1987-05-05 00:00:00', 'female', 'joanblack@mail.com'),
(11, 'Kendrik', 'Calmar', 'Hen', '1994-10-31 00:00:00', 'male', 'calmarhen@mail.fl'),
(12, 'Lewis', 'Smith', '', '1994-10-21 00:00:00', NULL, ''),
(13, 'Maksim', 'Staskevich', 'Konstantinovich', '1995-08-09 00:00:00', 'male', ''),
(14, 'Neurea', 'Khavinsky', 'Ojsha', '1989-08-28 00:00:00', 'female', ''),
(15, 'Oliver', 'Ree', 'Joanson', '1990-01-04 00:00:00', 'male', 'oree.corp@mail.com'),
(16, 'Peter', 'Broske', 'Annuete', '1997-07-27 00:00:00', 'male', 'broske.peter@gmail.com'),
(17, 'Quan', 'Chi', 'Xhuenjou', '1997-02-12 00:00:00', 'female', 'quan.xhnjou@chinamail.cn'),
(18, 'Roberta', 'Olsmon', 'Ratkick', '1991-01-21 00:00:00', 'female', 'olsmon.rr@gmail.com'),
(19, 'Stefany', 'Blob', 'Khan', '1971-11-03 00:00:00', 'female', 'blob.stefani71@gmail.com'),
(20, 'Tara', 'Goske', 'Heizkel', '1971-11-23 00:00:00', 'female', 'goske.tara@mail.md'),
(21, 'Uri', 'Krohn', 'Nesia', '1979-07-11 00:00:00', 'male', ''),
(22, 'Vrocek', 'Oberstan', 'Heffel', '1984-03-08 00:00:00', 'male', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `persons`
--
ALTER TABLE `persons`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `persons`
--
ALTER TABLE `persons`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
