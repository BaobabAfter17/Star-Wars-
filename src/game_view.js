const Game = require("./game");
const Util = require("./util");

function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
    this.tooSoon = false;
}

GameView.prototype.start = function () {
    setInterval(
        () => {
            this.bindKeyHandlers();
            this.game.step();
            this.game.draw(this.ctx);
        },
        20
    );
}

GameView.prototype.bindKeyHandlers = function () {
    let detalVel = 2;
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

module.exports = GameView;

