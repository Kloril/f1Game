// attendre chargement de la page
window.onload = init;

//création des variables globales
let canvas, ctx, w, h;
let mousePos;
let img1;
let img2;
let imgCircuit;


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




