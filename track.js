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

function drawOval(x, y, rw, rh, linewidth, color)
{
  var canvas = document.getElementById("myCanvas"); 
  var context = canvas.getContext("2d");
  context.save();
  context.scale(1,  rh/rw);
  context.beginPath();
  context.arc(x, y, rw, 0, 2 * Math.PI);
  context.restore();
  context.lineWidth = linewidth;
  context.strokeStyle=color;
  context.stroke();  
}