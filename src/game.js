import Brick from "./brick.js";

export default class Game {
    constructor() {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }
    start() {
        this.gameObject = [this.Brick];
    }

    update(deltaTime) {
        this.gameObject.forEach(object => object.update(deltaTime));
    }

    draw(ctx) {
        this.gameObject.forEach(object => object.draw(ctx));
    }
}