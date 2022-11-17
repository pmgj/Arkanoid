import Brick from "../bricks/Brick.js";
import TwoHitBrick from "../bricks/TwoHitBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [], startLine = 5;
    let colors = ["orange", "cyan", "lime", "silver", "blue", "fuchsia", "yellow", "white"];
    for (let i = 0; i <= Global.NUM_COLS; i++) {
        for (let j = 0; j < 5; j++) {
            let color = colors[(i + j) % colors.length];
            let brick = color === "silver" ? new TwoHitBrick(i + startLine, j + 1) : new Brick(i + startLine, j + 1, color);
            bricks.push(brick);
            color = colors[(i + j + 6) % colors.length];
            brick = color === "silver" ? new TwoHitBrick(i + startLine, j + 7) : new Brick(i + startLine, j + 7, color);
            bricks.push(brick);
        }
    }
    return bricks;
}
