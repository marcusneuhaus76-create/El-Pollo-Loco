class Chicken extends MovableObject {

// 11 - Hühnchen platzieren

    constructor() { 
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); 
        
        this.x = 200 + Math.random() * 500; // Zufällige x-Position zwischen 200 und 600
    }
}