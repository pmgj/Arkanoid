import {Brick} from "../Brick.js";
import {UnbreakableBrick} from "../UnbreakableBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    for (let i = 0; i < 9; i++) {
        bricks.push(new UnbreakableBrick(4, i + 2));
        bricks.push(new UnbreakableBrick(12, i + 2));
    }
    for (let i = 0; i < 7; i++) {
        bricks.push(new Brick(i + 5, 2, "lime"));
        bricks.push(new Brick(i + 5, 3, "red"));
        bricks.push(new Brick(i + 5, 4, "blue"));
        bricks.push(new Brick(i + 5, 5, "fuchsia"));
        bricks.push(new Brick(i + 5, 7, "fuchsia"));
        bricks.push(new Brick(i + 5, 8, "blue"));
        bricks.push(new Brick(i + 5, 9, "red"));
        bricks.push(new Brick(i + 5, 10, "lime"));
    }
    for (let i = 0; i < 7; i++) {
        bricks.push(i === 3 ? new Brick(i + 5, 6, "yellow") : new UnbreakableBrick(i + 5, 6));
    }

    return bricks;
}
