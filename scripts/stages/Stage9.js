import Brick from "../bricks/Brick.js";
import UnbreakableBrick from "../bricks/UnbreakableBrick.js";

export function get() {
    let bricks = [];
    bricks.push(new UnbreakableBrick(2, 1));
    bricks.push(new UnbreakableBrick(3, 1));
    bricks.push(new UnbreakableBrick(4, 1));
    bricks.push(new UnbreakableBrick(5, 1));
    bricks.push(new Brick(3, 2, "lime"));
    bricks.push(new Brick(4, 2, "cyan"));
    bricks.push(new UnbreakableBrick(5, 2));
    bricks.push(new UnbreakableBrick(2, 3));
    bricks.push(new UnbreakableBrick(3, 3));
    bricks.push(new UnbreakableBrick(4, 3));
    bricks.push(new UnbreakableBrick(5, 3));

    bricks.push(new UnbreakableBrick(2, 9));
    bricks.push(new UnbreakableBrick(3, 9));
    bricks.push(new UnbreakableBrick(4, 9));
    bricks.push(new UnbreakableBrick(5, 9));
    bricks.push(new Brick(3, 10, "lime"));
    bricks.push(new Brick(4, 10, "cyan"));
    bricks.push(new UnbreakableBrick(5, 10));
    bricks.push(new UnbreakableBrick(2, 11));
    bricks.push(new UnbreakableBrick(3, 11));
    bricks.push(new UnbreakableBrick(4, 11));
    bricks.push(new UnbreakableBrick(5, 11));

    for (let i = 0; i < 6; i++) {
        bricks.push(new Brick(i + 7, 4, "fuchsia"));
        bricks.push(new Brick(i + 7, 8, "yellow"));
    }
    for (let i = 0; i < 3; i++) {
        bricks.push(new Brick(7, i + 5, "white"));
        bricks.push(new Brick(8, i + 5, "orange"));
        bricks.push(new Brick(9, i + 5, "cyan"));
        bricks.push(new Brick(10, i + 5, "lime"));
        bricks.push(new Brick(11, i + 5, "red"));
        bricks.push(new Brick(12, i + 5, "blue"));
    }

    return bricks;
}
