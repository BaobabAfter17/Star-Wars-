const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");
const Bullet = require("./bullet");

function Asteroid(pos, game) {
    Asteroid.COLOR = "#00FF00",
    Asteroid.RADIUS = 20,
    MovingObject.call(this, {
        pos: pos,
        vel: Util.randomVec(4),
        radius: Asteroid.RADIUS,
        color: Asteroid.COLOR,
        game: game
    })
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function (otherObject) {
    if (this.isCollidedWith(otherObject)) {
        if (otherObject instanceof Ship) {
            otherObject.relocate();
        }
        if (otherObject instanceof Bullet){
            this.game.remove(this);
            this.game.remove(otherObject);
        }
    }
}




module.exports = Asteroid;