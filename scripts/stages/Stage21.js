import Brick from "../bricks/Brick.js";
import UnbreakableBrick from "../bricks/UnbreakableBrick.js";

export function get() {
    let bricks = [];

    for (let i = 0; i < 14; i++) {
        bricks.push(new UnbreakableBrick(i + 4, 1));
        bricks.push(new UnbreakableBrick(i + 4, 11));
    }
    for (let i = 0; i < 9; i++) {
        bricks.push(new Brick(4, i + 2, "orange"));
        bricks.push(new UnbreakableBrick(17, i + 2));
    }
    for (let i = 0; i < 9; i++) {
        bricks.push(new UnbreakableBrick(i + 6, 3));
        bricks.push(new UnbreakableBrick(i + 6, 9));
    }
    for (let i = 0; i < 5; i++) {
        bricks.push(new UnbreakableBrick(6, i + 4));
        bricks.push(new Brick(14, i + 4, "cyan"));
    }
    for (let i = 0; i < 3; i++) {
        bricks.push(new Brick(9, i + 5, "red"));
        bricks.push(new Brick(10, i + 5, "lime"));
        bricks.push(new Brick(11, i + 5, "blue"));
        bricks.push(new Brick(12, i + 5, "white"));
    }

    return bricks;
}
