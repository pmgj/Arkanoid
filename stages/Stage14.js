import {Brick} from "../Brick.js";
import {UnbreakableBrick} from "../UnbreakableBrick.js";
import {ThreeHitBrick} from "../ThreeHitBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    for (let i = 0; i < Global.NUM_COLS; i++) {
        bricks.push(new Brick(4, i, "blue"));
        bricks.push(new Brick(6, i, "blue"));
        bricks.push(new Brick(10, i, "white"));
        bricks.push(new Brick(14, i, "red"));
        bricks.push(new Brick(16, i, "red"));
    }
    for (let i = 1; i < Global.NUM_COLS - 1; i++) {
        bricks.push(new ThreeHitBrick(8, i));
        bricks.push(new ThreeHitBrick(12, i));
    }
    for (let i = 5; i < 18; i += 4) {
        bricks.push(new UnbreakableBrick(i, 0));
        bricks.push(new UnbreakableBrick(i, Global.NUM_COLS - 1));
    }
    bricks.push(new Brick(8, 0, "orange"));
    bricks.push(new Brick(8, Global.NUM_COLS - 1, "orange"));
    bricks.push(new Brick(12, 0, "cyan"));
    bricks.push(new Brick(12, Global.NUM_COLS - 1, "cyan"));
    return bricks;
}
