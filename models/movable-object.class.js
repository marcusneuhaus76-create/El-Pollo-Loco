class MovableObject {
    img;
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    imageCache = {}; // Wir nutzen ein Objekt, um die geladenen Bilder zu speichern, damit wir sie später wiederverwenden können. Hier ein JSON
    currentImage = 0; // Index des aktuellen Bildes in der Animation
    speed = 0.15; // Geschwindigkeit der Bewegung nach links


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
            this.imageCache[path] = img; // imageCache ist ein globales Objekt, das die geladenen Bilder speichert
            });
    }

    moveRight() {
        console.log('Moving right');
    }


      moveLeft() {
         setInterval( () => {        // Sorgt dafür, dass die Zeile z.B. jede Sekunde ausgeführt wird. Hir alle 1000ms = 1 Sekunde
            this.x -= this.speed; // Bewegt die Wolke nach links, indem die x-Position um 1 verringert wird
            }, 1000 / 60); // 60 Frames pro Sekunde
        }
 }