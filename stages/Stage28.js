import Brick from "../Brick.js";
import UnbreakableBrick from "../UnbreakableBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    for (let n = 0; n < Global.NUM_COLS; n++) {
        bricks.push(new Brick(3, n, "blue"));
    }
    for (let n = 0; n < 5; n++) {
        bricks.push(new Brick(n + 4, 0, "blue"));
        bricks.push(new Brick(n + 4, 12, "blue"));
        bricks.push(new UnbreakableBrick(n + 4, 1));
        bricks.push(new UnbreakableBrick(n + 4, 11));
    }
    for (let n = 0; n < 3; n++) {
        bricks.push(new UnbreakableBrick(4, n + 2));
        bricks.push(new UnbreakableBrick(4, n + 8));
    }
    bricks.push(new Brick(4, 5, "fuchsia"));
    bricks.push(new UnbreakableBrick(4, 6));
    bricks.push(new Brick(4, 7, "fuchsia"));
    for (let c = 0; c < 3; c++) {
        for (let n = 0; n < 5; n++) {
            bricks.push(new Brick(c + n + 6, n + 2, "fuchsia"));
            bricks.push(new Brick(12 - c - n, n + 6, "fuchsia"));
        }
    }
    for (let n = 0; n < 4; n++) {
        bricks.push(new UnbreakableBrick(n + 9, n + 2));
        bricks.push(new UnbreakableBrick(12 - n, n + 7));
    }
    for (let n = 0; n < 5; n++) {
        bricks.push(new Brick(n + 9, n + 1, "blue"));
        bricks.push(new Brick(13 - n, n + 7, "blue"));
    }
    bricks.push(new Brick(14, 6, "blue"));
    bricks.push(new Brick(13, 6, "fuchsia"));

    return bricks;
}
