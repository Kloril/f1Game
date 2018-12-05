class Car{
    constructor(img){
      this.x =10;             // position
      this.y=10;
      this.vx= 0;
      this.vy=0;
      this.acceleration= 1.2;
      this.rotationStep= 5;   // how fast to turn
      this.rotation= 115;     // current angle facing
  
      this.maxSpeed= 7;
      this.backSpeed= 1.1;

      this.img = img;
    }
  
    draw(ctx) {
      ctx.save();  //sauvegarde le ctx
      ctx.translate(this.x,this.y);    //translate de x et y
    
      //on fait les modifs
    
      ctx.drawImage(this.img, 0, 0, 100, 100);
       //desinne l'image
      ctx.restore(); //restore le ctx
    
      //ctx.fillRect(50, 50, 100, 100);
    }

    move() {
      this.x += this.vx;
      this.y += this.vy;
    }
  }
  
  
  function dessineVoiture(c,img) {
    ctx.save();  //sauvegarde le ctx
    ctx.translate(c.x,c.y);    //translate de x et y
  
    //on fait les modifs
  
    ctx.drawImage(img, 0, 0, 100, 100);
     //desinne l'image
    ctx.restore(); //restore le ctx
  
    //ctx.fillRect(50, 50, 100, 100);
  
  }

