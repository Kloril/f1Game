function testCollide(){

    if(c.x+100 > w) {
        c.x = -c.vx;
        // on remet au point de contact
        c.x  = w-100 ; // a refaire
    }

    if(c.x < 0) {
        c.x = -c.vx;
        // on remet au point de contact
        c.x = 0
    }

     if(c.y+100 > h) {
       c.y = -c.vy;
       c.y = h - 100; // a refaire
     }

     if(c.y < 0)  {
       c.y = -c.vy;
       c.y = 0;
     }
}