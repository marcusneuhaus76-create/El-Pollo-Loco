class Chicken extends MovableObject {
    y = 290; // 1) Kapitel 16:Wir können den Wert der y-Position hier festlegen, da alle Hühner auf derselben Höhe erscheinen sollen. Der y-Wert von 280
            // von movableObject wird hier überschrieben.

// 11 - Hühnchen platzieren

    constructor() { 
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); 
        
        this.x = 200 + Math.random() * 500; // Zufällige x-Position zwischen 200 und 600
    }
}