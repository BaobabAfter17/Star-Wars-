const MovingObject = require("./moving_object");
const Util = require("./util");


function Bullet(pos, vel, game) {
    Bullet.COLOR = "FFFFFF";
    Bullet.RADIUS = 5;
    MovingObject.call(this, {
        pos: pos,
        vel: vel,
        radius: Bullet.RADIUS,
        color: Bullet.COLOR,
        game: game
    })
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;

module.exports = Bullet;