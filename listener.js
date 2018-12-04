function listener(event,car){ // gérer les fleches directionelles

  window.addEventListener(event, function (event) {
    if (event.keyCode === 37) { //gauche
      car.x-=car.vx;
     }
     if (event.keyCode === 40) { //bas
      car.y+=car.vy;
     }
     if (event.keyCode === 38) { //haut
      car.y-=car.vy;
     }
     else if (event.keyCode === 39) { //droite
      car.x+=car.vx;
     }
    
}, false);
    

 
  }

  