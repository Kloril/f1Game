var circuit = ["ligneDroite","ligneDroite","ligneDroite","virageDroite"];


let canvas, ctx, w, h;

window.onload = init;

function init(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");

    w = canvas.width;
    h = canvas.height;

    x = 0;
    y = 0;

    longueurLigneDroite = 100;
    largeurLigneDroite = 50;

    for(var i = 0; i < circuit.length; i++){
        switch (circuit[i]) {
            case "ligneDroite":
                ligneDroite(x,y);
                x += longueurLigneDroite;
                break;
            case "virageDroite":
                ctx.save();
                ctx.translate(largeurLigneDroite,longueurLigneDroite)
                ctx.rotate(90);
                ligneDroite(x,y);
                x += longueurLigneDroite;
                y += largeurLigneDroite;
                ctx.restore();
                break;
            case "virageGauche":
                virageGauche(x,y);
                x += longueurLigneDroite;
                y += largeurLigneDroite;
                break;
            default:
                console.log("Cet élement n'existe pas");

        }
        
    }
    
}

function ligneDroite(x,y){
    ctx.fillRect(x, y, longueurLigneDroite, largeurLigneDroite);
}

function virageDroite(x,y){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(90);
    ligneDroite(y,x);
    ctx.restore();
}

function virageGauche(x,y){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(90);
    ligneDroite(y,x);
    ctx.restore();
}





    




