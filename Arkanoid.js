import Direction from "./Direction.js";
import Ball from "./Ball.js";
import Player from "./Player.js";
import * as Global from "./Global.js";
import State from "./State.js";

function Arkanoid() {
    let direction, player, ball, bricks, numOfBricks;
    let stageIndex = 1;
    function setDirection(d) {
        direction = d;
    }
    async function loadStage() {
        let module = await import(`./stages/Stage${stageIndex++}.js`);
        createPlayer();
        createBricks(module);
        createBall();
        direction = Direction.NONE;
    }
    function createBricks(stage) {
        bricks = stage.get();
        numOfBricks = bricks.filter(b => b.getN() === Number.MAX_VALUE).length;
    }
    function createBall() {
        ball = new Ball(player.getX() + Global.PLAYER_WIDTH - Global.PLAYER_SIDESIZE - 2 * Global.BALL_SIZE, player.getY() - Global.BALL_SIZE);
    }
    function createPlayer() {
        let y = Global.ROWS - 3 * Global.PLAYER_HEIGHT, x = Math.floor((Global.COLS - Global.PLAYER_WIDTH) / 2);
        let lives = player ? player.getLives() : Global.PLAYER_LIVES;
        player = new Player(x, y, Global.PLAYER_WIDTH, Global.PLAYER_HEIGHT, lives);
    }
    function updateBoard() {
        let state = State.NONE;
        let changeXDir = false, changeYDir = false;
        let dx = ball.getSpeedX(), dy = ball.getSpeedY();
        // Verifica se a bola passou bateu no teto
        if (ball.getY() + dy < 0) {
            changeYDir = true;
        }
        // Verifica se a bola passou bateu nas laterais
        if (ball.getX() + dx < 0 || ball.getX() + ball.getSize() + dx >= Global.COLS) {
            changeXDir = true;
        }
        // Verifica se a bola bateu em um tijolo
        let bTop = ball.getY() - ball.getSize() + dy;
        let bBottom = ball.getY() + ball.getSize() + dy;
        let bLeft = ball.getX() - ball.getSize() + dx;
        let bRight = ball.getX() + ball.getSize() + dx;
        for (let i = 0, hit = false; i < bricks.length; i++) {
            let brick = bricks[i];
            if (bTop > brick.getY() && bTop < brick.getY() + Global.BRICK_HEIGHT && ball.getX() >= brick.getX() && ball.getX() <= brick.getX() + Global.BRICK_WIDTH) {
                changeYDir = true;
                hit = true;
            }
            if (bBottom > brick.getY() && bBottom < brick.getY() + Global.BRICK_HEIGHT && ball.getX() >= brick.getX() && ball.getX() <= brick.getX() + Global.BRICK_WIDTH) {
                changeYDir = true;
                hit = true;
            }
            if (bLeft > brick.getX() && bLeft < brick.getX() + Global.BRICK_WIDTH && ball.getY() >= brick.getY() && ball.getY() <= brick.getY() + Global.BRICK_HEIGHT) {
                changeXDir = true;
                hit = true;
            }
            if (bRight > brick.getX() && bRight < brick.getX() + Global.BRICK_WIDTH && ball.getY() >= brick.getY() && ball.getY() <= brick.getY() + Global.BRICK_HEIGHT) {
                changeXDir = true;
                hit = true;
            }
            if (hit) {
                brick.hit();
                if (brick.getN() === 0) {
                    bricks.splice(i, 1);
                }
            }
            hit = false;
        }
        // Verifica se a bola está colidindo com o barra do player
        if (ball.getY() + ball.getSize() + dy > player.getY() && ball.getX() > player.getX() && ball.getX() < player.getX() + player.getWidth()) {
            changeYDir = true;
            let cond1 = dx > 0 && ball.getX() < player.getX() + Global.PLAYER_SIDESIZE;
            let cond2 = dx < 0 && ball.getX() > player.getX() + player.getWidth() - Global.PLAYER_SIDESIZE;
            if (cond1 || cond2) {
                changeXDir = true;
            }
        }
        // Move a bola no eixo X e Y
        if (changeXDir) {
            ball.changeXDirection();
        }
        if (changeYDir) {
            ball.changeYDirection();
        }
        ball.updatePosition();
        // Fim do estágio
        if (bricks.length === numOfBricks) {
            state = State.END_OF_STAGE;
        }
        // Perdeu uma vida
        if (ball.getY() > Global.ROWS) {
            state = State.LOST_LIVE;
            player.removeLive();
            createPlayer();
            createBall();
        }
        // Perdeu o jogo
        if (player.getLives() < 0) {
            state = State.GAME_OVER;
        }
        // Move o jogador
        player.updatePosition(direction);
        direction = Direction.NONE;
        return state;
    }
    function movePlayerAndBall() {
        player.updatePosition(direction);
        createBall();
    }
    function getBall() {
        return ball;
    }
    function getPlayer() {
        return player;
    }
    function getBricks() {
        return bricks;
    }
    function getStageIndex() {
        return stageIndex;
    }
    return { movePlayerAndBall, loadStage, updateBoard, setDirection, getBall, getPlayer, getBricks, getStageIndex };
}

export { Arkanoid };

//let a = new Arkanoid();
//let p = a.loadStage();
//p.then(() => {
//    for (let i = 0; i < 10; i++) {
//        a.updateBoard();
//    }
//});
