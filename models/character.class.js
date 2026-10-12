/* class Character {
    x;
    y;




    moveRight(){

    }


    jump() {

    }
} */

class Character extends MovableObject {
    y = 100;
    height = 350;
    width = 150;


    //I 08 Bilder einfügen
    constructor() { 
        super().loadImage('img/2_character_pepe/2_walk/W-21.png'); 
        // super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); 
        this.loadImages([
            'img/2_character_pepe/2_walk/W-21.png',
            'img/2_character_pepe/2_walk/W-22.png',
            'img/2_character_pepe/2_walk/W-23.png',
            'img/2_character_pepe/2_walk/W-24.png',
            'img/2_character_pepe/2_walk/W-25.png',
            'img/2_character_pepe/2_walk/W-26.png',
        ]);    
    }


    jump() {

   }
} 