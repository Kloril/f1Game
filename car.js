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
  img1.src = "test.png"; //crée une image et lance l'animation
}


let x = 10; // position initiale
function mainloop() {  //fonction principale
  // on efface le canvas
  ctx.clearRect(0, 0, w, h);

  dessineVoiture(x, 10);
      window.addEventListener('keydown', function(event) {
         if (event.keyCode === 37) {
          x-=0.1;
         }
         else x+=0.1;
      }, false);

  //on dessine la voiture
                 // on se deplace de x

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
