

let canvas;
// let ctx; Die Context-Variable wird herausgenommen und in die World-KLasse übergeben.
let world;
let keyboard = new Keyboard(); // 9 - Keyboard-Objekt erstellen



function init() {
   canvas = document.getElementById('canvas');
   world = new World(canvas, keyboard);
    
   console.log('My Character is', world.character);

    // console.log('My Chicken is', world.enemy);
}


window.addEventListener("keydown", (e) => {
    if(e.keyCode == 39) { // Pfeil nach rechts
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true; 
    }

     if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
    console.log(e);
    });


window.addEventListener("keyup", (e) => {
    if(e.keyCode == 39) { // Pfeil nach rechts this.lastHit
        keyboard.RIGHT = false;
        world.character.move();
        console.log('Character is moving', world.character.lastmove);
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
        world.character.move();
        console.log('Character is moving', world.character.lastmove);
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
        world.character.move();
        console.log('Character is moving', world.character.lastmove);
    }

     if (e.keyCode == 40) {
        keyboard.DOWN = false;
        world.character.move();
        console.log('Character is moving', world.character.lastmove);
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
        world.character.move();
        console.log('Character is moving', world.character.lastmove);
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
        world.character.move();
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        console.log('Character is moving', world.character.lastmove);
    }

    console.log(e);
    });

