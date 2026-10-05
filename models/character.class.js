/* class Character {
    x;
    y;




    moveRight(){

    }


    jump() {

    }
} */

class Character extends MovableObject {

    //I 08 Bilder einfügen
    constructor() { 
        super().loadImage('img/2_character_pepe/2_walk/W-21.png'); 
        // super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); 
        
       
    }

    jump() {

   }
} 