import * as Global from "../Global.js";

export default class Brick {
    constructor(y, x, color = "blue", n = 1) {
        this.y = y * Global.BRICK_HEIGHT;
        this.x = x * Global.BRICK_WIDTH;
        this.color = color;
        this.n = n;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getN() {
        return this.n;
    }
    getColor() {
        return this.color;
    }
    hit() {
        this.n--;
    }
}