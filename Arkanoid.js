import {CellState} from "./CellState.js";
import {Direction} from "./Direction.js";
import {Cell} from "./Cell.js";
import {Ball} from "./Ball.js";
import {Brick} from "./Brick.js";
import {Player} from "./Player.js";
import * as Global from "./Global.js";
import {State} from "./State.js";

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
        let p = player.getCells()[0][Global.PLAYER_WIDTH - 2 * Global.BALL_SIZE];
        ball = new Ball(p.getX() - Global.BALL_SIZE, p.getY());
    }
    function createPlayer() {
        let row = Global.ROWS - 3 * Global.PLAYER_HEIGHT, col = Math.floor((Global.COLS - Global.PLAYER_WIDTH) / 2);
        let lives = player ? player.getLives() : Global.PLAYER_LIVES;
        player = new Player(row, col, Global.PLAYER_WIDTH, Global.PLAYER_HEIGHT, lives);
    }
    function updateBoard() {
        let state = State.NONE;
        let changeXDir = false, changeYDir = false;
        let bMatrix = ball.getCells();
        let bCells = bMatrix.flat();
        let dx = ball.getX(), dy = ball.getY();
        // Verifica se a bola passou bateu no teto
        if (bCells.some(c => c.getX() + dy <= 0)) {
            changeYDir = true;
        }
        // Verifica se a bola passou bateu nas laterais
        if (bCells.some(c => c.getY() + dx <= 0) || bCells.some(c => c.getY() + dx >= Global.COLS - 1)) {
            changeXDir = true;
        }
        // Verifica se a bola bateu em um tijolo
        let hitBrick = false;
        let bTop = bMatrix[0];
        let bBottom = bMatrix[bMatrix.length - 1];
        let bLeft = bMatrix.map(x => x[0]);
        let bRight = bMatrix.map(x => x[x.length - 1]);
        let bSides = [{bSide: bTop, x: 0, y: dy, xDir: false, yDir: true}, {bSide: bBottom, x: 0, y: dy, xDir: false, yDir: true}, {bSide: bLeft, x: dx, y: 0, xDir: true, yDir: false}, {bSide: bRight, x: dx, y: 0, xDir: true, yDir: false}];
        for (let {bSide, x, y, xDir, yDir} of bSides) {
            let tempBrick = null;
            for (let {x: bx, y: by} of bSide) {
                for (let i = 0; i < bricks.length; i++) {
                    let brick = bricks[i];
                    let cells = brick.getCells().flat();
                    if (tempBrick !== brick && cells.some(c => c.equals(new Cell(bx + y, by + x)))) {
                        tempBrick = brick;
                        if (xDir) {
                            changeXDir = true;
                        }
                        if (yDir) {
                            changeYDir = true;
                        }
                        hitBrick = true;
                        brick.hit();
                        if (brick.getN() === 0) {
                            bricks.splice(i, 1);
                        }
                    }
                }
            }
        }
        if (!hitBrick) {
            let tl = bMatrix[0][0];
            let tr = bMatrix[0][bMatrix[0].length - 1];
            let bl = bMatrix[bMatrix.length - 1][0];
            let br = bMatrix[bMatrix.length - 1][bMatrix[0].length - 1];
            let edges = [tl, tr, bl, br];
            for (let {x: bx, y: by} of edges) {
                for (let i = 0; i < bricks.length; i++) {
                    let brick = bricks[i];
                    let cells = brick.getCells().flat();
                    if (cells.some(c => c.equals(new Cell(bx + dy, by + dx)))) {
                        changeXDir = true;
                        changeYDir = true;
                        brick.hit();
                        if (brick.getN() === 0) {
                            bricks.splice(i, 1);
                        }
                    }
                }
            }
        }
        // Verifica se a bola está colidindo com o barra do player
        let pCells = player.getCells().flat();
        let hitPlayer = false;
        bSides = [{bSide: bBottom, condition: dy > 0, x: 0, y: dy, xDir: false, yDir: true}, {bSide: bLeft, condition: dx < 0, x: dx, y: 0, xDir: true, yDir: false}, {bSide: bRight, condition: dx > 0, x: dx, y: 0, xDir: true, yDir: false}];
        for (let {bSide, condition, x, y, xDir, yDir} of bSides) {
            for (let {x: bx, y: by} of bSide) {
                if (condition && pCells.some(c => c.equals(new Cell(bx + y, by + x)))) {
                    if (xDir) {
                        changeXDir = true;
                    }
                    if (yDir) {
                        changeYDir = true;
                    }
                    hitPlayer = true;
                }
            }
        }
        if (!hitPlayer) {
            let tl = bMatrix[0][0];
            let tr = bMatrix[0][bMatrix[0].length - 1];
            let bl = bMatrix[bMatrix.length - 1][0];
            let br = bMatrix[bMatrix.length - 1][bMatrix[0].length - 1];
            let edges = [tl, tr, bl, br];
            for (let {x, y} of edges) {
                if (pCells.some(c => c.equals(new Cell(x + dy, y + dx)))) {
                    changeXDir = true;
                    changeYDir = true;
                }
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
        if (bCells.some(c => c.getX() >= Global.ROWS - 1)) {
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
    return {movePlayerAndBall, loadStage, updateBoard, setDirection, getBall, getPlayer, getBricks, getStageIndex};
}

export {Arkanoid};

//let a = new Arkanoid();
//let p = a.loadStage();
//p.then(() => {
//    for (let i = 0; i < 10; i++) {
//        a.updateBoard();
//    }
//});
