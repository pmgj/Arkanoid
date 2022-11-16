import Brick from "../Brick.js";
import ThreeHitBrick from "../ThreeHitBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    for (let j = 0; j < Global.NUM_COLS; j++) {
        bricks.push(new Brick(4, j, "cyan"));
    }
    let createSquare = (startRow, startCol) => {
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (i !== startRow + 1 || j !== startCol + 1) {
                    bricks.push(new ThreeHitBrick(i, j));
                }
            }
        }
    };
    createSquare(6, 2);
    createSquare(6, 6);
    createSquare(6, 10);
    bricks.push(new Brick(7, 3, "lime"));
    bricks.push(new Brick(7, 7, "lime"));
    bricks.push(new Brick(7, 11, "lime"));
    createSquare(10, 1);
    createSquare(10, 5);
    createSquare(10, 9);
    bricks.push(new Brick(11, 2, "red"));
    bricks.push(new Brick(11, 6, "red"));
    bricks.push(new Brick(11, 10, "red"));
    createSquare(14, 0);
    createSquare(14, 4);
    createSquare(14, 8);
    bricks.push(new Brick(15, 1, "blue"));
    bricks.push(new Brick(15, 5, "blue"));
    bricks.push(new Brick(15, 9, "blue"));

    return bricks;
}
