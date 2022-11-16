import Brick from "../Brick.js";
import TwoHitBrick from "../TwoHitBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [], startLine = 2;
    bricks.push(new Brick(startLine, 3, "yellow"), new Brick(startLine + 1, 3, "yellow"));
    bricks.push(new Brick(startLine, 9, "yellow"), new Brick(startLine + 1, 9, "yellow"));
    bricks.push(new Brick(startLine + 2, 4, "yellow"), new Brick(startLine + 3, 4, "yellow"));
    bricks.push(new Brick(startLine + 2, 8, "yellow"), new Brick(startLine + 3, 8, "yellow"));
    for (let i = 6; i < 8; i++) {
        for (let j = 3; j < 10; j++) {
            bricks.push(new TwoHitBrick(i, j));
        }
    }
    for (let i = 8; i < 10; i++) {
        for (let j = 2; j < 11; j++) {
            let brick = (j === 4 || j === 8) ? new Brick(i, j, "red") : new TwoHitBrick(i, j);
            bricks.push(brick);
        }
    }
    for (let i = 10; i < 13; i++) {
        for (let j = 1; j < 12; j++) {
            bricks.push(new TwoHitBrick(i, j));
        }
    }
    for (let j = 1; j < 12; j++) {
        if (j !== 2 && j !== 10) {
            bricks.push(new TwoHitBrick(Global.NUM_COLS, j));
        }
    }
    for (let i = 14; i < 16; i++) {
        for (let j = 1; j < 12; j++) {
            if (j === 1 || j === 3 || j === 9 || j === 11) {
                bricks.push(new TwoHitBrick(i, j));
            }
        }
    }
    bricks.push(new TwoHitBrick(16, 4), new TwoHitBrick(16, 5));
    bricks.push(new TwoHitBrick(17, 4), new TwoHitBrick(17, 5));
    bricks.push(new TwoHitBrick(16, 7), new TwoHitBrick(16, 8));
    bricks.push(new TwoHitBrick(17, 7), new TwoHitBrick(17, 8));
    return bricks;
}
