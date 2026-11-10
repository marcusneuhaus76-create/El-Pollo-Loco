

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
    if(e.keyCode == 39) { // Pfeil nach rechts
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

     if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
    }

    console.log(e);
    });


/* 
window.addEventListener("keydown", (e) => {
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
}); */