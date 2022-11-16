import {Brick} from "../Brick.js";
import {UnbreakableBrick} from "../UnbreakableBrick.js";
import {ThreeHitBrick} from "../ThreeHitBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 7 && i !== 2; j++) {
            bricks.push(new UnbreakableBrick(i + 4, j * 2));
        }
    }
    bricks.push(new Brick(4, 1, "white"));
    bricks.push(new Brick(4, 3, "orange"));
    bricks.push(new Brick(4, 5, "cyan"));
    bricks.push(new Brick(4, 7, "lime"));
    bricks.push(new Brick(4, 9, "red"));
    bricks.push(new Brick(4, 11, "blue"));
    bricks.push(new Brick(5, 1, "fuchsia"));
    bricks.push(new ThreeHitBrick(5, 3));
    bricks.push(new ThreeHitBrick(5, 5));
    bricks.push(new ThreeHitBrick(5, 7));
    bricks.push(new ThreeHitBrick(5, 9));
    bricks.push(new Brick(5, 11, "yellow"));
    for (let j = 0; j < 6; j++) {
        bricks.push(new Brick(j + 7, j * 2 + 1, "fuchsia"));
    }
    bricks.push(new Brick(13, 9, "fuchsia"));
    bricks.push(new Brick(14, 7, "fuchsia"));
    bricks.push(new Brick(15, 5, "fuchsia"));
    bricks.push(new Brick(16, 3, "fuchsia"));
    bricks.push(new Brick(17, 1, "fuchsia"));
    for (let j = 0; j < 3; j++) {
        bricks.push(new UnbreakableBrick(j + 13, 2));
        bricks.push(new UnbreakableBrick(j + 13, 10));
    }
    for (let j = 0; j < 4; j++) {
        bricks.push(new UnbreakableBrick(j + 13, 4));
        bricks.push(new UnbreakableBrick(j + 13, 8));
    }
    for (let j = 0; j < 5; j++) {
        bricks.push(new UnbreakableBrick(j + 13, 6));
    }

    return bricks;
}
