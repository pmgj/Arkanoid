import Brick from "../bricks/Brick.js";
import ThreeHitBrick from "../bricks/ThreeHitBrick.js";

export function get() {
    let bricks = [];

    let colors = ["lime", "red", "blue", "fuchsia", "yellow", "white", "orange", "cyan"], colorIndex = 0;
    for (let c = 0; c < 4; c++) {
        for (let n = 0; n < 7; n++) {
            bricks.push(new Brick(c * 4 + 4, n * 2, colors[colorIndex++ % colors.length]));
            bricks.push(new ThreeHitBrick(c * 4 + 5, n * 2));
        }
    }
    colorIndex = 2;
    for (let c = 0, colorIndex = 2; c < 3; c++, colorIndex++) {
        let ci = colorIndex;
        for (let n = 0; n < 6; n++) {
            bricks.push(new Brick(c * 4 + 6, n * 2 + 1, colors[ci]));
            ci = ci <= 0 ? colors.length - 1 : ci - 1;
            bricks.push(new ThreeHitBrick(c * 4 + 7, n * 2 + 1));
        }
    }
    return bricks;
}
