const Util = require("./util");
const Bullet = require("./bullet")
const MovingObject = require("./moving_object");

function Ship(pos, game) {
    Ship.COLOR = "#FF0000",
    Ship.RADIUS = 20,
    MovingObject.call(this, {
        pos: pos,
        vel: Util.randomVec(0),
        radius: Ship.RADIUS,
        color: Ship.COLOR,
        game: game
    })
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = Util.randomVec(0);
}

Ship.prototype.power = function (impulse) {
    this.vel[0] = impulse[0];
    this.vel[1] = impulse[1];
}

Ship.prototype.fireBullet = function () {
    let bulletVel = [(this.vel[0]) * 10, (this.vel[1]) * 10];
    let bullet = new Bullet(this.pos.slice(), bulletVel, this.game);
    this.game.add(bullet);
}

module.exports = Ship;