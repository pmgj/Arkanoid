import Brick from "../Brick.js";
import UnbreakableBrick from "../UnbreakableBrick.js";
import ThreeHitBrick from "../ThreeHitBrick.js";

export function get() {
    let bricks = [];

    for (let c = 0; c < 10; c++) {
        bricks.push(new UnbreakableBrick(c + 4, 2));
    }
    for (let c = 0; c < 8; c++) {
        bricks.push(new UnbreakableBrick(c + 4, 4));
    }
    for (let c = 0; c < 6; c++) {
        bricks.push(new UnbreakableBrick(c + 4, 6));
    }
    for (let c = 0; c < 4; c++) {
        bricks.push(new UnbreakableBrick(c + 4, 8));
    }
    for (let c = 0; c < 2; c++) {
        bricks.push(new UnbreakableBrick(c + 4, 10));
    }
    for (let c = 0; c < 9; c++) {
        bricks.push(new Brick(14, c + 2, "yellow"));
        bricks.push(new ThreeHitBrick(15, c + 2));
    }
    let colors = ["lime", "red", "blue", "fuchsia"];
    for (let i = 0; i < colors.length; i++) {
        for (let k = 0; k < (i + 1) * 2; k++) {
            bricks.push(new Brick(6 + i * 2, 10 - k, colors[i]));
        }
    }
    bricks.push(new UnbreakableBrick(13, 4));
    bricks.push(new UnbreakableBrick(13, 6));
    bricks.push(new UnbreakableBrick(13, 8));
    bricks.push(new UnbreakableBrick(13, 10));
    bricks.push(new UnbreakableBrick(11, 6));
    bricks.push(new UnbreakableBrick(11, 8));
    bricks.push(new UnbreakableBrick(11, 10));
    bricks.push(new UnbreakableBrick(9, 8));
    bricks.push(new UnbreakableBrick(9, 10));
    bricks.push(new UnbreakableBrick(7, 10));
    return bricks;
}
