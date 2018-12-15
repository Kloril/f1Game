class Car{

    constructor(img){
      this.x =10;             // position
      this.y=10;
      this.acceleration= 1;
      this.angle = 115;     // current angle facing
      this.mod;
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

      this.x += (this.maxSpeed * this.mod) * Math.cos(Math.PI / 180 * this.angle);
      this.y += (this.maxSpeed * this.mod) * Math.sin(Math.PI / 180 * this.angle);

    }
  }

