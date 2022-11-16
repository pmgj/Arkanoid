import Brick from "./Brick.js";

export default class TwoHitBrick extends Brick {
    constructor(x, y) {
        super(x, y, "silver", 2);
    }
}