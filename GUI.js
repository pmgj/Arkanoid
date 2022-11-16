import { Arkanoid } from "./Arkanoid.js";
import Direction from "./Direction.js";
import * as Global from "./Global.js";
import State from "./State.js";

function GUI() {
    let game = new Arkanoid(), ctx;
    let leftPressed = false, rightPressed = false;
    function resetCanvas() {
        ctx.clearRect(0, 0, Global.COLS, Global.ROWS);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, Global.COLS, Global.ROWS);
    }
    function printMessage(message, size = 32, font = "Arial", color = "white") {
        ctx.font = `${size}px ${font}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = color;
        ctx.fillText(message, Global.COLS * 0.5, Global.ROWS * 0.5);
    }
    function printStageMessage(message, size = 32, font = "Arial", color = "white") {
        ctx.font = `${size}px ${font}`;
        ctx.textAlign = 'center';
        ctx.fillStyle = color;
        ctx.fillText(message, Global.COLS * 0.5, Global.ROWS * 0.7);
    }
    function startScreen() {
        resetCanvas();
        printMessage("Arkanoid", 40, "Arial", "yellow");
        ctx.font = `18px Arial`;
        ctx.fillText("Press F1 to start", Global.COLS * 0.5, Global.ROWS * 0.5 + 40);
    }
    function startStageScreen() {
        resetCanvas();
        let p = game.loadStage();
        p.then(() => startStage()).catch(() => winScreen());
    }
    function winScreen() {
        resetCanvas();
        printMessage("Congratulations! You Win!");
    }
    function gameOverScreen() {
        resetCanvas();
        printMessage("Game Over! You Lose!");
    }
    function paintComponent() {
        let state = game.updateBoard();
        if (state === State.END_OF_STAGE) {
            startStageScreen();
            return;
        }
        if (state === State.LOST_LIVE) {
            startStage();
            return;
        }
        if (state === State.GAME_OVER) {
            gameOverScreen();
            return;
        }
        show();
        acceptInput();
        requestAnimationFrame(paintComponent);
    }
    function acceptInput() {
        if (rightPressed) {
            game.setDirection(Direction.RIGHT);
        } else if (leftPressed) {
            game.setDirection(Direction.LEFT);
        }
    }
    function show() {
        resetCanvas();
        showPlayer();
        showBall();
        showBricks();
        showLives();
    }
    function startStage() {
        resetCanvas();
        setTimeout(() => {
            showBricks();
            showLives();
            printStageMessage(`Stage ${game.getStageIndex() - 1}`);
            let raf;
            let allowPlayerMove = () => {
                show();
                acceptInput();
                game.movePlayerAndBall();
                raf = requestAnimationFrame(allowPlayerMove);
            };
            setTimeout(allowPlayerMove, 1000);
            setTimeout(() => {
                cancelAnimationFrame(raf);
                paintComponent();
            }, 2000);
        }, 1000);
    }
    function showLives() {
        let lives = game.getPlayer().getLives();
        let span = document.querySelector("#lives");
        span.textContent = lives;
    }
    function showPlayer() {
        // PLAYER
        let player = game.getPlayer();
        let x = player.getX();
        let y = player.getY();
        let h = player.getHeight();
        let w = player.getWidth();
        ctx.beginPath();
        ctx.arc(x, y + h / 2, h / 4, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.fillStyle = "aqua";
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, Global.PLAYER_SIDESIZE, h);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "gray";
        ctx.fillRect(x + Global.PLAYER_SIDESIZE, y, w - 2 * Global.PLAYER_SIDESIZE, h);
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(x + w - Global.PLAYER_SIDESIZE, y, Global.PLAYER_SIDESIZE, h);
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x + w, y + h / 2, h / 4, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fillStyle = "aqua";
        ctx.fill();
        ctx.closePath();
    }
    function showBall() {
        // BALL
        let ball = game.getBall();
        ctx.beginPath();
        ctx.arc(ball.getX(), ball.getY(), ball.getSize(), 0, 2 * Math.PI);
        ctx.fillStyle = "aqua";
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    function showBricks() {
        // BRICKS
        let bricks = game.getBricks();
        for (let brick of bricks) {
            ctx.beginPath();
            ctx.fillStyle = brick.getColor();
            ctx.strokeStyle = "black";
            ctx.lineWidth = Global.BRICK_SPACING;
            ctx.fillRect(brick.getX(), brick.getY(), Global.BRICK_WIDTH - Global.BRICK_SPACING, Global.BRICK_HEIGHT - Global.BRICK_SPACING);
            ctx.stroke();
            ctx.closePath();
        }
    }
    function keyDownHandler(e) {
        if (e.key === "ArrowRight") {
            rightPressed = true;
        } else if (e.key === "ArrowLeft") {
            leftPressed = true;
        }
        if (e.key === "F1") {
            startStageScreen();
            e.preventDefault();
        }
    }
    function keyUpHandler(e) {
        if (e.key === "ArrowRight") {
            rightPressed = false;
        } else if (e.key === "ArrowLeft") {
            leftPressed = false;
        }
    }
    function registerEvents() {
        let canv = document.getElementById("canvas");
        canv.setAttribute("width", Global.COLS);
        canv.setAttribute("height", Global.ROWS);
        ctx = canv.getContext("2d");
        startScreen();
        document.addEventListener("keydown", keyDownHandler);
        document.addEventListener("keyup", keyUpHandler);
    }
    return { registerEvents };
}
let gui = new GUI();
gui.registerEvents();
