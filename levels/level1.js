function createChickens(min, max) {
    let count = min + Math.floor(Math.random() * (max - min + 1));
    let start = 400;                          // Abstand zum Startpunkt des Characters
    let end = 3800;                           // vor dem Endboss (x = 2000)
    let sectionWidth = (end - start) / count;
    let chickens = [];
    for (let i = 0; i < count; i++) {
        let chicken = new Chicken();
        chicken.x = start + i * sectionWidth + Math.random() * sectionWidth;
        chickens.push(chicken);
    }
    return chickens;
}

function createClouds(min, max) {
    let count = min + Math.floor(Math.random() * (max - min + 1));
    let start = 0;
    let end = 5000;                           // so weit reicht dein Hintergrund (ca. 7 × 719)
    let sectionWidth = (end - start) / count;
    let clouds = [];
    for (let i = 0; i < count; i++) {
        let cloud = new Cloud();
        cloud.x = start + i * sectionWidth + Math.random() * sectionWidth;
        clouds.push(cloud);
    }
    return clouds;
}
const level1 = new Level(
    [
    ...createChickens(5, 14),
    new Endboss(),
],

[
...createClouds(3, 8),
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

    new BackgroundObject('img/5_background/layers/air.png', 4*719),
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 4*719),
    new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 4*719),
    new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 4*719),

    new BackgroundObject('img/5_background/layers/air.png', 5*719),
    new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 5*719),
    new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 5*719),
    new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 5*719),

    new BackgroundObject('img/5_background/layers/air.png', 6*719),
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 6*719),
    new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 6*719),
    new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 6*719),
]

);