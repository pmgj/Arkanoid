import Arkanoid from "./Arkanoid.js";
import Direction from "./Direction.js";
import * as Global from "./Global.js";
import State from "./State.js";

class GUI {
    constructor() {
        this.game = new Arkanoid();
        this.ctx = null;
        this.leftPressed = false;
        this.rightPressed = false;    
    }
    resetCanvas() {
        this.ctx.clearRect(0, 0, Global.COLS, Global.ROWS);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, Global.COLS, Global.ROWS);
    }
    printMessage(message, size = 32, font = "Arial", color = "white") {
        this.ctx.font = `${size}px ${font}`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = color;
        this.ctx.fillText(message, Global.COLS * 0.5, Global.ROWS * 0.5);
    }
    printStageMessage(message, size = 32, font = "Arial", color = "white") {
        this.ctx.font = `${size}px ${font}`;
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = color;
        this.ctx.fillText(message, Global.COLS * 0.5, Global.ROWS * 0.7);
    }
    startScreen() {
        this.resetCanvas();
        this.printMessage("Arkanoid", 40, "Arial", "yellow");
        this.ctx.font = `18px Arial`;
        this.ctx.fillText("Press F1 to start", Global.COLS * 0.5, Global.ROWS * 0.5 + 40);
    }
    startStageScreen() {
        this.resetCanvas();
        let p = this.game.loadStage();
        p.then(() => this.startStage()).catch(() => this.winScreen());
    }
    winScreen() {
        this.resetCanvas();
        this.printMessage("Congratulations! You Win!");
    }
    gameOverScreen() {
        this.resetCanvas();
        this.printMessage("Game Over! You Lose!");
    }
    paintComponent() {
        let state = this.game.updateBoard();
        if (state === State.END_OF_STAGE) {
            this.startStageScreen();
            return;
        }
        if (state === State.LOST_LIVE) {
            this.startStage();
            return;
        }
        if (state === State.GAME_OVER) {
            this.gameOverScreen();
            return;
        }
        this.show();
        this.acceptInput();
        requestAnimationFrame(this.paintComponent.bind(this));
    }
    acceptInput() {
        if (this.rightPressed) {
            this.game.setDirection(Direction.RIGHT);
        } else if (this.leftPressed) {
            this.game.setDirection(Direction.LEFT);
        }
    }
    show() {
        this.resetCanvas();
        this.showPlayer();
        this.showBall();
        this.showBricks();
        this.showLives();
    }
    startStage() {
        this.resetCanvas();
        setTimeout(() => {
            this.showBricks();
            this.showLives();
            this.printStageMessage(`Stage ${this.game.getStageIndex() - 1}`);
            let raf;
            let allowPlayerMove = () => {
                this.show();
                this.acceptInput();
                this.game.movePlayerAndBall();
                raf = requestAnimationFrame(allowPlayerMove);
            };
            setTimeout(allowPlayerMove, 1000);
            setTimeout(() => {
                cancelAnimationFrame(raf);
                this.paintComponent();
            }, 2000);
        }, 1000);
    }
    showLives() {
        let lives = this.game.getPlayer().getLives();
        let span = document.querySelector("#lives");
        span.textContent = lives;
    }
    showPlayer() {
        // PLAYER
        let player = this.game.getPlayer();
        let x = player.getX();
        let y = player.getY();
        let h = player.getHeight();
        let w = player.getWidth();
        this.ctx.beginPath();
        this.ctx.arc(x, y + h / 2, h / 4, 1.5 * Math.PI, 0.5 * Math.PI, true);
        this.ctx.fillStyle = "aqua";
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(x, y, Global.PLAYER_SIDESIZE, h);
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(x + Global.PLAYER_SIDESIZE, y, w - 2 * Global.PLAYER_SIDESIZE, h);
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(x + w - Global.PLAYER_SIDESIZE, y, Global.PLAYER_SIDESIZE, h);
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(x + w, y + h / 2, h / 4, 1.5 * Math.PI, 0.5 * Math.PI, false);
        this.ctx.fillStyle = "aqua";
        this.ctx.fill();
        this.ctx.closePath();
    }
    showBall() {
        // BALL
        let ball = this.game.getBall();
        this.ctx.beginPath();
        this.ctx.arc(ball.getX(), ball.getY(), ball.getSize(), 0, 2 * Math.PI);
        this.ctx.fillStyle = "aqua";
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 2;
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }
    showBricks() {
        // BRICKS
        let bricks = this.game.getBricks();
        for (let brick of bricks) {
            this.ctx.beginPath();
            this.ctx.fillStyle = brick.getColor();
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = Global.BRICK_SPACING;
            this.ctx.fillRect(brick.getX(), brick.getY(), Global.BRICK_WIDTH - Global.BRICK_SPACING, Global.BRICK_HEIGHT - Global.BRICK_SPACING);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
    keyDownHandler(e) {
        if (e.key === "ArrowRight") {
            this.rightPressed = true;
        } else if (e.key === "ArrowLeft") {
            this.leftPressed = true;
        }
        if (e.key === "F1") {
            this.startStageScreen();
            e.preventDefault();
        }
    }
    keyUpHandler(e) {
        if (e.key === "ArrowRight") {
            this.rightPressed = false;
        } else if (e.key === "ArrowLeft") {
            this.leftPressed = false;
        }
    }
    registerEvents() {
        let canv = document.getElementById("canvas");
        canv.setAttribute("width", Global.COLS);
        canv.setAttribute("height", Global.ROWS);
        this.ctx = canv.getContext("2d");
        this.startScreen();
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        document.addEventListener("keyup", this.keyUpHandler.bind(this));
    }
}
let gui = new GUI();
gui.registerEvents();