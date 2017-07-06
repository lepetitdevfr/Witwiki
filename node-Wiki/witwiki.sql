-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2017 at 01:38 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `witwiki`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `content` varchar(50000) NOT NULL,
  `preface` varchar(500) NOT NULL,
  `date_add` datetime NOT NULL,
  `date_update` datetime NOT NULL,
  `id_categorie` int(11) DEFAULT NULL,
  `id_auteur` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `title`, `content`, `preface`, `date_add`, `date_update`, `id_categorie`, `id_auteur`) VALUES
(21, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:11:55', '2017-07-06 14:11:55', 38, 42),
(22, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:11:56', '2017-07-06 14:11:56', 38, 42),
(23, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:11:56', '2017-07-06 14:11:56', 38, 42),
(24, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:11:56', '2017-07-06 14:11:56', 38, 42),
(25, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:11:56', '2017-07-06 14:11:56', 38, 42),
(26, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:11:59', '2017-07-06 14:11:59', 37, 42),
(27, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:11:59', '2017-07-06 14:11:59', 37, 42),
(28, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:11:59', '2017-07-06 14:11:59', 37, 42),
(29, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:11:59', '2017-07-06 14:11:59', 37, 42),
(30, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:11:59', '2017-07-06 14:11:59', 37, 42),
(31, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:00', '2017-07-06 14:12:00', 37, 42),
(32, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:00', '2017-07-06 14:12:00', 37, 42),
(33, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:02', '2017-07-06 14:12:02', 36, 42),
(34, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:02', '2017-07-06 14:12:02', 36, 42),
(35, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:02', '2017-07-06 14:12:02', 36, 42),
(36, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:02', '2017-07-06 14:12:02', 36, 42),
(37, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:03', '2017-07-06 14:12:03', 36, 42),
(38, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:03', '2017-07-06 14:12:03', 36, 42),
(39, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:03', '2017-07-06 14:12:03', 36, 42),
(40, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:03', '2017-07-06 14:12:03', 36, 42),
(41, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:03', '2017-07-06 14:12:03', 36, 42),
(42, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:04', '2017-07-06 14:12:04', 36, 42),
(43, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:04', '2017-07-06 14:12:04', 36, 42),
(44, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:04', '2017-07-06 14:12:04', 36, 42),
(45, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:04', '2017-07-06 14:12:04', 36, 42),
(46, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:04', '2017-07-06 14:12:04', 36, 42),
(47, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:04', '2017-07-06 14:12:04', 36, 42),
(48, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:05', '2017-07-06 14:12:05', 36, 42),
(49, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:05', '2017-07-06 14:12:05', 36, 42),
(50, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:05', '2017-07-06 14:12:05', 36, 42),
(51, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:05', '2017-07-06 14:12:05', 36, 42),
(52, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:05', '2017-07-06 14:12:05', 36, 42),
(53, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:06', '2017-07-06 14:12:06', 36, 42),
(54, 'dfs', '<p>fsdfdsfdsfds</p>', 'fsd', '2017-07-06 14:12:06', '2017-07-06 14:12:06', 36, 42);

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`id`, `name`) VALUES
(37, 'Bateau'),
(38, 'Vélo'),
(36, 'Voiture');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `content` varchar(5000) NOT NULL,
  `id_article` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` int(11) NOT NULL,
  `url` varchar(1000) NOT NULL,
  `commentaire` varchar(5000) NOT NULL,
  `id_categorie` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `content` varchar(5000) NOT NULL,
  `date` datetime NOT NULL,
  `id_from` int(11) DEFAULT NULL,
  `id_to` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Administrateur'),
(2, 'Auteur'),
(3, 'Abonné');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `id_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `lastname`, `firstname`, `email`, `password`, `id_role`) VALUES
(42, 'test', 'test', 'test', 'test', 'sha1$52cca37d$1$f6e20c7d2070fb2b4aaf848a3535713980906521', 2),
(44, 'test1', 'test', 'test', 'test1', 'sha1$52cca37d$1$f6e20c7d2070fb2b4aaf848a3535713980906521', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categorie` (`id_categorie`),
  ADD KEY `id_categorie_2` (`id_categorie`),
  ADD KEY `id_auteur` (`id_auteur`);

--
-- Indexes for table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_article` (`id_article`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categorie` (`id_categorie`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_to` (`id_to`),
  ADD KEY `id_from` (`id_from`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pseudo` (`pseudo`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
--
-- AUTO_INCREMENT for table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `article_ibfk_2` FOREIGN KEY (`id_auteur`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Constraints for table `media`
--
ALTER TABLE `media`
  ADD CONSTRAINT `media_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Constraints for table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`id_from`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`id_to`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
