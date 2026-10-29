class MovableObject extends DrawableObject {
   
    
    speed = 0.15; // Geschwindigkeit der Bewegung nach links
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround(){
        return this.y < 90;
    }
  

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath(); // Beginnt eine neue Zeichnung aus Linien und Formen
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
            }
        }

    // isColliding(chicken)
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
        }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // Speichert Zeit in Zahlenform seit dem 01.01.1970
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms seitdem wir zuletzt getroffen wurden
        timepassed = timepassed / 1000; // Difference in ms: Umrechnung in Sekunden
        console.log(timepassed);
        return timepassed < 1; // Ergibt entweder 'true' oder 'false'
    }

    isDead() {
        return this.energy == 0;
    }
    

    

    playAnimation(images) {
        // Walk animation 
        let i = this.currentImage % images.length; // let i = 6 % 6 => Restwert 0, also wieder von vorne anfangen
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
        }
    

    jump(){
        this.speedY = 30;
    }
}

/* checkEnergy(powerlevel) {
       return powerlevel > 0;
    }
*/