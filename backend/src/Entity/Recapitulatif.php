<?php

namespace App\Entity;

use App\Repository\RecapitulatifRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RecapitulatifRepository::class)]
class Recapitulatif
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id_recapitulatif;

    #[ORM\Column(type: 'string', length: 45, nullable: true)]
    private $title;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $description;

    #[ORM\Column(type: 'date', nullable: true)]
    private $date;

    #[ORM\Column(type: 'string', length: 45, nullable: true)]
    private $totalprice;

    public function getId(): ?int
    {
        return $this->id_recapitulatif;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getTotalprice(): ?string
    {
        return $this->totalprice;
    }

    public function setTotalprice(?string $totalprice): self
    {
        $this->totalprice = $totalprice;

        return $this;
    }
}
