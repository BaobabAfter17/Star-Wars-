const Game = require("./game");

function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
    this.tooSoon = false;

    const img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
    };
    img.src = "./myImage.png";
    this.img = img;

    this.lastTime = 0;
    // this.gameOver = false;
}

GameView.prototype.start = function () {
    requestAnimationFrame( () => { this.animate() });
}

GameView.prototype.bindKeyHandlers = function () {
    let detalVel = 3;
    if (key.isPressed("up")) {
        this.game.ship.power([0, -detalVel]);
    }
    if (key.isPressed("down")) {
        this.game.ship.power([0, detalVel]);
    }
    if (key.isPressed("left")) {
        this.game.ship.power([-detalVel, 0]);
    }
    if (key.isPressed("right")) {
        this.game.ship.power([detalVel, 0]);
    }
    if (key.isPressed("space")) {
        if (!this.tooSoon) {
            this.game.ship.fireBullet();
            this.tooSoon = true;
            setTimeout( () => this.tooSoon = false, 500);
        }
    }

}

GameView.prototype.animate = function (currentTime) {
    if (!this.gameOver) {
        let deltaTime = currentTime - this.lastTime;
        this.game.moveObjects(deltaTime);
        this.game.checkCollisions();
        this.bindKeyHandlers();
        this.game.draw(this.ctx, this.img);
        this.lastTime = currentTime;
        // if (this.game.over()) {
        //     this.gameOver = true;
        // }
        requestAnimationFrame(() => { this.animate() });
    }
}

module.exports = GameView;

