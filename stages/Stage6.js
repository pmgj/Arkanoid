import {Brick} from "../Brick.js";
import {UnbreakableBrick} from "../UnbreakableBrick.js";

export function get() {
    let bricks = [], startLine = 4;
    for (let i = startLine; i < startLine + 12; i++) {
        let brick = i === startLine + 10 ? new Brick(i, 0, "yellow") : new Brick(i, 0, "blue");
        bricks.push(brick);

        brick = (i === startLine + 5) ? new UnbreakableBrick(i, 2) : new Brick(i, 2, "red");
        bricks.push(brick);

        brick = (i === startLine + 5 || i === startLine + 10) ? new UnbreakableBrick(i, 4) : new Brick(i, 4, "lime");
        bricks.push(brick);

        brick = (i === startLine + 5) ? new UnbreakableBrick(i, 6) : new Brick(i, 6, "cyan");
        bricks.push(brick);

        brick = (i === startLine + 5 || i === startLine + 10) ? new UnbreakableBrick(i, 8) : new Brick(i, 8, "lime");
        bricks.push(brick);

        brick = (i === startLine + 5) ? new UnbreakableBrick(i, 10) : new Brick(i, 10, "red");
        bricks.push(brick);

        brick = i === startLine + 10 ? new Brick(i, 12, "yellow") : new Brick(i, 12, "blue");
        bricks.push(brick);
    }
    bricks.push(new Brick(9, 3, "yellow"));
    bricks.push(new Brick(9, 5, "yellow"));
    bricks.push(new Brick(9, 7, "yellow"));
    bricks.push(new Brick(9, 9, "yellow"));
    return bricks;
}
