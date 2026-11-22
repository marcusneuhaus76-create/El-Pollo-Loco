class Cloud extends MovableObject {
    y = -40 + Math.random() * 40;  
    height = 250;
    width =  400 + Math.random() * 200; 


    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500; // Zufällige x-Position zwischen 200 und 600
        this.animate();
        }

       animate() {
         setInterval(() => {
            this.moveLeft();
            }, 1000 / 60);
         } 
      }