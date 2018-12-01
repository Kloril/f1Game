// attendre chargement de la page
window.onload = init;

//création des variables globales
let canvas, ctx, w, h;
let mousePos;
let img1;


class Car{
  constructor(){
    this.x =10;             // position
    this.y=10;
    this.vx= 0.1;
    this.vy=0.1;
    this.acceleration= 1.2;
    this.rotationStep= 5;   // how fast to turn
    this.rotation= 115;     // current angle facing

    this.maxSpeed= 7;
    this.backSpeed= 1.1;
  }

}

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
let y=10; // position initiale
function mainloop() {  //fonction principale
  // on efface le canvas
  ctx.clearRect(0, 0, w, h);

  dessineVoiture(c); //on dessine la voiture
      window.addEventListener('keydown', function(event) { // gérer les fleches directionelles
         if (event.keyCode === 37) { //gauche
          c.x-=c.vx;
         }
         if (event.keyCode === 40) { //bas
          c.y+=c.vy;
         }
         if (event.keyCode === 38) { //haut
          c.y-=c.vy;
         }
         else if (event.keyCode === 39) { //droite
          c.x+=c.vx;
         }
    }  , false);

  testCollide();

  // on rappelle la boucle d'animation
  requestAnimationFrame(mainloop);
}

function testCollide(){

      if(c.x+100 > w) {
          c.x = -c.vx;
          // on remet au point de contact
          c.x  = w-100 ; // a refaire
      }

      if(c.x < 0) {
          c.x = -c.vx;
          // on remet au point de contact
          c.x = 0
      }

       if(c.y+100 > h) {
         c.y = -c.vy;
         c.y = h - 100; // a refaire
       }

       if(c.y < 0)  {
         c.y = -c.vy;
         c.y = 0;
       }
}


function dessineVoiture(c) {
  ctx.save();  //sauvegarde le ctx
  ctx.translate(c.x,c.y);    //translate de x et y

  //on fait les modifs

  ctx.drawImage(img1, 0, 0, 100, 100);
   //desinne l'image
  ctx.restore(); //restore le ctx

  //ctx.fillRect(50, 50, 100, 100);

}
