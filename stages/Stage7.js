import {Brick} from "../Brick.js";

export function get() {
    let bricks = [];
    bricks.push(new Brick(4, 5, "yellow"));
    bricks.push(new Brick(4, 6, "yellow"));
    bricks.push(new Brick(4, 7, "fuchsia"));

    bricks.push(new Brick(5, 4, "yellow"));
    bricks.push(new Brick(5, 5, "yellow"));
    bricks.push(new Brick(5, 6, "fuchsia"));
    bricks.push(new Brick(5, 7, "fuchsia"));
    bricks.push(new Brick(5, 8, "blue"));

    bricks.push(new Brick(6, 3, "yellow"));
    bricks.push(new Brick(6, 4, "yellow"));
    bricks.push(new Brick(6, 5, "fuchsia"));
    bricks.push(new Brick(6, 6, "fuchsia"));
    bricks.push(new Brick(6, 7, "blue"));
    bricks.push(new Brick(6, 8, "blue"));
    bricks.push(new Brick(6, 9, "red"));

    bricks.push(new Brick(7, 3, "yellow"));
    bricks.push(new Brick(7, 4, "fuchsia"));
    bricks.push(new Brick(7, 5, "fuchsia"));
    bricks.push(new Brick(7, 6, "blue"));
    bricks.push(new Brick(7, 7, "blue"));
    bricks.push(new Brick(7, 8, "red"));
    bricks.push(new Brick(7, 9, "red"));

    bricks.push(new Brick(8, 2, "yellow"));
    bricks.push(new Brick(8, 3, "fuchsia"));
    bricks.push(new Brick(8, 4, "fuchsia"));
    bricks.push(new Brick(8, 5, "blue"));
    bricks.push(new Brick(8, 6, "blue"));
    bricks.push(new Brick(8, 7, "red"));
    bricks.push(new Brick(8, 8, "red"));
    bricks.push(new Brick(8, 9, "lime"));
    bricks.push(new Brick(8, 10, "lime"));

    bricks.push(new Brick(9, 2, "fuchsia"));
    bricks.push(new Brick(9, 3, "fuchsia"));
    bricks.push(new Brick(9, 4, "blue"));
    bricks.push(new Brick(9, 5, "blue"));
    bricks.push(new Brick(9, 6, "red"));
    bricks.push(new Brick(9, 7, "red"));
    bricks.push(new Brick(9, 8, "lime"));
    bricks.push(new Brick(9, 9, "lime"));
    bricks.push(new Brick(9, 10, "cyan"));

    bricks.push(new Brick(10, 2, "fuchsia"));
    bricks.push(new Brick(10, 3, "blue"));
    bricks.push(new Brick(10, 4, "blue"));
    bricks.push(new Brick(10, 5, "red"));
    bricks.push(new Brick(10, 6, "red"));
    bricks.push(new Brick(10, 7, "lime"));
    bricks.push(new Brick(10, 8, "lime"));
    bricks.push(new Brick(10, 9, "cyan"));
    bricks.push(new Brick(10, 10, "cyan"));

    bricks.push(new Brick(11, 2, "blue"));
    bricks.push(new Brick(11, 3, "blue"));
    bricks.push(new Brick(11, 4, "red"));
    bricks.push(new Brick(11, 5, "red"));
    bricks.push(new Brick(11, 6, "lime"));
    bricks.push(new Brick(11, 7, "lime"));
    bricks.push(new Brick(11, 8, "cyan"));
    bricks.push(new Brick(11, 9, "cyan"));
    bricks.push(new Brick(11, 10, "orange"));

    bricks.push(new Brick(12, 2, "blue"));
    bricks.push(new Brick(12, 3, "red"));
    bricks.push(new Brick(12, 4, "red"));
    bricks.push(new Brick(12, 5, "lime"));
    bricks.push(new Brick(12, 6, "lime"));
    bricks.push(new Brick(12, 7, "cyan"));
    bricks.push(new Brick(12, 8, "cyan"));
    bricks.push(new Brick(12, 9, "orange"));
    bricks.push(new Brick(12, 10, "orange"));

    bricks.push(new Brick(13, 2, "red"));
    bricks.push(new Brick(13, 3, "red"));
    bricks.push(new Brick(13, 4, "lime"));
    bricks.push(new Brick(13, 5, "lime"));
    bricks.push(new Brick(13, 6, "cyan"));
    bricks.push(new Brick(13, 7, "cyan"));
    bricks.push(new Brick(13, 8, "orange"));
    bricks.push(new Brick(13, 9, "orange"));
    bricks.push(new Brick(13, 10, "white"));

    bricks.push(new Brick(14, 3, "lime"));
    bricks.push(new Brick(14, 4, "lime"));
    bricks.push(new Brick(14, 5, "cyan"));
    bricks.push(new Brick(14, 6, "cyan"));
    bricks.push(new Brick(14, 7, "orange"));
    bricks.push(new Brick(14, 8, "orange"));
    bricks.push(new Brick(14, 9, "white"));

    bricks.push(new Brick(15, 3, "lime"));
    bricks.push(new Brick(15, 4, "cyan"));
    bricks.push(new Brick(15, 5, "cyan"));
    bricks.push(new Brick(15, 6, "orange"));
    bricks.push(new Brick(15, 7, "orange"));
    bricks.push(new Brick(15, 8, "white"));
    bricks.push(new Brick(15, 9, "white"));

    bricks.push(new Brick(16, 4, "cyan"));
    bricks.push(new Brick(16, 5, "orange"));
    bricks.push(new Brick(16, 6, "orange"));
    bricks.push(new Brick(16, 7, "white"));
    bricks.push(new Brick(16, 8, "white"));

    bricks.push(new Brick(17, 5, "orange"));
    bricks.push(new Brick(17, 6, "white"));
    bricks.push(new Brick(17, 7, "white"));

    return bricks;
}
