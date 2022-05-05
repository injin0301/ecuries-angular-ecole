<?php

namespace App\Entity;

use App\Repository\ReservationRdvRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReservationRdvRepository::class)]
class ReservationRdv
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id_reservationRDV;

    public function getId(): ?int
    {
        return $this->id_reservationRDV;
    }
}
