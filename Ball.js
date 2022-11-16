import {Cell} from "./Cell.js";
import * as Global from "./Global.js";

class Ball {
    constructor(x, y, size = Global.BALL_SIZE, dx = Global.BALL_SPEED, dy = -Global.BALL_SPEED) {
        this.cells = [];
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
                row.push(new Cell(x + i, y + j));
            }
            this.cells.push(row);
        }
        this.dx = dx;
        this.dy = dy;
        this.size = size;
    }
    getX() {
        return this.dx;
    }
    getY() {
        return this.dy;
    }
    getSize() {
        return this.size;
    }
    getCells() {
        return this.cells;
    }
    changeXDirection() {
        this.dx = -this.dx;
    }
    changeYDirection() {
        this.dy = -this.dy;
    }
    updatePosition() {
        this.cells.flat().forEach(c => {
            let {x, y} = c;
            x += this.dy;
            y += this.dx;
            c.setX(x);
            c.setY(y);
        });
    }
}

export {Ball};