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

function collision(car) {
    switch (car.secteur) {
        case 0:
            if (car.x + 25 >= 500 && car.y > 100) {
                car.x = 500 - 25;
            }
            if (car.y - 25 <= 10) {
                car.y = 10 + 25;
            }
            if (car.x - 25 < 400) {
                car.x = 400 + 25;
            }

            break;
        case 1:
            if (car.y - 25 < 400 && car.x < 400) {
                car.y = 400 + 25;
            }
            if (car.y + 25 >= 500) {
                car.y = 500 - 25;
            }
            if (car.x+25>=500){
                car.x=500-25;
            }
            break;
        case 2:
            if (car.y - 25 < 400) {
                car.y = 400 + 25;
            }
            if (car.x - 25 <= 100) {
                car.x = 100 + 25;
            }
            if (car.x + 25 > 200 && car.y > 500 && car.y < 600) {
                car.x = 200 - 25;
            }
            if (car.y + 25 >= 700) {
                car.y = 700 - 25;
            }
            break;
        case 3:
            if (car.y - 25 <= 600 && car.x > 200 && car.x<1300) {
                car.y = 600 + 25;
            }
            if (car.y + 25 >= 700) {
                car.y = 700 - 25;
            }
            if(car.x + 25 >=1400){
                car.x=1400-25;
            }
            if(car.x -25 <=100){
                car.x=100+25;
            }
            break;
        case 4:
            if (car.y - 25 <= 310) {
                car.y = 310 + 25;
            }
            if (car.x + 25 >= 1400) {
                car.x = 1400 - 25;
            }
            if (car.x - 25 <= 1300 && car.y > 410 && car.y < 610) {
                car.x = 1300 + 25;
            }
            if (car.y + 25 >= 700) {
                car.y = 700 - 25;
            }
            break;
        case 5:

            if (car.y - 25 <= 10) {
                car.y = 10 + 25;
            }
            if (car.y + 25 >= 100) {
                car.y = 100 - 25;
            }

            break;
        case 6:
            if (car.y - 25 <= 10) {
                car.y = 10 + 25;
            }
            if (car.x + 25 >= 1070) {
                car.x = 1070 - 25;
            }
            if (car.x - 25 < 970 && car.y > 100) {
                car.x = 970 + 25;
            }
            break;
        case 7:
            if (car.x - 25 < 970) {
                car.x = 970 + 25;
            }
            if (car.y - 25 <= 310 && car.x > 1070) {
                car.y = 310 + 25;
            }
            if (car.y + 25 >= 410) {
                car.y = 410 - 25;
            }
            break;
    }
}