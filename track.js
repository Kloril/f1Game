var secteur=[]; // prend x,y,w,h
function drawTrack(ctx) {

    ctx.save();
    
    ctx.fillRect(400, 10, 100, 400);
    ctx.fillRect(100, 400, 400, 100);
    ctx.fillRect(100, 400, 100, 200);
    ctx.fillRect(100, 600, 1200, 100);
    ctx.fillRect(1300, 310, 100, 400);
    ctx.fillRect(500, 10, 500, 100);
    ctx.fillRect(970, 10, 100, 300);
    ctx.fillRect(970, 310, 400, 100);
    

    
    secteur[0]=[400, 10, 100, 400];
    secteur[1]=[100, 400, 400, 100];
    secteur[2]=[100, 400, 100, 200];
    secteur[3]=[100, 600, 1200, 100];
    secteur[4]=[1300, 310, 100, 400];
    secteur[5]=[500, 10, 500, 100];
    secteur[6]=[970, 10, 100, 300];
    secteur[7]=[970, 310, 400, 100];
    ctx.restore();
    
    ctx.save();
    ctx.fillStyle="red";
    ctx.fillRect(500,10,10,100);
    ctx.restore();
}