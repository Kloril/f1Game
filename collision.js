function testCollide(carWidth,carLength){

    if(c.x+(carLength/2) > w) {
        c.x = -c.v;
        // on remet au point de contact
        c.x  = w-carLength/2 ; // a refaire
    }

    if(c.x < 0) {
        c.x = -c.v;
        // on remet au point de contact
        c.x = 0
    }

     if(c.y+(carWidth/2) > h) {
       c.y = -c.v;
       c.y = h - carWidth/2; // a refaire
     }

     if(c.y < 0)  {
       c.y = -c.v;
       c.y = 0;
     }
}