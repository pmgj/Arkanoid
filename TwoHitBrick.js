import {Cell} from "./Cell.js";
import {Brick} from "./Brick.js";

class TwoHitBrick extends Brick {
    constructor(x, y) {
        super(x, y, "silver", 2);
    }
}

export {TwoHitBrick};