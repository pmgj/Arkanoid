import * as Global from "./Global.js";

export default class Ball {
    constructor(x, y, size = Global.BALL_SIZE, speedx = Global.BALL_SPEED, speedy = - Global.BALL_SPEED) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedx = speedx;
        this.speedy = speedy;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getSpeedX() {
        return this.speedx;
    }
    getSpeedY() {
        return this.speedy;
    }
    getSize() {
        return this.size;
    }
    changeXDirection() {
        this.speedx = -this.speedx;
    }
    changeYDirection() {
        this.speedy = -this.speedy;
    }
    updatePosition() {
        this.x += this.speedx;
        this.y += this.speedy;
    }
}