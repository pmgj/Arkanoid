import ThreeHitBrick from "../ThreeHitBrick.js";

export function get() {
    let bricks = [];

    for (let i = 0; i < 11; i++) {
        bricks.push(new ThreeHitBrick(4, i + 1));
        bricks.push(new ThreeHitBrick(14, i + 1));
    }
    for (let i = 0; i < 9; i++) {
        bricks.push(new ThreeHitBrick(i + 5, 1));
        bricks.push(new ThreeHitBrick(i + 5, 11));
    }

    for (let i = 0; i < 7; i++) {
        bricks.push(new ThreeHitBrick(6, i + 3));
        bricks.push(new ThreeHitBrick(12, i + 3));
    }
    for (let i = 0; i < 5; i++) {
        bricks.push(new ThreeHitBrick(i + 7, 3));
        bricks.push(new ThreeHitBrick(i + 7, 9));
    }

    for (let i = 0; i < 3; i++) {
        bricks.push(new ThreeHitBrick(8, i + 5));
        bricks.push(new ThreeHitBrick(10, i + 5));
    }
    bricks.push(new ThreeHitBrick(9, 5));
    bricks.push(new ThreeHitBrick(9, 7));

    return bricks;
}
