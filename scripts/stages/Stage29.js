import Brick from "../bricks/Brick.js";
import UnbreakableBrick from "../bricks/UnbreakableBrick.js";
import ThreeHitBrick from "../bricks/ThreeHitBrick.js";

export function get() {
    let bricks = [];

    let colors = ["yellow", "fuchsia", null, "blue", "red", "lime", null, "cyan", "orange", "white"];
    for (let c = 0; c < colors.length; c++) {
        for (let n = 0; n < 5; n++) {
            if (colors[c]) {
                bricks.push(new Brick(c + 4, n, colors[c]));
                bricks.push(new Brick(c + 4, n + 8, colors[c]));
            }
        }
    }
    for (let n = 0; n < 10; n++) {
        bricks.push(new UnbreakableBrick(n + 4, 5));
        bricks.push(new UnbreakableBrick(n + 4, 7));
    }
    bricks.push(new UnbreakableBrick(6, 0));
    bricks.push(new UnbreakableBrick(6, 1));
    bricks.push(new Brick(6, 2, "white"));
    bricks.push(new UnbreakableBrick(6, 3));
    bricks.push(new UnbreakableBrick(6, 4));
    bricks.push(new UnbreakableBrick(6, 8));
    bricks.push(new UnbreakableBrick(6, 9));
    bricks.push(new Brick(6, 10, "white"));
    bricks.push(new UnbreakableBrick(6, 11));
    bricks.push(new UnbreakableBrick(6, 12));

    bricks.push(new ThreeHitBrick(10, 0));
    bricks.push(new ThreeHitBrick(10, 1));
    bricks.push(new Brick(10, 2, "white"));
    bricks.push(new ThreeHitBrick(10, 3));
    bricks.push(new ThreeHitBrick(10, 4));
    bricks.push(new ThreeHitBrick(10, 8));
    bricks.push(new ThreeHitBrick(10, 9));
    bricks.push(new Brick(10, 10, "white"));
    bricks.push(new ThreeHitBrick(10, 11));
    bricks.push(new ThreeHitBrick(10, 12));

    return bricks;
}
