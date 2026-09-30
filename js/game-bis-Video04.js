let canvas;
let ctx; //Die Context-Variable wird deklariert, um später auf das Canvas-Element zuzugreifen und darauf zu zeichnen.
let character = new Image();


function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

   
    character.src = '../img/2_character_pepe/2_walk/W-21.png';


    setTimeout( function() {
        ctx.drawImage(character, 20, 20, 50, 150); //Das Bild wird auf dem Canvas an der Position (20,20) mit einer Breite 50 und Höhe von 150 Pixeln gezeichnet.

    }, 2000); //Die Funktion init() wird nach 2000 Millisekunden (2 Sekunden) aufgerufen, um sicherzustellen, dass das Bild geladen ist, bevor es gezeichnet wird.  
}