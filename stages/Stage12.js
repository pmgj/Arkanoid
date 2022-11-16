import {Brick} from "../Brick.js";
import {UnbreakableBrick} from "../UnbreakableBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    for (let i = 0; i < Global.NUM_COLS; i++) {
        bricks.push(new UnbreakableBrick(4, i));
    }
    for (let i = 0; i < Global.NUM_COLS - 1; i++) {
        bricks.push(new UnbreakableBrick(17, i + 1));
    }
    for (let i = 0; i < 11; i++) {
        bricks.push(new UnbreakableBrick(i + 6, 1));
    }
    for (let i = 0; i < 10; i++) {
        bricks.push(new UnbreakableBrick(i + 5, 4));
        bricks.push(new UnbreakableBrick(i + 5, 10));
    }
    for (let i = 0; i < 10; i++) {
        bricks.push(new UnbreakableBrick(i + 7, 7));
    }
    bricks.push(new Brick(6, 2, "white"));
    bricks.push(new Brick(10, 3, "orange"));
    bricks.push(new Brick(15, 2, "cyan"));
    bricks.push(new Brick(8, 5, "lime"));
    bricks.push(new Brick(13, 6, "red"));
    bricks.push(new Brick(10, 9, "blue"));
    bricks.push(new Brick(5, 11, "fuchsia"));
    bricks.push(new Brick(16, 12, "yellow"));
    return bricks;
}
