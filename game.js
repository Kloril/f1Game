// attendre chargement de la page
window.onload = init;

//création des variables globales
let canvas, ctx, w, h;
let mousePos;
let img1;




/*$('#start').click(function() {
  $('#optionsMenu').hide();
  init();
  $('#myCanvas').show();
});*/


var c= new Car();
//début de la fonction d'initialisation
function init() {
  canvas = document.querySelector("#myCanvas"); // récupére la balise canvas d'id myCanvas
  ctx = canvas.getContext("2d");    // crée le contexte(ctx) 2d

  w = canvas.width;     //récupère largeur et hauteur du canvas
  h = canvas.height;



  img1 = new Image();

  img1.onload = function() {
      requestAnimationFrame(mainloop);
  }
  img1.src = "f1car.png"; //crée une image et lance l'animation
}


let x = 10;
let y = 10; // position initiale
function mainloop() {  //fonction principale
  // on efface le canvas
  ctx.clearRect(0, 0, w, h);

  dessineVoiture(c,img1); //on dessine la voiture
  listener('keydown',c);
  
  testCollide();

  // on rappelle la boucle d'animation
  requestAnimationFrame(mainloop);
}



