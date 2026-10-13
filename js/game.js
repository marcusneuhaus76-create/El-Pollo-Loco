/* 
game.js bis II - 09 

let canvas;
let ctx; Die Context-Variable wird deklariert, um später auf das Canvas-Element zuzugreifen und darauf zu zeichnen.
/* let character = new MovableObject(); */
/* let character = new Character();


let enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
]; 
let world = new World();


function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

   console.log('My Character is', world.character);
   console.log('My Chicken are', world.chicken);
}

*/

/*  9 - Character anzeigen


let canvas;
let ctx;
let world = new World();

Bislang haben wir

*/

let canvas;
// let ctx; Die Context-Variable wird herausgenommen und in die World-KLasse übergeben.
let world;
let keyboard = new Keyboard(); // 9 - Keyboard-Objekt erstellen

function init() {
   canvas = document.getElementById('canvas');
   world = new World(canvas);
    
   console.log('My Character is', world.character);

    // console.log('My Chicken is', world.enemy);

}

window.addEventListener("keypress", (e) => {
    console.log(e);
    if (e.key == 'ArrowLeft')  keyboard.LEFT = true;
    if (e.key == 'ArrowRight') keyboard.RIGHT = true;
    if (e.key == 'ArrowUp')    keyboard.UP = true;
    if (e.key == 'ArrowDown')  keyboard.DOWN = true;
    if (e.key == ' ')          keyboard.SPACE = true;
});

window.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowLeft')  keyboard.LEFT = false;
    if (e.key == 'ArrowRight') keyboard.RIGHT = false;
    if (e.key == 'ArrowUp')    keyboard.UP = false;
    if (e.key == 'ArrowDown')  keyboard.DOWN = false;
    if (e.key == ' ')          keyboard.SPACE = false;
});