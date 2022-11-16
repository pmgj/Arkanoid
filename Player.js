import Direction from "./Direction.js";
import * as Global from "./Global.js";

export default class Player {
    constructor(x, y, width, height, lives, speed = Global.PLAYER_SPEED) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.lives = lives;
        this.speed = speed;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getLives() {
        return this.lives;
    }
    removeLive() {
        this.lives--;
    }
    updatePosition(direction) {
        if (direction === Direction.LEFT && this.x > 0) {
            this.x = this.x > this.speed ? this.x - this.speed : 0;
        }
        if (direction === Direction.RIGHT && this.x + this.width < Global.COLS) {
            this.x = (this.x + this.speed < Global.COLS) ? this.x + this.speed : Global.COLS;
        }
    }
}