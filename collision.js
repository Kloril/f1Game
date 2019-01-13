function testCollide(carWidth, carLength) {

    if (c.x + (carLength / 2) > w) {
        c.x = -c.v;
        // on remet au point de contact
        c.x = w - carLength / 2; // a refaire
    }

    if (c.x < 0) {
        c.x = -c.v;
        // on remet au point de contact
        c.x = 0
    }

    if (c.y + (carWidth / 2) > h) {
        c.y = -c.v;
        c.y = h - carWidth / 2; // a refaire
    }

    if (c.y < 0) {
        c.y = -c.v;
        c.y = 0;
    }
}

function secteurNumber(car) {
    if (car.x < secteur[0][0] + secteur[0][2] && car.y < secteur[0][1] + secteur[0][2] && car.x > secteur[0][0] && car.y > secteur[0][1]) {
        car.secteur = 0;
    }
    if (car.x < secteur[1][0] + secteur[1][2] && car.y < secteur[1][1] + secteur[1][2] && car.x > secteur[1][0] && car.y > secteur[1][1]) {
        car.secteur = 1;
    }
    if (car.x < secteur[2][0] + secteur[2][2] && car.y < secteur[2][1] + secteur[2][2] && car.x > secteur[2][0] && car.y > secteur[2][1]) {
        car.secteur = 2;
    }
    if (car.x < secteur[3][0] + secteur[3][2] && car.y < secteur[3][1] + secteur[3][2] && car.x > secteur[3][0] && car.y > secteur[3][1]) {
        car.secteur = 3;
    }
    if (car.x < secteur[4][0] + secteur[4][2] && car.y < secteur[4][1] + secteur[4][2] && car.x > secteur[4][0] && car.y > secteur[4][1]) {
        car.secteur = 4;
    }
    if (car.x < secteur[5][0] + secteur[5][2] && car.y < secteur[5][1] + secteur[5][2] && car.x > secteur[5][0] && car.y > secteur[5][1]) {
        car.secteur = 5;
    }
    if (car.x < secteur[6][0] + secteur[6][2] && car.y < secteur[6][1] + secteur[6][2] && car.x > secteur[6][0] && car.y > secteur[6][1]) {
        car.secteur = 6;
    }
    if (car.x < secteur[7][0] + secteur[7][2] && car.y < secteur[7][1] + secteur[7][2] && car.x > secteur[7][0] && car.y > secteur[7][1]) {
        car.secteur = 7;
    }
    console.log(car.secteur);
}

function collide(car) {
    switch (car.secteur) {
        case 0:
            break;
        case 1:
     
            break;
        case 2:
       
            break;
        case 3:
       
            break;
        case 4:
            break;
        case 5:
       
            break;
        case 6:
            break;
        case 7:
            break;
    }
}