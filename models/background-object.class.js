class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        
        this.x = x;
        this.y = 480 - this.height; // Kapitel 14: 480 ist die Höhe des Canvas, daher wird die y-Position so gesetzt, 
                                    // dass das Objekt am unteren Rand des Canvas positioniert wird.
    }
}
