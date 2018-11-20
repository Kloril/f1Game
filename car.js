window.onload = init;

let canvas, ctx, w, h;
let mousePos;
let img1;


function init() {
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");

  w = canvas.width;
  h = canvas.height;

  document.onmousemove = traiteDeplacementsSouris;

   img1 = new Image();

  img1.onload = function() {
    startGame();
  }
  img1.src = "test.png";
}

function startGame() {
    // on demarre la boucle d'animation
  requestAnimationFrame(mainloop);

}

function traiteDeplacementsSouris(event) {
  let rect = canvas.getBoundingClientRect();
  mousePos = {};
  mousePos.x = event.clientX - rect.left;
  mousePos.y = event.clientY - rect.top;
}
let x = 10;
function mainloop() {
  // on efface le canvas
  ctx.clearRect(0, 0, w, h);

 dessineVoiture(x, 10);
  x+=1;

  // on rappelle la boucle d'animation
  requestAnimationFrame(mainloop);
}

function dessineVoiture(x, y) {
  ctx.save();
  ctx.translate(x, y);

  // On va faire un masque en forme de cercle
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(0+50, 0+50, 50, 0, Math.PI*2);
  ctx.fill();

  ctx.save();
  ctx.clip();
  ctx.drawImage(img1, 0, 0, 100, 100);
  ctx.restore();

  //ctx.fillRect(50, 50, 100, 100);

  ctx.restore();
}
