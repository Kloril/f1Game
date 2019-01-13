class Car{
    constructor(img){
      this.x =450;             // position
      this.y=50;
      this.v= 0;
     
      this.speed= 0;
<<<<<<< HEAD:js/car.js
      this.angle= 0;  // current angle facing
      this.acceleration= 1.05;    
  
      this.maxSpeed= 2.5;
      this.backSpeed = -1.5;
      this.secteur=0;
=======
      this.angle= Math.PI /2;  // current angle facing
      this.acceleration= 1.05;    
  
      this.maxSpeed= 8;
      this.backSpeed = -1.5;

>>>>>>> 6a7cab376317e337be7288c6f9a0b14b3bf7f886:car.js
      this.img = img;
    }
    
    draw(ctx) {
      ctx.save();  //sauvegarde le ctx
      ctx.translate(this.x,this.y);    //translate de x et y
    
      //on fait les modifs
    
     
<<<<<<< HEAD:js/car.js
      ctx.scale(0.2,0.2);
=======
      ctx.scale(0.3,0.3);
>>>>>>> 6a7cab376317e337be7288c6f9a0b14b3bf7f886:car.js
     // if (car.alfa > 2 * Math.PI) car.alfa %= 2 * Math.PI;
      ctx.rotate(c.angle);
      ctx.drawImage(this.img, -125, -45, 249, 90);
       //desinne l'image
      ctx.restore(); //restore le ctx
    
      //ctx.fillRect(50, 50, 100, 100);
    }

    move() {
      this.x += this.v * Math.cos(c.angle);
      this.y += this.v * Math.sin(c.angle);
    }
  }
  
  
  function dessineVoiture(c,img) {
    ctx.save();  //sauvegarde le ctx
    ctx.translate(c.x,c.y);    //translate de x et y
  
    //on fait les modifs
  
    ctx.drawImage(img, 0, 0, 100, 100);
    
    ctx.restore(); //restore le ctx
  
    //ctx.fillRect(50, 50, 100, 100);
  
  }

