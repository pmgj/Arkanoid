import Brick from "../bricks/Brick.js";
import UnbreakableBrick from "../bricks/UnbreakableBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [], numOfCols = Global.NUM_COLS, numOfOpenBricks = 3, startLine = 3;
    for (let i = 0; i < numOfCols; i++) {
        bricks.push(new Brick(startLine, i, "lime"));
        bricks.push(new Brick(startLine + 4, i, "red"));
        bricks.push(new Brick(startLine + 8, i, "fuchsia"));
        bricks.push(new Brick(startLine + 12, i, "cyan"));
    }
    for (let i = 0; i < numOfOpenBricks; i++) {
        bricks.push(new Brick(startLine + 2, i, "white"));
        bricks.push(new Brick(startLine + 10, i, "blue"));
    }
    for (let i = numOfOpenBricks; i < numOfCols; i++) {
        bricks.push(new UnbreakableBrick(startLine + 2, i));
        bricks.push(new UnbreakableBrick(startLine + 10, i));
    }
    for (let i = 0; i < numOfCols - numOfOpenBricks; i++) {
        bricks.push(new UnbreakableBrick(startLine + 6, i));
        bricks.push(new UnbreakableBrick(startLine + 14, i));
    }
    for (let i = numOfCols - numOfOpenBricks; i < numOfCols; i++) {
        bricks.push(new Brick(startLine + 6, i, "white"));
        bricks.push(new Brick(startLine + 14, i, "cyan"));
    }
    return bricks;
}
