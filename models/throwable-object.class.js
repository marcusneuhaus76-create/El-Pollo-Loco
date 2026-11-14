class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png'); 
        this.loadImages(this.IMAGES_BOTTLEROTATION);  
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



    bottleanimate() {


        setInterval(() => {
            
                this.playAnimation(this.IMAGES_BOTTLEROTATION);
           
        }, 60);
    }   
}