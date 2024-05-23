# ************************************************************
# Sequel Ace SQL dump
# Version 20016
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 8.0.27)
# Database: anchor
# Generation Time: 2021-11-11 17:50:38 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table components_content_certification_lists
# ------------------------------------------------------------

DROP TABLE IF EXISTS `components_content_certification_lists`;

CREATE TABLE `components_content_certification_lists` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `Heading` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `components_content_certification_lists` WRITE;
/*!40000 ALTER TABLE `components_content_certification_lists` DISABLE KEYS */;

INSERT INTO `components_content_certification_lists` (`id`, `Heading`)
VALUES
	(1,'We are Certified Professionals');

/*!40000 ALTER TABLE `components_content_certification_lists` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table components_content_content_sections
# ------------------------------------------------------------

DROP TABLE IF EXISTS `components_content_content_sections`;

CREATE TABLE `components_content_content_sections` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) DEFAULT NULL,
  `Subtitle` varchar(255) DEFAULT NULL,
  `Content` longtext,
  `ButtonText` varchar(255) DEFAULT NULL,
  `ButtonURL` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `components_content_content_sections` WRITE;
/*!40000 ALTER TABLE `components_content_content_sections` DISABLE KEYS */;

INSERT INTO `components_content_content_sections` (`id`, `Title`, `Subtitle`, `Content`, `ButtonText`, `ButtonURL`)
VALUES
	(1,'One-Stop Shop','What We Do','Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n','Test','#'),
	(2,'The Anchor difference','Test','Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n','Test','#');

/*!40000 ALTER TABLE `components_content_content_sections` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table components_content_home_tab1s
# ------------------------------------------------------------

DROP TABLE IF EXISTS `components_content_home_tab1s`;

CREATE TABLE `components_content_home_tab1s` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `Heading` varchar(255) DEFAULT NULL,
  `Description` longtext,
  `ButtonText` varchar(255) DEFAULT NULL,
  `ButtonURL` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `components_content_home_tab1s` WRITE;
/*!40000 ALTER TABLE `components_content_home_tab1s` DISABLE KEYS */;

INSERT INTO `components_content_home_tab1s` (`id`, `Heading`, `Description`, `ButtonText`, `ButtonURL`)
VALUES
	(1,'Light Metal Fabrication','Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in.\n Vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te.','Learn More','#'),
	(2,'Mid Range Metal Fabrication','Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in.\n Vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te.','Learn More','#'),
	(3,'Heavy Metal Fabrication','Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in.\n Vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te.','Learn More','#');

/*!40000 ALTER TABLE `components_content_home_tab1s` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
