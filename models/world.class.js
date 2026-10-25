class World {
character = new Character();
level = level1;
chicken = new Chicken();
enemies = level1.enemies;  // enemy = new Chicken(); //09: ctx und constructor werden hinzugefügt
clouds = level1.clouds;
backgroundObjects = level1.backgroundObjects;
canvas;
ctx; // ariable "context"
keyboard;
camera_x = 0; // camera_x = -100;  Wir wollen eine Verschiebung um 100px nach links// Statt mit 100 starten wir mit einer Kameraverschiebung von '0'


constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
}

setWorld(){
    this.character.world = this;
}

checkCollisions() {
    setInterval(() => {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) ) {
                console.log('Collision with Character, energy', this.character.energy);
                console.log('Powerlevel > 0', this.character.checkEnergy(this.character.energy));
                if( this.character.checkEnergy(this.character.energy) == false)   
                    this.character.playAnimation(this.character.IMAGES_DYING);
                else    
                this.character.energy -= 5;
            }
        });
    }, 200); // alle 1000 Milisekunden
}


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clearRect() löscht den Canvas-Bereich, um die vorherige Zeichnung zu entfernen und Platz für die neue Zeichnung zu schaffen.
       /*  this.enemies.forEach(enemy => { // forEach() wird verwendet, um jedes Element im enemies-Array zu durchlaufen und die drawImage()-Methode für jedes Enemy-Objekt aufzurufen.
            this.addToMap(enemy);
        });
        this.clouds.forEach(cloud => {
            this.addToMap(cloud);
        });
        */     
       this.ctx.translate(this.camera_x, 0); // Verrschiebung camera_x auf X-Achse und 0 auf Y-Achse


        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);

         this.ctx.translate(-this.camera_x, 0);
        
         
        let self = this; // this ist nicht mehr verfügbar, da es sich auf die draw()-Methode bezieht. Daher wird self erstellt, um auf die World-Klasse zuzugreifen.
        requestAnimationFrame(function() {
            self.draw();
        });
    }
    

        addObjectsToMap(objects){
            objects.forEach(o => {
                this.addToMap(o);
            });
        // this.ctx.drawImage(this.enemy.img, this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height);
        }

 
    addToMap(mo) {
        if(mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
           this.flipImageBack(mo); 
        }
    }
    
        flipImage(mo) {
            this.ctx.save(); // Speichern der aktuellen Einstellungen, da wir diese später noch brauchen
            this.ctx.translate(mo.width, 0); // Wir verändern die Methode, wie wir die Bilder einfügen
            this.ctx.scale(-1, 1); // Umdrehen an der Y-Achse um zu spiegeln
            mo.x = mo.x * -1; // Die X-Koordinate wird umgedreht
        }

        flipImageBack(mo) {
             mo.x = mo.x * -1; //
            this.ctx.restore(); // War die Direction geändert worden? Dann müssen wir die Einstellungen wieder herstellen
        }
}