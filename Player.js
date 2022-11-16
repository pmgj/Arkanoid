import {Cell} from "./Cell.js";
import {Direction} from "./Direction.js";
import * as Global from "./Global.js";

class Player {
    constructor(x, y, width, height, lives, speed = Global.PLAYER_SPEED) {
        this.row = x;
        this.col = y;
        this.width = width;
        this.height = height;
        this.lives = lives;
        this.speed = speed;
        this.cells = [];
        for (let i = 0; i < height; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                row.push(new Cell(x + i, y + j));
            }
            this.cells.push(row);
    }
    }
    getCells() {
        return this.cells;
    }
    getRow() {
        return this.row;
    }
    getCol() {
        return this.col;
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
        let diff = this.cells[0][0].getY();
        if (direction === Direction.LEFT && diff > 0) {
            this.cells.flat().forEach(c => c.setY((diff > this.speed) ? c.getY() - this.speed : c.getY() - diff));
        }
        diff = this.cells[0][this.width - 1].getY();
        if (direction === Direction.RIGHT && diff < Global.COLS - 1) {
            this.cells.flat().forEach(c => c.setY((diff + this.speed < Global.COLS - 1) ? c.getY() + this.speed : c.getY() + Global.COLS - 1 - diff));
        }
    }
}

export {Player};