<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220504140757 extends AbstractMigration
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
        $this->addSql('CREATE TABLE reservation_rdv (id_reservationRDV INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id_reservation_rdv)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reservation_stage (id_reservation_stage INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id_reservation_stage)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id_user INT AUTO_INCREMENT NOT NULL, prenom VARCHAR(45) NOT NULL, nom VARCHAR(45) DEFAULT NULL, username VARCHAR(45) DEFAULT NULL, motdepasse VARCHAR(32) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, telephone VARCHAR(45) DEFAULT NULL, status VARCHAR(45) DEFAULT NULL, PRIMARY KEY(id_user)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE recapitulatif CHANGE id_recapitulatif id_recapitulatif INT AUTO_INCREMENT NOT NULL, ADD PRIMARY KEY (id_recapitulatif)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE rdv');
        $this->addSql('DROP TABLE reservation_rdv');
        $this->addSql('DROP TABLE reservation_stage');
        $this->addSql('DROP TABLE user');
        $this->addSql('ALTER TABLE recapitulatif MODIFY id_recapitulatif INT NOT NULL');
        $this->addSql('ALTER TABLE recapitulatif DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE recapitulatif CHANGE id_recapitulatif id_recapitulatif INT NOT NULL');
    }
}
