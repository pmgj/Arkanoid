import {Brick} from "../Brick.js";
import {UnbreakableBrick} from "../UnbreakableBrick.js";
import {ThreeHitBrick} from "../ThreeHitBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    let colors = ["red", "lime", "blue"];
    for (let c = 0; c < colors.length; c++) {
        for (let n = 0; n < Global.NUM_COLS; n++) {
            bricks.push(new Brick(c + 4, n, colors[c]));
        }
    }
    for (let n = 0; n < 8; n++) {
        bricks.push(new UnbreakableBrick(n + 7, 0));
        bricks.push(new UnbreakableBrick(n + 7, Global.NUM_COLS - 1));
    }
    for (let n = 0; n < 3; n++) {
        bricks.push(new UnbreakableBrick(7, n + 1));
        bricks.push(new UnbreakableBrick(7, n + 9));
        bricks.push(new ThreeHitBrick(7, n + 5));
        bricks.push(new Brick(8, n + 1, "red"));
        bricks.push(new Brick(9, n + 1, "red"));
        bricks.push(new Brick(8, n + 9, "blue"));
        bricks.push(new Brick(9, n + 9, "blue"));
        bricks.push(new Brick(12, n + 5, "lime"));
        bricks.push(new Brick(13, n + 5, "lime"));
        bricks.push(new ThreeHitBrick(14, n + 1));
        bricks.push(new UnbreakableBrick(14, n + 5));
        bricks.push(new ThreeHitBrick(14, n + 9));
    }
    for (let n = 0; n < 3; n++) {
        bricks.push(new UnbreakableBrick(n + 7, 4));
        bricks.push(new UnbreakableBrick(n + 7, 8));
        bricks.push(new UnbreakableBrick(n + 12, 4));
        bricks.push(new UnbreakableBrick(n + 12, 8));
    }

    return bricks;
}
