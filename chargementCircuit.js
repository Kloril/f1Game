var canvas, context;

var imageObjet = new Image();

imageObjet.onload = function(){

    canvas = document.getElementById("#myCanvas");
    context = canvas.getContext("2d");
    imageObjet.src = "Monaco.png";
    context.drawImage(imageObjet,0,0);
}