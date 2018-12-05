function declareListeners(event, car) { // gérer les fleches directionelles

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) { //gauche
      car.vx = -1;
    }
    if (event.keyCode === 40) { //bas
      car.vy = 1;
    }
    if (event.keyCode === 38) { //haut
      car.vy = -1;
    }
    else if (event.keyCode === 39) { //droite
      car.vx = 1;
    }

  }, false);

  window.addEventListener('keyup', function (event) {
    car.vx = car.vy = 0;
  }, false);

}

