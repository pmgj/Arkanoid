import {Brick} from "../Brick.js";
import {UnbreakableBrick} from "../UnbreakableBrick.js";

export function get() {
    let bricks = [];
    bricks.push(new UnbreakableBrick(4, 3));
    bricks.push(new UnbreakableBrick(4, 5));
    bricks.push(new UnbreakableBrick(4, 7));
    bricks.push(new UnbreakableBrick(4, 9));

    bricks.push(new UnbreakableBrick(5, 1));
    bricks.push(new UnbreakableBrick(5, 11));

    bricks.push(new UnbreakableBrick(6, 1));
    bricks.push(new UnbreakableBrick(6, 2));
    bricks.push(new UnbreakableBrick(6, 4));
    bricks.push(new UnbreakableBrick(6, 8));
    bricks.push(new UnbreakableBrick(6, 10));
    bricks.push(new UnbreakableBrick(6, 11));

    bricks.push(new Brick(7, 6, "white"));

    bricks.push(new UnbreakableBrick(8, 1));
    bricks.push(new UnbreakableBrick(8, 5));
    bricks.push(new Brick(8, 6, "orange"));
    bricks.push(new UnbreakableBrick(8, 7));
    bricks.push(new UnbreakableBrick(8, 11));

    bricks.push(new UnbreakableBrick(9, 3));
    bricks.push(new Brick(9, 6, "cyan"));
    bricks.push(new UnbreakableBrick(9, 9));

    bricks.push(new Brick(10, 6, "lime"));

    bricks.push(new UnbreakableBrick(11, 3));
    bricks.push(new Brick(11, 6, "red"));
    bricks.push(new UnbreakableBrick(11, 9));

    bricks.push(new UnbreakableBrick(12, 1));
    bricks.push(new UnbreakableBrick(12, 5));
    bricks.push(new Brick(12, 6, "blue"));
    bricks.push(new UnbreakableBrick(12, 7));
    bricks.push(new UnbreakableBrick(12, 11));

    bricks.push(new Brick(13, 6, "fuchsia"));

    bricks.push(new UnbreakableBrick(14, 1));
    bricks.push(new UnbreakableBrick(14, 2));
    bricks.push(new UnbreakableBrick(14, 4));
    bricks.push(new UnbreakableBrick(14, 8));
    bricks.push(new UnbreakableBrick(14, 10));
    bricks.push(new UnbreakableBrick(14, 11));

    bricks.push(new UnbreakableBrick(15, 1));
    bricks.push(new UnbreakableBrick(15, 11));

    bricks.push(new UnbreakableBrick(16, 3));
    bricks.push(new UnbreakableBrick(16, 5));
    bricks.push(new UnbreakableBrick(16, 7));
    bricks.push(new UnbreakableBrick(16, 9));

    return bricks;
}
