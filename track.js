function drawTrack(ctx) {

    
    ctx.save()
    
    ctx.fillRect(500,0, 500, 100);
    ctx.beginPath();
    ctx.arc(1000, 68, 70, 1 * Math.PI, 2 * Math.PI);
    ctx.lineWidth=5;
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.fillRect(970,60,100,100)
    ctx.restore();
}