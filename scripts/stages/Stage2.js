import Brick from "../bricks/Brick.js";
import TwoHitBrick from "../bricks/TwoHitBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];
    let colors = ["white", "orange", "cyan", "lime", "red", "blue", "fuchsia", "yellow"];
    for (let i = 0; i < Global.NUM_COLS; i++) {
        for (let j = 0; j <= i; j++) {
            let brick = i === Global.NUM_COLS - 1 && j !== Global.NUM_COLS - 1 ? new TwoHitBrick(i + 2, j) : new Brick(i + 2, j, colors[j % colors.length]);
            bricks.push(brick);
        }
    }
    return bricks;
}
