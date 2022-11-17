import Brick from "../bricks/Brick.js";
import UnbreakableBrick from "../bricks/UnbreakableBrick.js";
import ThreeHitBrick from "../bricks/ThreeHitBrick.js";

export function get() {
    let bricks = [];

    bricks.push(new UnbreakableBrick(0, 1));
    for (let i = 0; i <= 15; i++) {
        bricks.push(new UnbreakableBrick(i + 2, 1));
    }
    for (let i = 0; i < 11; i++) {
        bricks.push(new UnbreakableBrick(17, i + 2));
    }
    bricks.push(new Brick(5, 7, "blue"));

    bricks.push(new Brick(6, 6, "blue"));
    bricks.push(new Brick(6, 7, "cyan"));
    bricks.push(new Brick(6, 8, "blue"));

    bricks.push(new Brick(7, 5, "blue"));
    bricks.push(new Brick(7, 6, "cyan"));
    bricks.push(new Brick(7, 7, "white"));
    bricks.push(new Brick(7, 8, "cyan"));
    bricks.push(new Brick(7, 9, "blue"));

    bricks.push(new Brick(8, 4, "blue"));
    bricks.push(new Brick(8, 5, "cyan"));
    bricks.push(new Brick(8, 6, "white"));
    bricks.push(new Brick(8, 7, "cyan"));
    bricks.push(new Brick(8, 8, "white"));
    bricks.push(new Brick(8, 9, "cyan"));
    bricks.push(new Brick(8, 10, "blue"));

    bricks.push(new Brick(9, 3, "blue"));
    bricks.push(new Brick(9, 4, "cyan"));
    bricks.push(new Brick(9, 5, "white"));
    bricks.push(new Brick(9, 6, "cyan"));
    bricks.push(new ThreeHitBrick(9, 7));
    bricks.push(new Brick(9, 8, "cyan"));
    bricks.push(new Brick(9, 9, "white"));
    bricks.push(new Brick(9, 10, "cyan"));
    bricks.push(new Brick(9, 11, "blue"));

    bricks.push(new Brick(10, 4, "blue"));
    bricks.push(new Brick(10, 5, "cyan"));
    bricks.push(new Brick(10, 6, "white"));
    bricks.push(new Brick(10, 7, "cyan"));
    bricks.push(new Brick(10, 8, "white"));
    bricks.push(new Brick(10, 9, "cyan"));
    bricks.push(new Brick(10, 10, "blue"));

    bricks.push(new Brick(11, 5, "blue"));
    bricks.push(new Brick(11, 6, "cyan"));
    bricks.push(new Brick(11, 7, "white"));
    bricks.push(new Brick(11, 8, "cyan"));
    bricks.push(new Brick(11, 9, "blue"));

    bricks.push(new Brick(12, 6, "blue"));
    bricks.push(new Brick(12, 7, "cyan"));
    bricks.push(new Brick(12, 8, "blue"));

    bricks.push(new Brick(13, 7, "blue"));

    return bricks;
}
