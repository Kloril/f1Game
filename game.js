// attendre chargement de la page
window.onload = init;

//création des variables globales
let canvas, ctx, w, h;
let mousePos;
let img1;
let imgCircuit;



var c;

//début de la fonction d'initialisation
function init() {
  canvas = document.querySelector("#myCanvas"); // récupére la balise canvas d'id myCanvas
  ctx = canvas.getContext("2d");    // crée le contexte(ctx) 2d
  $('#myCanvas').hide();
  w = canvas.width;     //récupère largeur et hauteur du canvas
  h = canvas.height;
 

$('#start').click(function() {
  $('#menu').hide();
  init();
  $('#myCanvas').show();
});



imgCircuit= new Image();

imgCircuit.src = "monaco.jpg";


  img1 = new Image();

  img1.onload = function() {
    c= new Car(img1);
    declareListeners('keydown',c);

      requestAnimationFrame(mainloop);
  }
  img1.src = "f1car.png"; //crée une image et lance l'animation*/
}


let x = 10;
let y = 10; // position initiale
function mainloop() {  //fonction principale
  // on efface le canvas
  ctx.clearRect(0, 0, w, h);
 
  ctx.drawImage(imgCircuit,0,0,w,h);
  
  c.draw(ctx); //on dessine la voiture
  c.move();
  
  testCollide();

  // on rappelle la boucle d'animation
  requestAnimationFrame(mainloop);
}




