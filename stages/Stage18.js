import Brick from "../Brick.js";
import ThreeHitBrick from "../ThreeHitBrick.js";
import UnbreakableBrick from "../UnbreakableBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    for (let i = 0; i < 10; i++) {
        bricks.push(new Brick(i + 4, 0, "orange"));
        bricks.push(new UnbreakableBrick(i + 4, 2));
        bricks.push(new UnbreakableBrick(i + 4, 10));
        bricks.push(new Brick(i + 4, Global.NUM_COLS - 1, "orange"));
    }
    bricks.push(new UnbreakableBrick(13, 1));
    bricks.push(new UnbreakableBrick(13, 3));
    bricks.push(new UnbreakableBrick(13, 9));
    bricks.push(new UnbreakableBrick(13, 11));
    for (let i = 0; i < 7; i++) {
        bricks.push(new Brick(i + 7, 4, "fuchsia"));
        bricks.push(new Brick(i + 7, 8, "cyan"));
    }
    for (let i = 0; i < 5; i++) {
        bricks.push(new Brick(i + 9, 6, "lime"));
    }
    bricks.push(new UnbreakableBrick(5, 3));
    bricks.push(new UnbreakableBrick(5, 9));
    bricks.push(new UnbreakableBrick(6, 4));
    bricks.push(new UnbreakableBrick(6, 8));
    bricks.push(new UnbreakableBrick(7, 5));
    bricks.push(new UnbreakableBrick(7, 7));
    bricks.push(new ThreeHitBrick(8, 6));
    for (let i = 0; i < 7; i++) {
        bricks.push(new Brick(4, i + 3, "yellow"));
    }
    for (let i = 0; i < 5; i++) {
        bricks.push(new Brick(5, i + 4, "yellow"));
    }
    for (let i = 0; i < 3; i++) {
        bricks.push(new Brick(6, i + 5, "yellow"));
    }
    bricks.push(new Brick(7, 6, "yellow"));

    return bricks;
}
