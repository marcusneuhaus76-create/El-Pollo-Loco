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

let canvas;
let ctx;
let world;

function init() {
    canvas = document.getElementById('canvas');
    world = new World();

   
    console.log('My Character is', world.character);

}