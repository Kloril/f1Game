// attendre chargement de la page
window.onload = init;

//création des variables globales
let canvas, ctx, w, h;
let mousePos;
let img1;
let img2;
let imgCircuit;
let compteur;

compteur = new Image();
compteur.src = "assets/compteur.png";

var c;
this.sound = document.createElement("audio");
this.sound.src ="assets/xgon.mp3";


function Aiguille(longueur, n) { //dessin de l'aiguille
    let dx, dy, a;
    var y;

    a = (c.v * (300*Math.PI/180 / c.maxSpeed)) + Math.PI/2;
    //donne x en fonction de "longueur" et la n-ième heure/minute/seconde
    //donne y en fonction de "longueur" et la n-ième heure/minute/seconde
    ctx.beginPath();
    ctx.moveTo(220, 220);

    ctx.lineTo(220+longueur*Math.cos(a),250+longueur*Math.sin(a));

    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
    //dessine l'aiguille de longueur "longueur" et de couleur "couleur"
}


var c;
//var c2;

// document.querySelector("#car1").addEventListener("click", function(){
//   c = new Car(img1);
// });

// document.querySelector("#car2").addEventListener("click", function(){
//   c = new Car(img2);
// });

//début de la fonction d'initialisation
function init() {
  canvas = document.querySelector("#myCanvas"); // récupére la balise canvas d'id myCanvas
  ctx = canvas.getContext("2d");    // crée le contexte(ctx) 2d
  //$('#myCanvas').hide();
  w = canvas.width;     //récupère largeur et hauteur du canvas
  h = canvas.height;
  this.sound.play();
  $('#myCanvas').hide();
  $('#start').click(function() {
    $('#menu').hide();
    init();
    $('#myCanvas').show();
  });
  
  $('#cars').click(function() {
    $('#menu').hide();
    $('#menuCars').show();
  
  });
  
  $('#fastest').click(function() {
    $('#menu').hide();
    $('#menuFastest').show();
  
  });
  $('.retour').click(function(){
    $('#menu').show();
    $('#menuCars').hide();
    $('#menuFastest').hide();
  });

  imgCircuit = new Image();

  imgCircuit.src = "assets/monaco.jpg";
  sound.play();

  img1 = new Image();
  //img2 = new Image();

  img1.onload = function () {
    c = new Car(img1);
    
    declareListeners('keydown', c);
    
    requestAnimationFrame(mainloop);
  }
  img1.src = "assets/f1car.png";

  // img2.onload = function () {
  
  //   c2 = new Car(img2);
  
  // declareListeners2('keydown', c2);
  // requestAnimationFrame(mainloop);
  // }
  // img2.src = "assets/blackcar.png";
}


let x = 10;
let y = 10; // position initiale
function mainloop() {  //fonction principale
  // on efface le canvas
  
  ctx.clearRect(0, 0, w, h);
  drawTrack(ctx);
  // ctx.drawImage(imgCircuit,0,0,w,h);
  ctx.drawImage(compteur, 100, 100, 250, 250);
  Aiguille(80, c.v);
  c.draw(ctx); //on dessine la voiture
  updateCarPosition(c);
  c.move();
  secteurNumber(c);
  // c2.draw(ctx); //on dessine la voiture
  // updateCarPosition2(c2);
  // c2.move();
  //testCollide(90, 249);
  collision(c);
 // console.log(c.x);
  // on rappelle la boucle d'animation
  requestAnimationFrame(mainloop);
}




