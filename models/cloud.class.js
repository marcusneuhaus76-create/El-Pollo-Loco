class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500; // Zufällige x-Position zwischen 200 und 600
        this.animate();
        }

        animate() {
           this.moveLeft();
        }

       /*      for (let i = this.x; i > 0; i--) 
                { this.x = this.x - 1;} */
        
        // this.y = 50 + Math.random() * 100;
  /*   moveLeft() {
         setInterval( () => {        // Sorgt dafür, dass die Zeile z.B. jede Sekunde ausgeführt wird. Hir alle 1000ms = 1 Sekunde
            this.x -= 0.15; // Bewegt die Wolke nach links, indem die x-Position um 1 verringert wird
            }, 1000 / 60); // 60 Frames pro Sekunde */
    
    
}