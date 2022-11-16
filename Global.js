export const BRICK_WIDTH = 20;
export const BRICK_HEIGHT = 10;
export const BRICK_SPACING = 3;
export const NUM_ROWS = 30;
export const NUM_COLS = 13;
export const ROWS = NUM_ROWS * BRICK_HEIGHT;
export const COLS = NUM_COLS * BRICK_WIDTH;
export const UNIT_SIZE = 3;
export const PLAYER_WIDTH = 40;
export const PLAYER_HEIGHT = 8;
export const PLAYER_LIVES = 2;
export const PLAYER_SPEED = 6;
export const PLAYER_SIDESIZE = 15;
export const BALL_SIZE = 5;
export const BALL_SPEED = 4;

console.assert(BRICK_HEIGHT >= BALL_SIZE, "The brick height can not be smaller than the ball size.");
console.assert(BRICK_WIDTH >= BALL_SIZE, "The brick width can not be smaller than the ball size.");
console.assert(PLAYER_HEIGHT >= BALL_SIZE, "The player height can not be smaller than the ball size.");
console.assert(PLAYER_WIDTH >= BALL_SIZE, "The player width can not be smaller than the ball size.");
