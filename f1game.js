window.onload = init;

let canvas, context, imageVoiture;

function init(){

    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");

    imageVoiture = new Image();

    imageVoiture.src = "test.png";
    
    imageVoiture.onload = function(){
        startGame();
    }
}