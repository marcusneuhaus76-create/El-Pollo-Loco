let canvas;
let ctx; //Die Context-Variable wird deklariert, um später auf das Canvas-Element zuzugreifen und darauf zu zeichnen.
/* let character = new MovableObject(); */
let character = new Character();


function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

   console.log('My Character is', character);
}