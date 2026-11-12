function createChickens(min, max) {
    let count = min + Math.floor(Math.random() * (max - min + 1));
    let chickens = [];
    for (let i = 0; i < count; i++) {
        chickens.push(new Chicken());
    }
    return chickens;
}

const level1 = new Level(
    [
    ...createChickens(3, 8),
    new Endboss(),
],
[
new Cloud()
],
[
    new BackgroundObject('img/5_background/layers/air.png', -719),
    new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
    new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),


    new BackgroundObject('img/5_background/layers/air.png', 0),
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

    new BackgroundObject('img/5_background/layers/air.png', 719),
    new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
    new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

    new BackgroundObject('img/5_background/layers/air.png', 2*719),
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 2*719),
    new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 2*719),
    new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 2*719),

    new BackgroundObject('img/5_background/layers/air.png', 3*719),
    new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 3*719),
    new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 3*719),
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 3*719),
]

);