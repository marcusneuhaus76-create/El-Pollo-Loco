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
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];  
    world;
    // currentImage = 0;  Index des aktuellen Bildes in der Animation

    //I 08 Bilder einfügen
    constructor() { 
        super().loadImage('img/2_character_pepe/2_walk/W-21.png'); 
        // super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); 
        this.loadImages(this.IMAGES_WALKING);  
    
        this.animate();
    }

        animate() {
            setInterval( () => {

                if (this.world.keyboard.RIGHT) {

                    let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 6 % 6 => Restwert 0, also wieder von vorne anfangen
                    let path = this.IMAGES_WALKING[i];
                    this.img = this.imageCache[path];
                    this.currentImage++;
                }
            }, 100);
        }   
    

    jump() {

   }
} 