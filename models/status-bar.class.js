class StatusBar extends DrawableObject {

    IMAGES  = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];

    percentage = 100;
    
    constructor() {
        this.loadImages(this.IMAGES);
    }

    // setPercentage(50);
    setPercentage(percentage){
        this.setPercentage = percentage; // => 0.....5
    
        if(percentage < 20) {
            IMAGES
        }
    
    }



}