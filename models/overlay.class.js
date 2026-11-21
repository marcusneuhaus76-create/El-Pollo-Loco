// models/overlay.class.js
class Overlay extends MovableObject {
    constructor(images) {
        super().loadImage(images[0]);
        this.loadImages(images);
        this.images = images;
        this.x = 0;
        this.y = 0;
        this.width = 720;
        this.height = 480;
    }

     start() {
        if (this.started) return;          // nur einmal starten
        this.started = true;
        this.currentImage = 0;
        this.animationInterval = setInterval(() => {
            this.playAnimation(this.images);
        }, 500);                           // alle 0,5 s nächstes Bild
    }

    startend() {
        if (this.started) return;          // nur einmal starten
        this.started = true;
        this.currentImage = 0;
        this.animationInterval = setInterval(() => {
            this.playAnimation(this.images);
        }, 5000);                           // alle 0,5 s nächstes Bild
    }
}

