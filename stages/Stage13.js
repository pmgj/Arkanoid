import Brick from "../Brick.js";

export function get() {
    let bricks = [];

    for (let i = 0; i < 3; i++) {
        bricks.push(new Brick(4, i + 1, "yellow"));
        bricks.push(new Brick(5, i + 1, "fuchsia"));
        bricks.push(new Brick(6, i + 1, "blue"));
        bricks.push(new Brick(7, i + 1, "red"));
        bricks.push(new Brick(8, i + 1, "lime"));
        bricks.push(new Brick(9, i + 1, "cyan"));
        bricks.push(new Brick(10, i + 1, "orange"));
        bricks.push(new Brick(11, i + 1, "white"));

        bricks.push(new Brick(4, i + 5, "white"));
        bricks.push(new Brick(5, i + 5, "orange"));
        bricks.push(new Brick(6, i + 5, "cyan"));
        bricks.push(new Brick(7, i + 5, "lime"));
        bricks.push(new Brick(8, i + 5, "red"));
        bricks.push(new Brick(9, i + 5, "blue"));
        bricks.push(new Brick(10, i + 5, "fuchsia"));
        bricks.push(new Brick(11, i + 5, "yellow"));

        bricks.push(new Brick(4, i + 9, "yellow"));
        bricks.push(new Brick(5, i + 9, "fuchsia"));
        bricks.push(new Brick(6, i + 9, "blue"));
        bricks.push(new Brick(7, i + 9, "red"));
        bricks.push(new Brick(8, i + 9, "lime"));
        bricks.push(new Brick(9, i + 9, "cyan"));
        bricks.push(new Brick(10, i + 9, "orange"));
        bricks.push(new Brick(11, i + 9, "white"));
    }
    return bricks;
}
