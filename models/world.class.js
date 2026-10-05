class World {


character = new Character();
chicken = new Chicken();
enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
]; 

//09: ctx und constructor werden hinzugefügt
ctx;

constructor(canvas) {
    this.ctx = canvas.getContext('2d');
}

    draw() {
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
    }
}