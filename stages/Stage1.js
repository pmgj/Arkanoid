import {Brick} from "../Brick.js";
import {TwoHitBrick} from "../TwoHitBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];
    let colors = ["silver", "red", "yellow", "blue", "fuchsia", "lime"];
    for (let c = 0; c < colors.length; c++) {
        for (let n = 0; n < Global.NUM_COLS; n++) {
            let brick = c === 0 ? new TwoHitBrick(c + 4, n) : new Brick(c + 4, n, colors[c]);
            bricks.push(brick);
        }
    }
    return bricks;
}
