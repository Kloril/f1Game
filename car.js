// attendre chargement de la page
window.onload = init;

//création des variables globales
let canvas, ctx, w, h;
let mousePos;
let img1;

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
let y=10; // position initiale
function mainloop() {  //fonction principale
  // on efface le canvas
  ctx.clearRect(0, 0, w, h);

  dessineVoiture(x, y); //on dessine la voiture
      window.addEventListener('keydown', function(event) { // gérer les fleches directionelles
         if (event.keyCode === 37) { //gauche
          x-=0.1;
         }
         if (event.keyCode === 40) { //bas
          y+=0.1;
         }
         if (event.keyCode === 38) { //haut
          y-=0.1;
         }
         else if (event.keyCode === 39) { //droite
          x+=0.1;
         }
    }  , false);



  // on rappelle la boucle d'animation
  requestAnimationFrame(mainloop);
}

function dessineVoiture(x, y) {
  ctx.save();  //sauvegarde le ctx
  ctx.translate(x, y);    //translate de x et y

  //on fait les modifs

  ctx.drawImage(img1, 0, 0, 100, 100); //desinne l'image
  ctx.restore(); //restore le ctx

  //ctx.fillRect(50, 50, 100, 100);

}
