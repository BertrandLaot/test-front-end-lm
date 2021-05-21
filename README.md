# Test front-end Leroy Merlin France

## Principe et déroulement
- Vous tirerez une branche avec cette nomenclature : ```feature/[Votre nom prenom en minusucle séparé par des tirets]``` (ex : ```feature/maynard-james-keanan```).
- Privilégiez la qualité à la quantité. Le barême d'évaluation se basera sur les atouts qui ressortent de votre travail et non sur le fait que vous ayez fini tous les exercices.
- Vous bénéficiez d'une base SCSS et d'un build sommaire pour faire ce travail. L'idée est de vous faire gagner du temps mais vous pouvez très bien les adapter à votre besoin et il sera intéressant que vous justifiez ces choix.
- Le test se base sur deux maquettes Zeplin qui vous seront partagées (vous aurez normalement créé un compte en avance de phase que l'on puisse vous y donner accès) :
- Le test se déroule en deux phases : 
    - Une phase obligatoire (troncs communs) d'intégration HTML /CSS 
    - Une phase composée de modules qui vous permettra de mettre en valeurs les compétences où vous vous sentez le plus à l'aise. Encore une fois l'idée n'est pas finir tous ces modules en huit heures, concentrez-vous sur les notions où vous vous jugez expert.
- Vous pourrez compléter le fichier REPORT.md à la racine du projet pour expliquer vos choix techniques, faire part des difficultés rencontrées, les modules que vous aurez choisis et tout ce que vous pourrez juger utile à la bonne compréhension du livrable.

## Phase obligatoire
- Le travail de base consistera à intégrer la partie haute (toute la partie au dessus du titre **Salon de jardin : un espace de vie en plein air**) de la page sans header / footer en version mobile
- Vous avez à disposition un watcher et un build sommaire, rien ne vous empêche de l'améliorer ou d'en utliser un autre et vous pourrez le commiter et documenter dans le REPORT.md.
- Le travail se fera dans les deux fichiers _main.src.scss_ et _main.src.js_

## Modules

### 1. Responsive
- Gérer grâce à la maquette mobile l'affichage sur de plus grandes résolutions d'écran.
- Vous bénéficiez des points de rupture LMFR dans le fichier *assets/commons/sass/_breakpoints.variables.scss*.

### 2. Performance web
- Optimiser votre livrable pour qu'il soit conforme aux bonnes pratiques de webperf.
- Documenter votre démarche : quels ont été vos points d'attention, vos outils pour y arriver.

### 3. Accessibilité
Deux axes à travailler :
- Navigation possible uniquement au clavier
- Toutes les informations pertinentes de la page sont vocalisables

### 4. Intégration partie basse
- Intégrer le reste de la maquette
