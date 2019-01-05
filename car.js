class Car{
    constructor(img){
      this.x =10;             // position
      this.y=10;
      this.v= 0;
     
      this.speed= 0;
      this.angle= Math.PI /2;  // current angle facing
           
  
      this.maxSpeed= 9;
      this.backSpeed= 1.1;

      this.img = img;
    }
    
    draw(ctx) {
      ctx.save();  //sauvegarde le ctx
      ctx.translate(this.x,this.y);    //translate de x et y
    
      //on fait les modifs
    
     
      ctx.scale(0.5,0.5);
     // if (car.alfa > 2 * Math.PI) car.alfa %= 2 * Math.PI;
      ctx.rotate(c.angle);
      ctx.drawImage(this.img, 0, 0, 249, 90);
       //desinne l'image
      ctx.restore(); //restore le ctx
    
      //ctx.fillRect(50, 50, 100, 100);
    }

    move() {
      this.x += this.v * Math.cos(c.angle);
      this.y += this.v * Math.sin(c.angle);
    }
  }
  
  // position initiale
 
  function dessineVoiture(c,img) {
    ctx.save();  //sauvegarde le ctx
    ctx.translate(c.x,c.y);    //translate de x et y
  
    //on fait les modifs
  
    ctx.drawImage(img, 0, 0, 100, 100);
    
    ctx.restore(); //restore le ctx
  
    //ctx.fillRect(50, 50, 100, 100);
  
  }

