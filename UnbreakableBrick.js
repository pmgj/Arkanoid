import {Cell} from "./Cell.js";
import {Brick} from "./Brick.js";

class UnbreakableBrick extends Brick {
    constructor(x, y) {
        super(x, y, "olive", Number.MAX_VALUE);
    }
}

export {UnbreakableBrick};