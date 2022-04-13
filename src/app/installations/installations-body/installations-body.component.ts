import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installations-body',
  templateUrl: './installations-body.component.html',
  styleUrls: ['./installations-body.component.css']
})
export class InstallationsBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  installations = [
    {
      "title": "CARRIERE COUVERTE",
      "size": "",
      "description": "50 x 15 en copeaux reitrack avec arrosage automatique et éclairage.",
      "image": "../../../assets/images/carriere_couverte.jpg"
    },
    {
      "title": "CARRIERE DRESSAGE",
      "size": "60 x 20",
      "description": "sol normandie drainage avec arrosage.",
      "image": "../../../assets/images/carriere_dressage.jpg"
    },
    {
      "title": "CARRIERE OBSTACLE",
      "size": "70 x 30",
      "description": "en sable 300 m de piste de galop.",
      "image": "../../../assets/images/carriere_obstacle.jpg"
    },
    {
      "title": "ROND DE LONGE",
      "size": "de 16m",
      "description": "avec sol normandie drainage, arrosé.",
      "image": "../../../assets/images/rond_de_longe.jpg"
    },
    {
      "title": "MARCHEUR",
      "size": "",
      "description": "Un marcheur automatique de 20 m de diamètre avec sol en géotextile et arrosage automatique.",
      "image": "../../../assets/images/marcheur.png"
    },
    {
      "title": "SPRING GARDEN",
      "size": "",
      "description": "3 obstacles fixes ainsi qu'un parc d'obstacle.",
      "image": "../../../assets/images/garden.jpg"
    },
    {
      "title": "PEDILUVE",
      "size": "",
      "description": "pédiluve à eau courante avec niveau variable.",
      "image": "../../../assets/images/pediluve.jpg"
    },
    {
      "title": "HEBERGEMENT",
      "size": "",
      "description": "De grands paddocks équipés d'abreuvoirs automatiques d'abris et de râteliers.",
      "image": "../../../assets/images/hebergement.jpg"
    },
    {
      "title": "HEBERGEMENT",
      "size": "",
      "description": "Confortable natural life un mode de vie semi-naturel.",
      "image": "../../../assets/images/hebergement_nature.jpg"
    },
    {
      "title": "HEBERGEMENT",
      "size": "",
      "description": "Des boxes spacieux, tous équipés d'abreuvoirs automatiques pour les chevaux en convalescence.",
      "image": "../../../assets/images/hebergement_box.jpg"
    },
    {
      "title": "SELLERIES",
      "size": "",
      "description": "De grandes selleries, aménagées.",
      "image": "../../../assets/images/sellerie.jpg"
    },
    {
      "title": "CLUB HOUSE",
      "size": "",
      "description": "chaleureux, spacieux et accueillant ; vous y trouverez tous le confort nécessaire pour pallier aux caprices de la météo ou juste pour partager un bon moment entre amis.",
      "image": "../../../assets/images/club_house.jpg"
    },
    {
      "title": "DOUCHE",
      "size": "",
      "description": "Douche spacieuse avec eau chaude.",
      "image": "../../../assets/images/douche.jpg"
    },
    {
      "title": "CARDRE EXCEPTIONNEL",
      "size": "",
      "description": "au sein de 18 hectares de prairies, dans une exploitation agricole imprégnée de 200 ans d'histoire.",
      "image": "../../../assets/images/cadre.jpg"
    },
    {
      "title": "EXTERIEUR",
      "size": "",
      "description": "De très nombreux chemins de balade de 15 minutes à plus de 3 heures et accessibles à tous niveaux.",
      "image": "../../../assets/images/exterieur.jpg"
    }
  ]

}
