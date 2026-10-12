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
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0, 80),
];
canvas;
ctx;

constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
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
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.backgroundObjects);
         
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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }

}