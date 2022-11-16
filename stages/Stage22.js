import {Brick} from "../Brick.js";
import {UnbreakableBrick} from "../UnbreakableBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < Global.NUM_COLS; j++) {
            bricks.push(new Brick(i + 4, j, "yellow"));
            bricks.push(new Brick(i + 12, j, "white"));
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 2; j++) {
            bricks.push(new Brick(i + 7, j, "red"));
            bricks.push(new Brick(i + 7, j + 11, "red"));
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            bricks.push(new Brick(i + 7, j + 5, "red"));
        }
    }
    for (let j = 0; j < 4; j++) {
        bricks.push(new UnbreakableBrick(j + 7, 2));
        bricks.push(new UnbreakableBrick(j + 7, 4));
        bricks.push(new UnbreakableBrick(j + 7, 8));
        bricks.push(new UnbreakableBrick(j + 7, 10));
    }

    return bricks;
}
