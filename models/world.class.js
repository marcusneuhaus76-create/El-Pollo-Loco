class World {


character = new Character();
chicken = new Chicken();

enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
];  
// enemy = new Chicken();

//09: ctx und constructor werden hinzugefügt
clouds = [ 
    new Cloud()
];
backgroundObjects = [
    new BackgroundObject('img/5_background/layers/air.png', 0),
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
];
canvas;
ctx; // ariable "context"
keyboard;
// camera_x = -100;  Wir wollen eine Verschiebung um 100px nach links
camera_x = 0; // Statt mit 100 starten wir mit einer Kameraverschiebung von '0'


constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    }

setWorld(){
    this.character.world = this;
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

       /*  this.backgroundObjects.forEach(bgo => {
            this.addToMap(bgo);
        }); */
     /*    this.air.forEach(air => {
            this.ctx.drawImage(air.img, air.x, air.y, air.width, air.height);
        }); */

       /*  this.deserts.forEach(desert => {
            this.ctx.drawImage(desert.img, desert.x, desert.y, desert.width, desert.height);
        });
 */
        /* this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy => { // forEach() wird verwendet, um jedes Element im enemies-Array zu durchlaufen und die drawImage()-Methode für jedes Enemy-Objekt aufzurufen.
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height); 
        });*/

       /*  this.clouds.forEach(cloud => { 
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height); 
        });*/

        // Draw() wird immer wieder aufgerufen, um die Animation zu erstellen. 
      

        addObjectsToMap(objects){
            objects.forEach(o => {
                this.addToMap(o);
            });
        // this.ctx.drawImage(this.enemy.img, this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height);
        }


    addToMap(mo) {
        if(mo.otherDirection) {
            this.ctx.save(); // Speichern der aktuellen Einstellungen, da wir diese später noch brauchen
            this.ctx.translate(mo.width, 0); // Wir verändern die Methode, wie wir die Bilder einfügen
            this.ctx.scale(-1, 1); // Umdrehen an der Y-Achse um zu spiegeln
            mo.x = mo.x * -1; // Die X-Koordinate wird umgedreht
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection)  {
            mo.x = mo.x * -1; //
            this.ctx.restore(); // War die Direction geändert worden? Dann müssen wir die Einstellungen wieder herstellen
        }
    }

}