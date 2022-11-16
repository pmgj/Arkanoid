import {Brick} from "../Brick.js";
import {UnbreakableBrick} from "../UnbreakableBrick.js";
import * as Global from "../Global.js";

export function get() {
    let bricks = [];

    for (let i = 0; i < 6; i++) {
        bricks.push(new UnbreakableBrick(i * 2 + 4, 6));
    }

    bricks.push(new Brick(5, 4, "white"));
    bricks.push(new Brick(5, 5, "white"));
    bricks.push(new Brick(5, 7, "white"));
    bricks.push(new Brick(5, 8, "white"));

    bricks.push(new Brick(6, 2, "white"));
    bricks.push(new Brick(6, 3, "white"));
    bricks.push(new Brick(6, 9, "white"));
    bricks.push(new Brick(6, 10, "white"));

    bricks.push(new Brick(7, 0, "white"));
    bricks.push(new Brick(7, 1, "white"));
    bricks.push(new Brick(7, 11, "white"));
    bricks.push(new Brick(7, 12, "white"));

    bricks.push(new Brick(7, 4, "orange"));
    bricks.push(new Brick(7, 5, "orange"));
    bricks.push(new Brick(7, 7, "orange"));
    bricks.push(new Brick(7, 8, "orange"));

    bricks.push(new Brick(8, 2, "orange"));
    bricks.push(new Brick(8, 3, "orange"));
    bricks.push(new Brick(8, 9, "orange"));
    bricks.push(new Brick(8, 10, "orange"));

    bricks.push(new Brick(9, 0, "orange"));
    bricks.push(new Brick(9, 1, "orange"));
    bricks.push(new Brick(9, 11, "orange"));
    bricks.push(new Brick(9, 12, "orange"));

    bricks.push(new Brick(9, 4, "yellow"));
    bricks.push(new Brick(9, 5, "yellow"));
    bricks.push(new Brick(9, 7, "yellow"));
    bricks.push(new Brick(9, 8, "yellow"));

    bricks.push(new Brick(10, 2, "yellow"));
    bricks.push(new Brick(10, 3, "yellow"));
    bricks.push(new Brick(10, 9, "yellow"));
    bricks.push(new Brick(10, 10, "yellow"));

    bricks.push(new Brick(11, 0, "yellow"));
    bricks.push(new Brick(11, 1, "yellow"));
    bricks.push(new Brick(11, 11, "yellow"));
    bricks.push(new Brick(11, 12, "yellow"));

    bricks.push(new Brick(11, 4, "lime"));
    bricks.push(new Brick(11, 5, "lime"));
    bricks.push(new Brick(11, 7, "lime"));
    bricks.push(new Brick(11, 8, "lime"));

    bricks.push(new Brick(12, 2, "lime"));
    bricks.push(new Brick(12, 3, "lime"));
    bricks.push(new Brick(12, 9, "lime"));
    bricks.push(new Brick(12, 10, "lime"));

    bricks.push(new Brick(13, 0, "lime"));
    bricks.push(new Brick(13, 1, "lime"));
    bricks.push(new Brick(13, 11, "lime"));
    bricks.push(new Brick(13, 12, "lime"));

    bricks.push(new Brick(13, 4, "red"));
    bricks.push(new Brick(13, 5, "red"));
    bricks.push(new Brick(13, 7, "red"));
    bricks.push(new Brick(13, 8, "red"));

    bricks.push(new Brick(14, 2, "red"));
    bricks.push(new Brick(14, 3, "red"));
    bricks.push(new Brick(14, 9, "red"));
    bricks.push(new Brick(14, 10, "red"));

    bricks.push(new Brick(15, 0, "red"));
    bricks.push(new Brick(15, 1, "red"));
    bricks.push(new Brick(15, 11, "red"));
    bricks.push(new Brick(15, 12, "red"));

    bricks.push(new Brick(15, 4, "blue"));
    bricks.push(new Brick(15, 5, "blue"));
    bricks.push(new Brick(15, 7, "blue"));
    bricks.push(new Brick(15, 8, "blue"));

    bricks.push(new Brick(16, 2, "blue"));
    bricks.push(new Brick(16, 3, "blue"));
    bricks.push(new Brick(16, 9, "blue"));
    bricks.push(new Brick(16, 10, "blue"));

    bricks.push(new Brick(17, 0, "blue"));
    bricks.push(new Brick(17, 1, "blue"));
    bricks.push(new Brick(17, 11, "blue"));
    bricks.push(new Brick(17, 12, "blue"));

    return bricks;
}
