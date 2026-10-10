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
canvas;
ctx;

constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
}

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clearRect() löscht den Canvas-Bereich, um die vorherige Zeichnung zu entfernen und Platz für die neue Zeichnung zu schaffen.
       
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy => { // forEach() wird verwendet, um jedes Element im enemies-Array zu durchlaufen und die drawImage()-Methode für jedes Enemy-Objekt aufzurufen.
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        // Draw() wird immer wieder aufgerufen, um die Animation zu erstellen. 
        let self = this; // this ist nicht mehr verfügbar, da es sich auf die draw()-Methode bezieht. Daher wird self erstellt, um auf die World-Klasse zuzugreifen.
        requestAnimationFrame(function() {
            self.draw();
    });

        // this.ctx.drawImage(this.enemy.img, this.enemy.x, this.enemy.y, this.enemy.width, this.enemy.height);
    }
}