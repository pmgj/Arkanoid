import Brick from "../bricks/Brick.js";
import UnbreakableBrick from "../bricks/UnbreakableBrick.js";
import ThreeHitBrick from "../bricks/ThreeHitBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    for (let i = 0; i < 4; i++) {
        bricks.push(new UnbreakableBrick(i + 6, i + 2));
        bricks.push(new UnbreakableBrick(9 - i, i + 7));
    }
    for (let i = 0; i < 7; i++) {
        bricks.push(new Brick(i + 6, 1, "white"));
        bricks.push(new Brick(i + 6, Global.NUM_COLS - 2, "white"));
    }
    for (let i = 0; i < 9; i++) {
        bricks.push(new Brick(i + 9, 6, "white"));
    }
    for (let i = 0; i < 12; i++) {
        bricks.push(new Brick(i + 6, 0, "cyan"));
        bricks.push(new Brick(i + 6, Global.NUM_COLS - 1, "cyan"));
    }
    for (let i = 0; i < 4; i++) {
        bricks.push(new Brick(i + 14, 1, "cyan"));
        bricks.push(new Brick(i + 14, Global.NUM_COLS - 2, "cyan"));
    }
    for (let i = 0; i < 3; i++) {
        bricks.push(new Brick(i + 15, 2, "cyan"));
        bricks.push(new Brick(i + 15, Global.NUM_COLS - 3, "cyan"));
    }
    for (let i = 0; i < 2; i++) {
        bricks.push(new Brick(i + 16, 3, "cyan"));
        bricks.push(new Brick(i + 16, Global.NUM_COLS - 4, "cyan"));
    }
    bricks.push(new Brick(17, 4, "cyan"));
    bricks.push(new Brick(17, 8, "cyan"));
    for (let i = 0; i < 5; i++) {
        bricks.push(new ThreeHitBrick(i + 13, i + 1));
        bricks.push(new ThreeHitBrick(17 - i, i + 7));
    }
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 4; j++) {
            bricks.push(new Brick(i + j + 7, j + 2, "yellow"));
            bricks.push(new Brick(10 + i - j, j + 7, "lime"));
        }
    }
    for (let i = 0; i < 7; i++) {
        bricks.push(new Brick(6, i + 3, "cyan"));
    }
    for (let i = 0; i < 5; i++) {
        bricks.push(new Brick(7, i + 4, "cyan"));
    }
    for (let i = 0; i < 3; i++) {
        bricks.push(new Brick(8, i + 5, "cyan"));
    }
    return bricks;
}
