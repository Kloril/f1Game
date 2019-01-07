var inputStates = {};


function declareListeners(event, car) { // gérer les fleches directionelles
  

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) { //gauche
      inputStates.left = true;
       
    }
    if (event.keyCode === 40) { //bas
      inputStates.down = true;
      
    }
    if (event.keyCode === 38) { //haut
      inputStates.up = true;
      
    }
    if (event.keyCode === 39) { //droite
      inputStates.right = true;
  
    }
    if (event.keyCode === 32){ //frein
      inputStates.brake = true;

    }

  });

  window.addEventListener('keyup', function (event) {

    if (event.keyCode === 37) { //gauche
      inputStates.left = false;  
    }
    if (event.keyCode === 40) { //bas
      inputStates.down = false; 
    }
    if (event.keyCode === 38) { //haut
      inputStates.up = false;
      
    }
    if (event.keyCode === 39) { //droite
      inputStates.right = false;
    }
    if (event.keyCode === 32){ //frein
      inputStates.brake = false;
    }

  });

}

function updateCarPosition(car){
  if (inputStates.left){
    car.angle -= Math.PI / 120;
  }
  if (inputStates.right){
    car.angle += Math.PI / 120;
  }
  if (inputStates.down){
    car.v = -car.backSpeed;
  }
  if (inputStates.up){
    if(car.v > 0 && car.v < car.maxSpeed){
      car.v *= car.acceleration;
    }
    else if (car.v<=0){
      car.v = 0.5;
    }
  }
  if (inputStates.up == false){
    if (car.v>0){
      car.v -= 0.1;
    }
  }
  if (inputStates.brake){ 
    if(car.v > 0){
      car.v -= 0.2;
    }; 
  }
}


