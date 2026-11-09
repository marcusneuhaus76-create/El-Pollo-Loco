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
statusBar = new StatusBar('health', 0, 100);
bottleBar = new StatusBar('bottle', 50, 100);
coinBar = new StatusBar('coin', 100, 100);
throwableObjects = [];


constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
}

setWorld() {
    this.character.world = this;
}

run() {
    setInterval(() => {
        
        this.checkCollisions();  
        this.checkThrowObjects();   
        this.checkBottleHits();
           
    }, 200); // alle 200 Milisekunden
}

checkThrowObjects() {
    if (this.keyboard.D) {
        let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100); 
        this.throwableObjects.push(bottle);
        }
    }


checkCollisions() {
    this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy)
        }
    });
}


checkBottleHits() {
    this.throwableObjects.forEach((bottle) => {
        this.level.enemies.forEach((enemy) => {
            if (bottle.isColliding(enemy)) {
                enemy.hit();
                console.log('Enemy hit');
            }
        });
    });
}

draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clearRect() löscht den Canvas-Bereich, um die vorherige Zeichnung zu entfernen und Platz für die neue Zeichnung zu schaffen.
        
    this.ctx.translate(this.camera_x, 0); // Verrschiebung camera_x auf X-Achse und 0 auf Y-Achse
    this.addObjectsToMap(this.backgroundObjects);

    this.ctx.translate(-this.camera_x, 0); //Back
    // Spaced fpr fixed objects
    this.addToMap(this.statusBar);
    this.addToMap(this.bottleBar);
    this.addToMap(this.coinBar);
    this.ctx.translate(this.camera_x, 0); //Forwards
    
    this.addToMap(this.character);
    this.addObjectsToMap(this.clouds);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.throwableObjects)

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

