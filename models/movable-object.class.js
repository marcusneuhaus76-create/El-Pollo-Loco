class MovableObject {
    x = 120;
    y = 280;
    img;
    imageCache = {}; // Wir nutzen ein Objekt, um die geladenen Bilder zu speichern, damit wir sie später wiederverwenden können. Hier ein JSON
    


    // I 08 Bilder einfügen
    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id="image" src="img/image.png">
        this.img.src = path; // Mit der Eigenschaft "this" ist die Variable überall im Objekt gültig.
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image(); //
            img.src = path;
            this.imageCache[path] = path; // imageCache ist ein globales Objekt, das die geladenen Bilder speichert
            });
    }

    moveRight() {
        console.log('Moving right');
    }


    moveLeft() {
        console.log('Moving left');
    }
}