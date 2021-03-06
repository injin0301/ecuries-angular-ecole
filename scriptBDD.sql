-- MySQL Script generated by MySQL Workbench
-- Wed May  4 14:25:30 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ecurieDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecurieDB` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `ecurieDB` ;

-- -----------------------------------------------------
-- Table `ecurieDB`.`Stage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecurieDB`.`Stage` (
  `id_stage` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `duration` VARCHAR(45) NULL,
  `coach` VARCHAR(45) NULL,
  `price` VARCHAR(45) NULL,
  PRIMARY KEY (`id_stage`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecurieDB`.`Recapitulatif`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecurieDB`.`Recapitulatif` (
  `id_recapitulatif` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(255) NULL,
  `date` DATE NULL,
  `totalprice` VARCHAR(45) NULL,
  PRIMARY KEY (`id_recapitulatif`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecurieDB`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecurieDB`.`user` (
  `id_user` INT NOT NULL,
  `prenom` VARCHAR(45) NULL,
  `nom` VARCHAR(45) NULL,
  `username` VARCHAR(45) NULL,
  `motdepasse` VARCHAR(32) NOT NULL,
  `email` VARCHAR(255) NULL,
  `telephone` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  `id_stage` INT NOT NULL,
  `id_recapitulatif` INT NOT NULL,
  PRIMARY KEY (`id_user`),
  INDEX `StageID_idx` (`id_stage` ASC),
  INDEX `RecapitulatifID_idx` (`id_recapitulatif` ASC),
  CONSTRAINT `StageID`
    FOREIGN KEY (`id_stage`)
    REFERENCES `ecurieDB`.`Stage` (`id_stage`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `RecapitulatifID`
    FOREIGN KEY (`id_recapitulatif`)
    REFERENCES `ecurieDB`.`Recapitulatif` (`id_recapitulatif`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `ecurieDB`.`RDV`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecurieDB`.`RDV` (
  `id_rdv` INT NOT NULL,
  `date` DATE NULL,
  `time` VARCHAR(45) NULL,
  `price` VARCHAR(45) NULL,
  PRIMARY KEY (`id_rdv`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecurieDB`.`ReservationRdv`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecurieDB`.`ReservationRdv` (
  `idReservationRdv` INT NOT NULL,
  `id_user` INT NOT NULL,
  `id_rdv` INT NOT NULL,
  PRIMARY KEY (`idReservationRdv`),
  INDEX `UserID_idx` (`id_user` ASC),
  INDEX `RdvID_idx` (`id_rdv` ASC),
  CONSTRAINT `UserID-ReservRDV`
    FOREIGN KEY (`id_user`)
    REFERENCES `ecurieDB`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `RdvID-ReservRDV`
    FOREIGN KEY (`id_rdv`)
    REFERENCES `ecurieDB`.`RDV` (`id_rdv`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecurieDB`.`ReservationStage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecurieDB`.`ReservationStage` (
  `id_reservationStage` INT NOT NULL,
  `id_user` INT NOT NULL,
  `id_stage` INT NOT NULL,
  PRIMARY KEY (`id_reservationStage`),
  INDEX `UserID_idx` (`id_user` ASC),
  INDEX `StageID_idx` (`id_stage` ASC) ,
  CONSTRAINT `UserID-ReservStage`
    FOREIGN KEY (`id_user`)
    REFERENCES `ecurieDB`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `StageID-ReservStage`
    FOREIGN KEY (`id_stage`)
    REFERENCES `ecurieDB`.`Stage` (`id_stage`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecurieDB`.`Contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecurieDB`.`Contact` (
  `id_contact` INT NOT NULL,
  `sujet` VARCHAR(45) NULL,
  `message` VARCHAR(45) NULL,
  `idUser` INT NOT NULL,
  PRIMARY KEY (`id_contact`),
  INDEX `idUser_idx` (`idUser` ASC),
  CONSTRAINT `id_user-contact`
    FOREIGN KEY (`idUser`)
    REFERENCES `ecurieDB`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
