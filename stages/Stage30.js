import {Brick} from "../Brick.js";
import {UnbreakableBrick} from "../UnbreakableBrick.js";
import {ThreeHitBrick} from "../ThreeHitBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    let colors = ["yellow", "blue", "lime", "orange", "yellow", "blue", "lime"];
    for (let c = 0; c < colors.length; c++) {
        for (let n = 0; n < 5; n++) {
            bricks.push(new Brick(c + 4 + n, c * 2, colors[c]));
        }
        bricks.push(new ThreeHitBrick(c + 9, c * 2));
    }
    colors = ["fuchsia", "red", "cyan", "white", "fuchsia", "red"];
    for (let c = 0; c < colors.length; c++) {
        for (let n = 0; n < 6; n++) {
            bricks.push(new Brick(c + 4 + n, c * 2 + 1, colors[c]));
        }
        bricks.push(new UnbreakableBrick(c + 10, c * 2 + 1));
    }
    return bricks;
}
