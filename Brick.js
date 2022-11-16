import {Cell} from "./Cell.js";
import * as Global from "./Global.js";

class Brick {
    constructor(x, y, color = "blue", n = 1) {
        let cells = [];
        for (let i = 0; i < Global.BRICK_HEIGHT; i++) {
            let row = [];
            for (let j = 0; j < Global.BRICK_WIDTH; j++) {
                row.push(new Cell(i + x * Global.BRICK_HEIGHT, j + y * Global.BRICK_WIDTH));
            }
            cells.push(row);
        }
        this.cells = cells;
        this.n = n;
        this.color = color;
    }
    getCells() {
        return this.cells;
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

export {Brick};