class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500; // Zufällige x-Position zwischen 200 und 600
        
        // this.y = 50 + Math.random() * 100;
    }
    
}