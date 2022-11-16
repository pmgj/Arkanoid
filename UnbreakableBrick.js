import Brick from "./Brick.js";

export default class UnbreakableBrick extends Brick {
    constructor(x, y) {
        super(x, y, "olive", Number.MAX_VALUE);
    }
}