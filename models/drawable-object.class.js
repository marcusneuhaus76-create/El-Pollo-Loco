class DrawableObject {
    img;
    imageCache = {}; // Wir nutzen ein Objekt, um die geladenen Bilder zu speichern, damit wir sie später wiederverwenden können. Hier ein JSON
    currentImage = 0; // Index des aktuellen Bildes in der Animation
    x = 120;
    y = 480;
    height = 150;
    width = 100;


// I 08 Bilder einfügen
    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src="img/image.png">
        this.img.src = path; // Mit der Eigenschaft "this" ist die Variable überall im Objekt gültig.
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image(); //
            img.src = path;
            this.imageCache[path] = img; // imageCache ist ein globales Objekt, das die geladenen Bilder speichert
            });
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
}
