import Brick from "./Brick.js";

export default class ThreeHitBrick extends Brick {
    constructor(x, y) {
        super(x, y, "silver", 3);
    }
}