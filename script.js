//Déclaration des variables.
let jeux = 0;
let lancer = 0;
let sommeJ1 = 0;
let sommeJ2 = 0;
let scoreTotalJ1 = 0;
let scoreTotalJ2  = 0;
let jeuEncour = 0;

//Son à chaque lancement d'une nouvelle Partie.
function sonNewGame (){
  let sonNewGame = document.createElement('audio');
  sonNewGame.src = './son/nouvellePartie.mp3';
  sonNewGame.play ();
}

//Son clique a chaque passage de laMainJ1.
function sonLaMain () {
  let sonClique = document.createElement('audio');
  sonClique.src = './son/clique.wav';
  sonClique.play ();
}

//Son lancer dé a chaque clique.
function sonLancerDe () {
  let sonDe = document.createElement('audio');
  sonDe.src = './son/de.mp3';
  sonDe.play ();
}

//Son applaudissement si joueur >= 100.
function sonVictoire () {
  let sonVictoire = document.createElement('audio');
  sonVictoire.src = './son/victoire.mp3';
  sonVictoire.play ();
}

//règle du jeu masqué.
document.getElementById('regleDuJeu').style.visibility='hidden';

//Ouvrir la règle du jeu.
function ouvrirNotice () {
  document.getElementById('regleDuJeu').style.visibility='visible';
}

//Ferme la règle du jeu.
function fermerNotice () {
  document.getElementById('regleDuJeu').style.visibility='hidden';
}

//La main J1.
function laMainJ1 () {
  jeux = 1;
  document.getElementById('laMainJ2').style.visibility='hidden';
  document.getElementById('laMainJ1').style.visibility='visible';
}

//La main a J2.
function laMainJ2 () {
  jeux = 2;
  document.getElementById('laMainJ1').style.visibility='hidden';
  document.getElementById('laMainJ2').style.visibility='visible';
}

//Donne la main a J1, initialise les scores.
function nouvellePartie () {
  jeuEncour = 1;
  sonNewGame ();
  laMainJ1 ();
  scoreTotalJ1 = 0;
  scoreTotalJ2 = 0;
  sommeJ1 = 0;
  sommeJ2 = 0;
  document.getElementById('scoreTempoJ1').innerHTML =  0;
  document.getElementById('scoreTempoJ2').innerHTML =  0;
  document.getElementById('scoreTotalJ1').innerHTML =  0;
  document.getElementById('scoreTotalJ2').innerHTML =  0;
  document.getElementById('imageDe').src = "./de/dice-0.png";
}

//lance le dé avec la méthode random, donne la main si le dé = 1.
function lancerDe (){  
  if(jeuEncour == 1) {
    sonLancerDe ();
    lancer = Math.floor(Math.random() * 6) + 1;
    if(jeux == 1) {
      switch(lancer) {
        case 1 :
          sommeJ1 = 0;
          document.getElementById('scoreTempoJ1').innerHTML = 0;
          document.getElementById('imageDe').src = './de/dice-1.png'; 
          laMainJ2 ();
          sonLaMain ();
          break;
        case 2 :
          document.getElementById('imageDe').src = './dé/dice-2.png';
          sommeJ1 = sommeJ1 + lancer;
          document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
          break;
        case 3 :
          document.getElementById('imageDe').src = './de/dice-3.png';
          sommeJ1 = sommeJ1 + lancer;
          document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
          break;
        case 4 :
          document.getElementById('imageDe').src = './de/dice-4.png';
          sommeJ1 = sommeJ1 + lancer;
          document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
          break;
        case 5 :
          document.getElementById('imageDe').src = './de/dice-5.png';
          sommeJ1 = sommeJ1 + lancer;
          document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
          break;
        case 6 :
          document.getElementById('imageDe').src = './de/dice-6.png';
          sommeJ1 = sommeJ1 + lancer;
          document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
          break;
        default:
		      break;
      }
    }
    else {
      switch(lancer) {
        case 1 :
          sommeJ2 = 0;
          document.getElementById('scoreTempoJ2').innerHTML = 0;
          document.getElementById('imageDe').src = './de/dice-1.png'; 
          laMainJ1 ();
          sonLaMain ();
          break;
        case 2 :
          document.getElementById('imageDe').src = './dé/dice-2.png';
          sommeJ2 = sommeJ2 + lancer;
          document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
          break;
        case 3 :
          document.getElementById('imageDe').src = './de/dice-3.png';
          sommeJ2 = sommeJ2 + lancer;
          document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
          break;
        case 4 :
          document.getElementById('imageDe').src = './de/dice-4.png';
          sommeJ2 = sommeJ2 + lancer;
          document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
          break;
        case 5 :
          document.getElementById('imageDe').src = './de/dice-5.png';
          sommeJ2 = sommeJ2 + lancer;
          document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
          break;
        case 6 :
          document.getElementById('imageDe').src = './de/dice-6.png';
          sommeJ2 = sommeJ2 + lancer;
          document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
          break;
        default:
		      break;
      }
    }
  }
}

//Permet d'envoyer les points temporaire sur le score total. la function est bloqué, si le score
//temporaire est a 0, elle permet aussi de changer de main.
function hold () {
  if((jeux == 1) && (sommeJ1 != 0)) {
    scoreTotalJ1 = sommeJ1 + scoreTotalJ1;
    document.getElementById('scoreTotalJ1').innerHTML = scoreTotalJ1;
    sommeJ1 = 0;
    document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
    laMainJ2 ();
    sonLaMain ();
    victoire ();
  }
  else {
    if(sommeJ2 != 0) {
    scoreTotalJ2 = sommeJ2 + scoreTotalJ2;
    document.getElementById('scoreTotalJ2').innerHTML = scoreTotalJ2;
    sommeJ2 = 0;
    document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
    laMainJ1 ();
    sonLaMain ();
    victoire ();
    }
  }
}

//Verifie le score total des joueurs et affichage du gif si victoire.
function victoire () {
  if(scoreTotalJ1 >= 100) {
    sonVictoire ();
    jeuEncour = 0;
    alert (' BRAVO\n\n- Le joueur "1" gagne avec un score total de ' + scoreTotalJ1 + ' points. \n- Le joueur "2" perd avec un score de ' + scoreTotalJ2 + ' points.');
    document.getElementById('victoire').style.visibility='visible';
  }
  else if(scoreTotalJ2 >= 100) {
    sonVictoire ();
    jeuEncour = 0;
    alert (' BRAVO\n\n- Le joueur "2" gagne avec un score total de ' + scoreTotalJ2 + ' points. \n- Le joueur "1" perd avec un score de ' + scoreTotalJ1 + ' points.');
    document.getElementById('victoire').style.visibility='visible';
  }
}

//Gif caché.
document.getElementById('victoire').style.visibility='hidden';
//Bouton ok qui ferme le gif.
function bravo () {
  document.getElementById('victoire').style.visibility='hidden';
}