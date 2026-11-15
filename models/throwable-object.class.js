class ThrowableObject extends MovableObject {
    
    soundBottle = new Audio('audio/beerbottle.wav');

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png'); 
        this.loadImages(this.IMAGES_BOTTLEROTATION);  
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);  
        this.bottleanimate();
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw(x, y);
        
    }
        
    
 
    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30; 
        this.applyGravity();
        
        setInterval( () => {
            this.x += 10; 
            }, 25);
        }
    
        

  IMAGES_BOTTLEROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];


    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];


    bottleanimate() {
        this.soundBottle.play(); 

        setInterval(() => {
            
                this.playAnimation(this.IMAGES_BOTTLEROTATION);
           
        }, 60);
    }   

    bottlesplash() {
            
            setInterval(() => {
                
                    this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
            
            }, 60);
        } 
    
    
 /*    bottlesplash() {
            if (this.isSplashing) return;      // nur einmal starten
            this.isSplashing = true;
            clearInterval(this.rotationInterval);
            clearInterval(this.moveInterval);
            this.speedY = 0;
            this.acceleration = 0;             // Flasche bleibt an der Stelle
            this.currentImage = 0;
            setInterval(() => {
                this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
            }, 60);
        } */

}