import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe-body',
  templateUrl: './equipe-body.component.html',
  styleUrls: ['./equipe-body.component.css']
})
export class EquipeBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  workers = [
    {
      "image": "../../../assets/images/r_ladiglione.jpg",
      "name": "Roland LADIGLIONE",
      "position": ".",
      "description": "Roland, le conjoint de Karine, a rejoint l'équipe des écuries en 2012.Agriculteur de métier, les chevaux ne sont pas sa spécialité. Il produit le foin et la paille qui sont distribués au sein des écuries, et veille aux petites réparations courantes sur les installations tout comme aux gros travaux."
    },

    {
      "image": "../../../assets/images/c_meurou.jpg",
      "name": "Mathilde MOURER",
      "position": "Palefrenière -Soigneuse",
      "description": "Titulaire d'un Bac CGEH durant lequel elle a été notre stagiaire, Mathilde a rejoint notre équipe quelques années plus tard.Travailleuse, bienveillante et passionnée, elle prend soin de nos loulous avec toute la  joie et l'amour qui la caractérise.Bien qu'elle soit très discrète, elle est sur tout les fronts aux écuries !!"
    },

    {
      "image": "../../../assets/images/e_valente.jpg",
      "name": "Emilie VALENTE",
      "position": "Kinesiologue et massothérapeuthe",
      "description": "Masso-physiothérapeute de formation, Emilie s'occupe des petits bobos de nos protégés. Cette magicienne aux doigts de fées possède des formations complètent en bio-kinésiologie, communication animale et cheval thérapeute."
    },

    {
      "image": "../../../assets/images/l_fuertes.jpg",
      "name": "Laurie FUERTES",
      "position": "Podologue Equin",
      "description": "Spécialiste du pied nu et de la ferrure souple, Laurie possède une formation solide.Nous aimons sa capacité à s'adapter à chaque cheval en puisant dans son expérience et les nombreux outils qu'elle possède."
    },

    {
      "image": "../../../assets/images/b_francois.jpg",
      "name": "Bruno FRANCOIS",
      "position": "Dentiste Equin",
      "description": "Dentiste Equin formé durant plus de 10 ans aux USA, Bruno a une expérience solide et une approche du cheval forte du temps passé auprès des horsemen américains."
    },

    {
      "image": "../../../assets/images/duo.jpg",
      "name": "Maxime QUITTARD et Steven RUMBO",
      "position": "Maréchaux ferrants",
      "description": "Maréchaux-ferrants spécialisés dans les ferrures orthopédiques, Maxime et Steven ne sont jamais à court d'idées pour soulager un cheval !C'est pour la richesse de leur technique que nous nous sommes tournés vers eux mais c'est leur capacité à être à l'écoute de chacun avec patience et bienveillance qui nous a le plus séduit."
    },

    {
      "image": "../../../assets/images/o_plaa.jpg",
      "name": "Ophélie PLAA",
      "position": "Communicatrice Animale",
      "description": "Communicatrice animale depuis plusieurs années maintenant, elle a été formée par Ariane Troubat avant de trouver sa propre voie et de transcender son art.Ophélie est un rayon de soleil qui partage un peu de la douceur de son monde avec tout les protégés qui ont la chance de la croiser."
    },

    {
      "image": "../../../assets/images/e_cottereau.jpg",
      "name": "Eugénie COTTEREAU",
      "position": "Saddle-fitteur",
      "description": "Saddlefitteur au parcours impressionnant, Eugénie est LA référence dans son domaine.Elle possède une formation solide acquise en France, en Angleterre et en Allemagne auprès de professionnels renommés.Depuis 2012, elle se consacre entièrement au travail d'ergonomie du matériel équestre auprès des cavaliers amateurs et professionnels. Mais propose également de nombreuses publications et réflexions en collaborations avec des professionnels de filières complémentaires."
    },

    {
      "image": "../../../assets/images/t_roberts.jpg",
      "name": "Tasmin ROBERTS",
      "position": "Saddle-fitteur",
      "description": "D'abord ostéopathe équin, Tasmin se tourne finalement vers le saddle-fitting en se formant auprès d'Eugénie Cottereau.Douce et discrète, elle n'en possède pas moins un oeil acéré, capable de repérer le moindre dysfonctionnement locomoteur, tant chez le cavalier que chez le cheval afin de proposer les solutions les plus pointues possibles."
    },

    {
      "image": "../../../assets/images/c_meurou.jpg",
      "name": "Carine MEUROU​",
      "position": "Naturopathe",
      "description": "Naturopathe formée par Frederique ROBIN, elle possède de nombreuses corde à son arc :Biorésonance, phytothérapie, micro-nutrition, aromathérapie, gemmothérapie, florithérapie, auriculothérapie et bien d'autres outils. Bienveillante  et à l'écoute de ces patients, elle propose des solutions adaptées aux besoins et aux possibilités de chacun."
    },

    {
      "image": "../../../assets/images/n_ranchon.jpg",
      "name": "Noémie RANCHON",
      "position": "Bit-fitteur",
      "description": "Cavalière de Dressage, Noémie est une amoureuse de la technique équestre et du mouvement juste.C'est dans cette optique qu'elle a intégré la toute première promotion de Bit-fitting française menée par Karen Toetenel dont elle sort avec les félicitations de sa formatrice.Très à l'écoute du cheval et du cavalier, nous apprécions tout autant sa minutie que son approche empathique."
    },

    {
      "image": "../../../assets/images/marie.jpg",
      "name": "Marie",
      "position": "Ostéopathe",
      "description": "Marie est diplômée d'une licence Staps spécialisée en entraînement sportif équestre, d'un diplôme d'ostéopathe Equin et possède une solide formation en médecine chinoise équine.Nous aimons sa solide expérience et la richesse de ses connaissances, ses capacités d'adaptation sur des couples aux besoins très différents. Sa capacité à aller au bout des choses tout en respectant les limites du cheval et de l'humain qu'elle a en face."
    },

    {
      "image": "../../../assets/images/c_boccchino.jpg",
      "name": "Céline BOCCHINO",
      "position": "Photographe Equestre",
      "description": "Passionnée de chevaux depuis toujours, Céline a développé une vision du cheval unique, qu'elle transmet avec amour et bienveillance au travers de ses photographies.Elle illustre les écuries depuis de nombreuses années ; mais éclaire également notre quotidien par sa joie de vivre et son sens de l'entraide.C'est également elle qui se cache derrière la communication internet des écuries !"
    }
  ]

}
