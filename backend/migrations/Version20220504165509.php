<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220504165509 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE contact (id_contact INT AUTO_INCREMENT NOT NULL, sujet VARCHAR(45) DEFAULT NULL, message VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id_contact)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE rdv (id_rdv INT AUTO_INCREMENT NOT NULL, date DATE DEFAULT NULL, time VARCHAR(45) DEFAULT NULL, price VARCHAR(45) NOT NULL, PRIMARY KEY(id_rdv)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE recapitulatif (id_recapitulatif INT AUTO_INCREMENT NOT NULL, title VARCHAR(45) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, date DATE DEFAULT NULL, totalprice VARCHAR(45) DEFAULT NULL, PRIMARY KEY(id_recapitulatif)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reservation_rdv (id_reservation_rdv INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id_reservation_rdv)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reservation_stage (id_reservation_stage INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id_reservation_stage)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stage (id_stage INT AUTO_INCREMENT NOT NULL, title VARCHAR(45) DEFAULT NULL, duration VARCHAR(45) DEFAULT NULL, coach VARCHAR(45) DEFAULT NULL, price VARCHAR(45) DEFAULT NULL, PRIMARY KEY(id_stage)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id_user INT AUTO_INCREMENT NOT NULL, prenom VARCHAR(45) NOT NULL, nom VARCHAR(45) DEFAULT NULL, username VARCHAR(45) DEFAULT NULL, motdepasse VARCHAR(32) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, telephone VARCHAR(45) DEFAULT NULL, status VARCHAR(45) DEFAULT NULL, PRIMARY KEY(id_user)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE rdv');
        $this->addSql('DROP TABLE recapitulatif');
        $this->addSql('DROP TABLE reservation_rdv');
        $this->addSql('DROP TABLE reservation_stage');
        $this->addSql('DROP TABLE stage');
        $this->addSql('DROP TABLE user');
    }
}
