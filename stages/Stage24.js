import Brick from "../Brick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    for (let j = 0; j < Global.NUM_COLS; j++) {
        bricks.push(new Brick(16, j, "blue"));
    }
    for (let j = 1; j < Global.NUM_COLS - 1; j++) {
        bricks.push(new Brick(15, j, "blue"));
    }
    for (let j = 2; j < Global.NUM_COLS - 2; j++) {
        bricks.push(new Brick(13, j, "blue"));
        bricks.push(new Brick(14, j, "blue"));
    }
    for (let j = 3; j < Global.NUM_COLS - 3; j++) {
        bricks.push(new Brick(12, j, "blue"));
    }
    bricks.push(new Brick(11, 3, "white"));
    bricks.push(new Brick(11, 4, "blue"));
    bricks.push(new Brick(11, 5, "blue"));
    bricks.push(new Brick(11, 6, "white"));
    bricks.push(new Brick(11, 7, "blue"));
    bricks.push(new Brick(11, 8, "blue"));
    bricks.push(new Brick(11, 9, "white"));

    bricks.push(new Brick(10, 4, "white"));
    bricks.push(new Brick(10, 5, "blue"));
    bricks.push(new Brick(10, 6, "white"));
    bricks.push(new Brick(10, 7, "blue"));
    bricks.push(new Brick(10, 8, "white"));
    for (let j = 0; j < 5; j++) {
        bricks.push(new Brick(9, j + 4, "white"));
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            bricks.push(new Brick(i + 6, j + 5, "white"));
        }
    }

    return bricks;
}
