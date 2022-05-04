<?php

namespace App\Entity;

use App\Repository\ReservationStageRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReservationStageRepository::class)]
class ReservationStage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id_reservationStage;

    public function getId(): ?int
    {
        return $this->id_reservationStage;
    }
}
