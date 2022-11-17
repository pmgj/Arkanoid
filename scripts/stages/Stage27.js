import Brick from "../bricks/Brick.js";
import ThreeHitBrick from "../bricks/ThreeHitBrick.js";
import * as Global from "../bricks/Global.js";

export function get() {
    let bricks = [];

    let colors = ["silver", "yellow", "silver", null, "silver", "red", "silver"];
    for (let c = 0; c < colors.length; c++) {
        for (let n = 0; n < Global.NUM_COLS; n++) {
            if (colors[c]) {
                let brick = colors[c] === "silver" ? new ThreeHitBrick(c + 11, n) : new Brick(c + 11, n, colors[c]);
                bricks.push(brick);
            }
        }
    }

    return bricks;
}
