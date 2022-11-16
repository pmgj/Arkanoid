import {Cell} from "./Cell.js";
import {Brick} from "./Brick.js";

class ThreeHitBrick extends Brick {
    constructor(x, y) {
        super(x, y, "silver", 3);
    }
}

export {ThreeHitBrick};