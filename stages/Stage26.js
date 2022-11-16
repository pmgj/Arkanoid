import Brick from "../Brick.js";
import UnbreakableBrick from "../UnbreakableBrick.js";
import ThreeHitBrick from "../ThreeHitBrick.js";

export function get() {
    let bricks = [];

    for (let n = 0; n < 4; n++) {
        bricks.push(new UnbreakableBrick(n + 6, 0));
        bricks.push(new UnbreakableBrick(n + 6, 8));
    }
    for (let n = 0; n < 5; n++) {
        bricks.push(new UnbreakableBrick(11, n + 2));
    }
    bricks.push(new UnbreakableBrick(4, 2));
    bricks.push(new UnbreakableBrick(4, 6));
    bricks.push(new UnbreakableBrick(5, 1));
    bricks.push(new UnbreakableBrick(5, 7));
    bricks.push(new UnbreakableBrick(10, 1));
    bricks.push(new UnbreakableBrick(10, 7));
    for (let n = 0; n < 3; n++) {
        bricks.push(new ThreeHitBrick(4, n + 3));
        bricks.push(new Brick(6, n + 3, "cyan"));
        bricks.push(new Brick(9, n + 3, "fuchsia"));
    }
    for (let n = 0; n < 5; n++) {
        bricks.push(new Brick(7, n + 2, "lime"));
        bricks.push(new Brick(8, n + 2, "blue"));
    }

    return bricks;
}