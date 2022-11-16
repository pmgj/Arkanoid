import {Brick} from "../Brick.js";
import {TwoHitBrick} from "../TwoHitBrick.js";

export function get() {
    let bricks = [];
    bricks.push(new Brick(3, 2, "yellow"));
    bricks.push(new TwoHitBrick(3, 3));
    return bricks;
}
