/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction Asteroid(pos, game) {\n    Asteroid.COLOR = \"#00FF00\",\n    Asteroid.RADIUS = 20,\n    MovingObject.call(this, {\n        pos: pos,\n        vel: Util.randomVec(4),\n        radius: Asteroid.RADIUS,\n        color: Asteroid.COLOR,\n        game: game\n    })\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function (otherObject) {\n    if (this.isCollidedWith(otherObject)) {\n        if (otherObject instanceof Ship) {\n            otherObject.relocate();\n            this.game.deathCount += 1;\n        }\n        if (otherObject instanceof Bullet){\n            this.game.remove(this);\n            this.game.remove(otherObject);\n            this.game.score += 10;\n        }\n    }\n}\n\n\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nfunction Bullet(pos, vel, game) {\n    Bullet.COLOR = \"FFFFFF\";\n    Bullet.RADIUS = 5;\n    MovingObject.call(this, {\n        pos: pos,\n        vel: vel,\n        radius: Bullet.RADIUS,\n        color: Bullet.COLOR,\n        game: game\n    })\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nfunction Game() {\n    Game.DIM_X = 700;\n    Game.DIM_Y = 500;\n    Game.NUM_ASTEROIDS = 10;\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = new Ship(this.randomPosition(), this);\n    this.bullets = [];\n    this.score = 0;\n    this.deathCount = 0;\n}\n\nGame.prototype.addAsteroids = function () {\n    let pos, astroid;\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n        pos = this.randomPosition();\n        astroid = new Asteroid(pos, this);\n        this.asteroids.push(astroid);\n    }\n}\n\nGame.prototype.randomPosition = function () {\n    let x = Math.random() * Game.DIM_X;\n    let y = Math.random() * Game.DIM_Y;\n    return [x, y];\n}\n\nGame.prototype.draw = function (ctx, img) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.drawImage(img, 0, 0);\n    this.allObjects().forEach(obj => obj.draw(ctx));\n    document.getElementById(\"score\").innerHTML = this.score;\n    document.getElementById(\"death\").innerHTML = this.deathCount;\n}\n\nGame.prototype.moveObjects = function (timeDelta) {\n    this.allObjects().forEach(obj => obj.move(timeDelta) );\n}\n\nGame.prototype.wrap = function (pos) {\n    if (pos[0] < 0) {\n        pos[0] = Game.DIM_X;\n    }\n    if (pos[0] > Game.DIM_X) {\n        pos[0] = 0;\n    }\n    if (pos[1] < 0) {\n        pos[1] = Game.DIM_Y;\n    }\n    if (pos[1] > Game.DIM_Y) {\n        pos[1] = 0;\n    }\n    return pos;\n}\n\nGame.prototype.checkCollisions = function () {\n    let allObjects = this.allObjects();\n    let size = allObjects.length;\n    for (let i = 0; i < size - 1; i++) {\n        for (let j = i + 1; j < size; j++) {\n            allObjects[i].collideWith(allObjects[j]);\n        }\n    }\n}\n\nGame.prototype.step = function () {\n    this.checkCollisions();\n    this.moveObjects();\n}\n\nGame.prototype.remove = function (obj) {\n    if (obj instanceof Asteroid) {\n        let idx = this.asteroids.indexOf(obj);\n        this.asteroids.splice(idx, 1);\n    }\n    if (obj instanceof Bullet) {\n        let idx = this.bullets.indexOf(obj);\n        this.bullets.splice(idx, 1);\n    }\n}\n\nGame.prototype.allObjects = function() {\n    return this.asteroids.concat(this.ship).concat(this.bullets);\n}\n\nGame.prototype.add = function (obj) {\n    if (obj instanceof Asteroid) {\n        this.asteroids.push(obj);\n    }\n    if (obj instanceof Bullet) {\n        this.bullets.push(obj);\n    }\n}\n\nGame.prototype.isOutOfBounds = function (pos) {\n    return pos[0] < 0 || pos[0] > Game.DIM_X || pos[1] < 0 || pos[1] > Game.DIM_Y;\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n    this.game = new Game();\n    this.ctx = ctx;\n    this.tooSoon = false;\n\n    const img = new Image();\n    img.onload = function () {\n        ctx.drawImage(img, 0, 0);\n    };\n    img.src = \"./myImage.png\";\n    this.img = img;\n\n    this.lastTime = 0;\n}\n\nGameView.prototype.start = function () {\n    requestAnimationFrame( () => { this.animate() });\n}\n\nGameView.prototype.bindKeyHandlers = function () {\n    let detalVel = 3;\n    if (key.isPressed(\"up\")) {\n        this.game.ship.power([0, -detalVel]);\n    }\n    if (key.isPressed(\"down\")) {\n        this.game.ship.power([0, detalVel]);\n    }\n    if (key.isPressed(\"left\")) {\n        this.game.ship.power([-detalVel, 0]);\n    }\n    if (key.isPressed(\"right\")) {\n        this.game.ship.power([detalVel, 0]);\n    }\n    if (key.isPressed(\"space\")) {\n        if (!this.tooSoon) {\n            this.game.ship.fireBullet();\n            this.tooSoon = true;\n            setTimeout( () => this.tooSoon = false, 500);\n        }\n    }\n\n}\n\nGameView.prototype.animate = function (currentTime) {\n    let deltaTime = currentTime - this.lastTime;\n    this.game.moveObjects(deltaTime);\n    this.game.checkCollisions();\n    this.bindKeyHandlers();\n    this.game.draw(this.ctx, this.img);\n    this.lastTime = currentTime;\n    requestAnimationFrame(() => { this.animate() });\n}\n\nmodule.exports = GameView;\n\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.GameView = GameView;\n\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext(\"2d\");\n    const gameView = new GameView(ctx);\n    gameView.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// moving_object.js\nfunction MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function (timeDelta) {\n    timeDelta = timeDelta || 1;\n    this.pos[0] += this.vel[0] * timeDelta;\n    this.pos[1] += this.vel[1] * timeDelta;\n    if (this.isWrappable) {\n        this.pos = this.game.wrap(this.pos);\n    } else {\n        if (this.game.isOutOfBounds(this.pos)) {\n            this.game.remove(this);\n        }\n    }\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    let distance = Math.sqrt(\n        (this.pos[0] - otherObject.pos[0]) ** 2 + \n        (this.pos[1] - otherObject.pos[1]) ** 2\n    );\n    return distance < (this.radius + otherObject.radius);\n}\n\nMovingObject.prototype.collideWith = function (otherObject) {\n    // if (this.isCollidedWith(otherObject)) {\n    //     this.game.remove(this);\n    //     this.game.remove(otherObject);\n    // }\n}\n\nMovingObject.prototype.isWrappable = true;\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Ship(pos, game) {\n    Ship.COLOR = \"#FF0000\",\n    Ship.RADIUS = 20,\n    MovingObject.call(this, {\n        pos: pos,\n        vel: Util.randomVec(0),\n        radius: Ship.RADIUS,\n        color: Ship.COLOR,\n        game: game\n    })\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function () {\n    this.pos = this.game.randomPosition();\n    this.vel = Util.randomVec(0);\n}\n\nShip.prototype.power = function (impulse) {\n    this.vel[0] = impulse[0];\n    this.vel[1] = impulse[1];\n}\n\nShip.prototype.fireBullet = function () {\n    let bulletVel = [(this.vel[0]) * 4, (this.vel[1]) * 4];\n    let bullet = new Bullet(this.pos.slice(), bulletVel, this.game);\n    this.game.add(bullet);\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits: function inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec: function randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale: function scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });