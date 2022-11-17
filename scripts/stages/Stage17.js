import Brick from "../bricks/Brick.js";
import ThreeHitBrick from "../bricks/ThreeHitBrick.js";
import UnbreakableBrick from "../bricks/UnbreakableBrick.js";

export function get() {
    let bricks = [];

    bricks.push(new ThreeHitBrick(4, 6));
    bricks.push(new ThreeHitBrick(5, 6));
    bricks.push(new ThreeHitBrick(11, 1));
    bricks.push(new ThreeHitBrick(11, 4));
    bricks.push(new ThreeHitBrick(11, 8));
    bricks.push(new ThreeHitBrick(11, 11));
    for (let i = 0; i < 4; i++) {
        bricks.push(new ThreeHitBrick(i + 11, 6));
    }
    for (let i = 0; i < 3; i++) {
        bricks.push(new Brick(5, i + 3, "blue"));
        bricks.push(new Brick(5, i + 7, "lime"));
        bricks.push(new Brick(6, i + 2, "blue"));
        bricks.push(new Brick(6, i + 5, "white"));
        bricks.push(new Brick(6, i + 8, "lime"));
        bricks.push(new Brick(8, i + 1, "blue"));
        bricks.push(new Brick(8, i + 9, "lime"));
        bricks.push(new Brick(9, i + 1, "blue"));
        bricks.push(new Brick(9, i + 9, "lime"));
        bricks.push(new Brick(10, i + 1, "blue"));
        bricks.push(new Brick(10, i + 9, "lime"));
    }
    for (let i = 0; i < 2; i++) {
        bricks.push(new Brick(7, i + 2, "blue"));
        bricks.push(new Brick(7, i + 9, "lime"));
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 5; j++) {
            bricks.push(new Brick(i + 7, j + 4, "white"));
        }
    }
    bricks.push(new UnbreakableBrick(15, 4));
    bricks.push(new UnbreakableBrick(15, 6));
    bricks.push(new UnbreakableBrick(16, 4));
    bricks.push(new UnbreakableBrick(16, 5));
    bricks.push(new UnbreakableBrick(16, 6));
    bricks.push(new UnbreakableBrick(17, 5));

    return bricks;
}
