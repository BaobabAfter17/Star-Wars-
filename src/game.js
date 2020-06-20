const Asteroid = require("./asteroid");
const Ship = require("./ship");
const Bullet = require("./bullet");

function Game() {
    Game.DIM_X = 700;
    Game.DIM_Y = 500;
    Game.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship(this.randomPosition(), this);
    this.bullets = [];


}

Game.prototype.addAsteroids = function () {
    let pos, astroid;
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        pos = this.randomPosition();
        astroid = new Asteroid(pos, this);
        this.asteroids.push(astroid);
    }
}

Game.prototype.randomPosition = function () {
    let x = Math.random() * Game.DIM_X;
    let y = Math.random() * Game.DIM_Y;
    return [x, y];
}

Game.prototype.draw = function (ctx, img) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.drawImage(img, 0, 0);
    this.allObjects().forEach(obj => obj.draw(ctx));
}

Game.prototype.moveObjects = function (timeDelta) {
    this.allObjects().forEach(obj => obj.move(timeDelta) );
}

Game.prototype.wrap = function (pos) {
    if (pos[0] < 0) {
        pos[0] = Game.DIM_X;
    }
    if (pos[0] > Game.DIM_X) {
        pos[0] = 0;
    }
    if (pos[1] < 0) {
        pos[1] = Game.DIM_Y;
    }
    if (pos[1] > Game.DIM_Y) {
        pos[1] = 0;
    }
    return pos;
}

Game.prototype.checkCollisions = function () {
    let allObjects = this.allObjects();
    let size = allObjects.length;
    for (let i = 0; i < size - 1; i++) {
        for (let j = i + 1; j < size; j++) {
            allObjects[i].collideWith(allObjects[j]);
        }
    }
}

Game.prototype.step = function () {
    this.checkCollisions();
    this.moveObjects();
}

Game.prototype.remove = function (obj) {
    if (obj instanceof Asteroid) {
        let idx = this.asteroids.indexOf(obj);
        this.asteroids.splice(idx, 1);
    }
    if (obj instanceof Bullet) {
        let idx = this.bullets.indexOf(obj);
        this.bullets.splice(idx, 1);
    }
}

Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.ship).concat(this.bullets);
}

Game.prototype.add = function (obj) {
    if (obj instanceof Asteroid) {
        this.asteroids.push(obj);
    }
    if (obj instanceof Bullet) {
        this.bullets.push(obj);
    }
}

Game.prototype.isOutOfBounds = function (pos) {
    return pos[0] < 0 || pos[0] > Game.DIM_X || pos[1] < 0 || pos[1] > Game.DIM_Y;
}

// const g = new Game();
// console.log(g.asteroids);
// g.remove(g.asteroids[0]);
// console.log(g.asteroids);

module.exports = Game;
