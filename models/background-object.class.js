class BackgroundObject extends MovableObject {

    width = 720;
    height = 400;
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        
        this.x = x;
        this.y = y;
    }
}


/* class fixedObject {
 

    // I 08 Bilder einfügen
    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src="img/image.png">
        this.img.src = path;
    }

} */