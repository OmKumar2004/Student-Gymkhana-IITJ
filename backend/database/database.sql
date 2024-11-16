-- MySQL dump 10.13  Distrib 8.4.3, for Linux (x86_64)
--
-- Host: localhost    Database: gymkhana
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `blog_id` int NOT NULL AUTO_INCREMENT,
  `u_mail` varchar(100) DEFAULT NULL,
  `image_url` varchar(200) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `description` text,
  `likes` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`blog_id`),
  KEY `foreign_key` (`u_mail`),
  CONSTRAINT `foreign_key` FOREIGN KEY (`u_mail`) REFERENCES `user` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (1,'b22cs052@iitj.ac.in','https://drive.google.com/uc?id=13P7GXZeZ7oltXksAENhJpeFbUCPNgyGT&export=download','Test Blog','This is a test blog, to check drive upload',0,'2024-11-15'),(2,'b22cs052@iitj.ac.in','https://drive.google.com/file/d/1bZSY5HlzOaz1D5RCRvG62warc4nyYXg7/view?usp=drivesdk','Test Blog','This is a test blog, to check drive upload',0,'2024-11-15');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `u_mail` varchar(100) DEFAULT NULL,
  `comment` text,
  `blog_id` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `u_mail` (`u_mail`),
  KEY `blog_id` (`blog_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`u_mail`) REFERENCES `user` (`mail`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `caption` varchar(255) DEFAULT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `website_url` varchar(255) DEFAULT NULL,
  `status` enum('upcoming','ongoing','completed') NOT NULL DEFAULT 'upcoming',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'Varchas-24','Varchas is IIT Jodhpur\'s annual sports week, featuring events like cricket, basketball, and a mini-marathon. It fosters a spirit of teamwork and healthy competition among students. The event showcases the athletic prowess of students across various sports and helps in building camaraderie. The festival also includes non-sporting events like cultural performances and workshops.','IIT Jodhpur\'s Annual Sports Week','2024-10-08 00:00:00','2024-10-12 00:00:00','IIT Jodhpur Campus','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ9OWtVXtEfC0XUROTZcgDDDa2YexCdh3LQ&s','https://www.varchas24.in/','completed','2024-11-15 07:37:15','2024-11-15 07:37:15'),(2,'TedX IIT Jodhpur','TEDx IIT Jodhpur brings together innovators, thinkers, and changemakers to discuss ideas worth spreading. Talks cover technology, culture, and social innovation. It’s a platform for the brightest minds from various domains to come together and share their vision with the community. The event fosters interdisciplinary discussions and sparks curiosity among attendees about topics shaping the future.','Ideas Worth Spreading at IIT Jodhpur','2024-10-05 00:00:00','2024-10-05 00:00:00','IIT Jodhpur Campus','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-1wh5VdVXjDCAOxWxe1A35Umqbi1Ud-ylA&s','https://tedx.iitj.ac.in/','completed','2024-11-15 07:37:15','2024-11-15 07:37:15'),(3,'IGNUS-25','IGNUS is IIT Jodhpur\'s flagship socio-cultural festival. It features events across tech, art, and culture, including fashion shows, rock performances, and tech challenges. With its focus on innovation and creativity, IGNUS also brings thought leaders for insightful talks. It is a perfect blend of intellectual and artistic expression, making it one of the most anticipated festivals at IIT Jodhpur.','IIT Jodhpur\'s Flagship Festival','2025-02-06 00:00:00','2025-02-09 00:00:00','IIT Jodhpur Campus','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWp7bQBLMW9mNrI6WCKxrX-SIjEAKORI47A&s','https://www.instagram.com/ignus_iitj/','upcoming','2024-11-15 07:37:15','2024-11-15 07:37:15'),(4,'Prometeo-25','Prometeo brings together students from various domains for a cultural-technical festival. Workshops, seminars, and competitions create a platform for innovation and creativity. This event has always been a great opportunity for students to showcase their skills in various fields and collaborate on solving real-world problems. Prometeo also hosts keynotes by industry experts, offering a glimpse into the future of technology and innovation.','Cultural and Technical Festival at IIT Jodhpur','2025-01-17 00:00:00','2025-01-19 00:00:00','IIT Jodhpur Campus','https://media.licdn.com/dms/image/v2/C4D0BAQHNpSvkJs6i2Q/company-logo_200_200/company-logo_200_200/0/1672082919930/prometeo2022_logo?e=2147483647&v=beta&t=tIbHxKPUf6ko3BJRmbaT6J3wOcsDiJZWRrIqUrUMol4','https://www.prometeo.in/','upcoming','2024-11-15 07:37:15','2024-11-15 07:37:15'),(5,'Industry Day','Industry Day at IIT Jodhpur connects students with professionals from various industries. It’s an excellent opportunity for networking, learning about industry trends, and exploring potential career opportunities. The event features presentations from leaders in tech, manufacturing, and research sectors. It provides students with insights into the evolving job market and the skills required to succeed in various industries.','Connecting Students with Industry Leaders','2025-02-01 00:00:00','2025-02-02 00:00:00','IIT Jodhpur Campus','https://iitj.ac.in/images/logo/Design-of-New-Logo-of-IITJ-2.png','http://home.iitj.ac.in/~id2024/','upcoming','2024-11-15 07:37:15','2024-11-15 07:37:15');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resource`
--

DROP TABLE IF EXISTS `resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resource` (
  `u_mail` varchar(100) NOT NULL,
  `file_url` varchar(200) DEFAULT NULL,
  `title` varchar(200) NOT NULL,
  `description` text,
  `category` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`u_mail`,`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
/*!40000 ALTER TABLE `resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `story`
--

DROP TABLE IF EXISTS `story`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `story` (
  `story_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `more_info_url` varchar(255) DEFAULT NULL,
  `status` enum('draft','published') NOT NULL DEFAULT 'draft',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`story_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story`
--

LOCK TABLES `story` WRITE;
/*!40000 ALTER TABLE `story` DISABLE KEYS */;
INSERT INTO `story` VALUES (1,'IIT Jodhpur Launches DRDO-Industry-Academia Centre','IIT Jodhpur, in collaboration with DRDO, inaugurated the DRDO-Industry-Academia Centre of Excellence on April 19, 2024. The center will focus on interdisciplinary research in desert warfare technologies, AI for wargaming, and futuristic mobility systems. This collaboration marks a significant milestone in creating advanced defense technologies and promoting innovation at IIT Jodhpur. The initiative will help strengthen industry-academia partnerships for national security.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ9OWtVXtEfC0XUROTZcgDDDa2YexCdh3LQ&s','https://www.edexlive.com/campus/2024/Apr/19/iit-jodhpur-and-drdo-inaugurate-joint-industry-academia-centre','published','2024-11-15 07:41:07','2024-11-15 07:41:07'),(2,'PM Modi Inaugurates New IIT Jodhpur Campus','Prime Minister Narendra Modi inaugurated the newly constructed campus of IIT Jodhpur on January 15, 2024. The campus is designed to support state-of-the-art research facilities and foster a culture of innovation. During the event, PM Modi emphasized the importance of technological advancement in shaping India’s future. The new campus is expected to enhance the quality of research and teaching at IIT Jodhpur.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2cc-KiXNG7gll-7Xtkxq02oSTI3BO4p8duM4&s','https://www.hindustantimes.com/education/pm-modi-inaugurates-iit-jodhpur-campus-encourages-to-deliver-excellence-101688567541275.html','published','2024-11-15 07:41:07','2024-11-15 07:41:07'),(3,'IIT Jodhpur Hosts Industry Day 2024','IIT Jodhpur hosted its annual Industry Day from February 1-2, 2024. The event aimed to connect students with professionals from various industries, providing a platform for networking, learning about the latest industry trends, and exploring career opportunities. With participation from top companies, the event successfully bridged the gap between academia and the corporate world, allowing students to engage with industry leaders and gain valuable insights into the workforce.','https://iitj.ac.in/images/logo/Design-of-New-Logo-of-IITJ-2.png','http://home.iitj.ac.in/~id2024/','published','2024-11-15 07:41:07','2024-11-15 07:41:07'),(4,'IIT Jodhpur Student Innovates Affordable Solar-Powered Device','A student from IIT Jodhpur has developed an innovative, low-cost solar-powered device aimed at improving the energy access in rural India. This breakthrough device can generate power for remote communities, where electricity is unreliable or unavailable. The innovation, which is expected to have significant social impact, won accolades during the IIT Jodhpur Technology Expo in March 2024, showcasing the institute’s emphasis on social innovation and sustainable solutions.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdJ6qfFdwAP0J17LOk6cl6ED78xdNWQgtPrE&s','https://www.indiatimes.com/news/india/iit-jodhpur-student-develops-affordable-solar-powered-device-578053.html','published','2024-11-15 07:41:07','2024-11-15 07:41:07');
/*!40000 ALTER TABLE `story` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_member`
--

DROP TABLE IF EXISTS `team_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_member` (
  `member_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `git_url` varchar(255) DEFAULT NULL,
  `insta_url` varchar(255) DEFAULT NULL,
  `linkedin_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_member`
--

LOCK TABLES `team_member` WRITE;
/*!40000 ALTER TABLE `team_member` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_member_tags`
--

DROP TABLE IF EXISTS `team_member_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team_member_tags` (
  `member_id` int NOT NULL,
  `tag` varchar(255) NOT NULL,
  PRIMARY KEY (`member_id`,`tag`),
  CONSTRAINT `team_member_tags_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `team_member` (`member_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_member_tags`
--

LOCK TABLES `team_member_tags` WRITE;
/*!40000 ALTER TABLE `team_member_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `team_member_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `roll_number` varchar(50) DEFAULT NULL,
  `u_name` varchar(150) DEFAULT NULL,
  `mail` varchar(100) NOT NULL,
  `pass` varchar(128) DEFAULT NULL,
  `image_url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`mail`),
  CONSTRAINT `email_check` CHECK ((`mail` like _utf8mb4'%@iitj.ac.in'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('B22CS052','Sumeet S Patil','b22cs052@iitj.ac.in',NULL,'https://lh3.googleusercontent.com/a/ACg8ocITAyCHuMWOSzwJGIlHNinIIkj1wNM-9Y5bSHxllQb21PEL4w=s96-c');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-16 14:51:01
