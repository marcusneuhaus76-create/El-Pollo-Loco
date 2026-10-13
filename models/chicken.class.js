class Chicken extends MovableObject {
    y = 330; // 1) Kapitel 16:Wir können den Wert der y-Position hier festlegen, da alle Hühner auf derselben Höhe erscheinen sollen. Der y-Wert von 280
            // von movableObject wird hier überschrieben.

    height = 110;
    width = 100;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];  
    currentImage = 0;

// 11 - Hühnchen platzieren

    constructor() { 
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); 
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500; // Zufällige x-Position zwischen 200 und 600
        this.speed = 0.15 + Math.random() * 0.25; // Zufällige Geschwindigkeit ab 0.15 bis 0.4, damit die Hühner unterschiedlich schnell laufen
    
        this.animate();

    }



    animate() {
        this.moveLeft();


            setInterval( () => {
            let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 6 % 6 => Restwert 0, also wieder von vorne anfangen
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            }, 100);
    }   
}