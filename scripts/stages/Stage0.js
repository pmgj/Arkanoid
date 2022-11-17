import TwoHitBrick from "../bricks/TwoHitBrick";

export function get() {
    let bricks = [];
    // Top
    //    bricks.push(new TwoHitBrick(3, 3));

    // Bottom
    //    bricks.push(new TwoHitBrick(6, 8));

    // Left
    //    bricks.push(new TwoHitBrick(19, 11));

    // Right
    bricks.push(new TwoHitBrick(9, 9));

    // Right 2
    //    bricks.push(new TwoHitBrick(9, 9));
    //    bricks.push(new TwoHitBrick(10, 9));

    return bricks;
}
