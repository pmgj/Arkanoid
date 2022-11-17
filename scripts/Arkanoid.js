import Direction from "./Direction.js";
import Ball from "./Ball.js";
import Player from "./Player.js";
import * as Global from "./Global.js";
import State from "./State.js";

export default class Arkanoid {
    constructor() {
        this.direction = null;
        this.player = null;
        this.ball = null;
        this.bricks = null;
        this.numOfBricks = null;
        this.stageIndex = 1;
    }
    setDirection(d) {
        this.direction = d;
    }
    async loadStage() {
        let module = await import(`./stages/Stage${this.stageIndex++}.js`);
        this.createPlayer();
        this.createBricks(module);
        this.createBall();
        this.direction = Direction.NONE;
    }
    createBricks(stage) {
        this.bricks = stage.get();
        this.numOfBricks = this.bricks.filter(b => b.getN() === Number.MAX_VALUE).length;
    }
    createBall() {
        this.ball = new Ball(this.player.getX() + Global.PLAYER_WIDTH - Global.PLAYER_SIDESIZE - 2 * Global.BALL_SIZE, this.player.getY() - Global.BALL_SIZE);
    }
    createPlayer() {
        let y = Global.ROWS - 3 * Global.PLAYER_HEIGHT, x = Math.floor((Global.COLS - Global.PLAYER_WIDTH) / 2);
        let lives = this.player ? this.player.getLives() : Global.PLAYER_LIVES;
        this.player = new Player(x, y, Global.PLAYER_WIDTH, Global.PLAYER_HEIGHT, lives);
    }
    updateBoard() {
        let state = State.NONE;
        let changeXDir = false, changeYDir = false;
        let dx = this.ball.getSpeedX(), dy = this.ball.getSpeedY();
        // Verifica se a bola passou bateu no teto
        if (this.ball.getY() + dy < 0) {
            changeYDir = true;
        }
        // Verifica se a bola passou bateu nas laterais
        if (this.ball.getX() + dx < 0 || this.ball.getX() + this.ball.getSize() + dx >= Global.COLS) {
            changeXDir = true;
        }
        // Verifica se a bola bateu em um tijolo
        let bTop = this.ball.getY() - this.ball.getSize() + dy;
        let bBottom = this.ball.getY() + this.ball.getSize() + dy;
        let bLeft = this.ball.getX() - this.ball.getSize() + dx;
        let bRight = this.ball.getX() + this.ball.getSize() + dx;
        for (let i = 0, hit = false; i < this.bricks.length; i++) {
            let brick = this.bricks[i];
            if (bTop > brick.getY() && bTop < brick.getY() + Global.BRICK_HEIGHT && this.ball.getX() >= brick.getX() && this.ball.getX() <= brick.getX() + Global.BRICK_WIDTH) {
                changeYDir = true;
                hit = true;
            }
            if (bBottom > brick.getY() && bBottom < brick.getY() + Global.BRICK_HEIGHT && this.ball.getX() >= brick.getX() && this.ball.getX() <= brick.getX() + Global.BRICK_WIDTH) {
                changeYDir = true;
                hit = true;
            }
            if (bLeft > brick.getX() && bLeft < brick.getX() + Global.BRICK_WIDTH && this.ball.getY() >= brick.getY() && this.ball.getY() <= brick.getY() + Global.BRICK_HEIGHT) {
                changeXDir = true;
                hit = true;
            }
            if (bRight > brick.getX() && bRight < brick.getX() + Global.BRICK_WIDTH && this.ball.getY() >= brick.getY() && this.ball.getY() <= brick.getY() + Global.BRICK_HEIGHT) {
                changeXDir = true;
                hit = true;
            }
            if (hit) {
                brick.hit();
                if (brick.getN() === 0) {
                    this.bricks.splice(i, 1);
                }
            }
            hit = false;
        }
        // Verifica se a bola está colidindo com o barra do player
        if (this.ball.getY() + this.ball.getSize() + dy > this.player.getY() && this.ball.getX() > this.player.getX() && this.ball.getX() < this.player.getX() + this.player.getWidth()) {
            changeYDir = true;
            let cond1 = dx > 0 && this.ball.getX() < this.player.getX() + Global.PLAYER_SIDESIZE;
            let cond2 = dx < 0 && this.ball.getX() > this.player.getX() + this.player.getWidth() - Global.PLAYER_SIDESIZE;
            if (cond1 || cond2) {
                changeXDir = true;
            }
        }
        // Move a bola no eixo X e Y
        if (changeXDir) {
            this.ball.changeXDirection();
        }
        if (changeYDir) {
            this.ball.changeYDirection();
        }
        this.ball.updatePosition();
        // Fim do estágio
        if (this.bricks.length === this.numOfBricks) {
            state = State.END_OF_STAGE;
        }
        // Perdeu uma vida
        if (this.ball.getY() > Global.ROWS) {
            state = State.LOST_LIVE;
            this.player.removeLive();
            this.createPlayer();
            this.createBall();
        }
        // Perdeu o jogo
        if (this.player.getLives() < 0) {
            state = State.GAME_OVER;
        }
        // Move o jogador
        this.player.updatePosition(this.direction);
        this.direction = Direction.NONE;
        return state;
    }
    movePlayerAndBall() {
        this.player.updatePosition(this.direction);
        this.createBall();
    }
    getBall() {
        return this.ball;
    }
    getPlayer() {
        return this.player;
    }
    getBricks() {
        return this.bricks;
    }
    getStageIndex() {
        return this.stageIndex;
    }
}