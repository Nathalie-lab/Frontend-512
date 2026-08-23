"use strict";

class Game {
    constructor(element, gameBoard, size) {
        this.element = element;
        this.width = gameBoard;
        this.height = gameBoard;
        //this.weight = this.height = gameBoard;
        this.gridSize = size;

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext("2d");

        this.element.append(this.canvas);

        this.scoreEl = document.getElementById("score");
        this.startButton = document.getElementById("startButton");
        this.snake = [];

        this.direction = "RIGHT"; //начальное движение вправо
        this.gameSpeed = 200; //скорость игры
        this.food = {};
        this.score = 0;
        this.gameIsRunning = true;

        this.p = document.querySelector("p");
    }

    startGame() {
        this.food = this.getRandomFoodPosition();//функция для появления яблока
        this.gameIsRunning = true;
        this.snake = [{
            x: this.canvas.width / 2,
            y: this.canvas.height / 2,
        }];
        this.scoreEl.textContent = "Счет: 0"; //обнуляется счет в начале игры
        this.startButton.style.display = "none"; //кнопка исчезает с экрана при запуске игры
        this.p.innerHTML = "";
        this.gameLoop();
    }

    getRandomFoodPosition() {
        return {
            x: Math.floor(Math.random() * (this.canvas.width / this.gridSize)) * this.gridSize,
            y: Math.floor(Math.random() * (this.canvas.height / this.gridSize)) * this.gridSize,
        }
    }

    gameLoop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.food.x, this.food.y, this.gridSize, this.gridSize);
        this.ctx.fillStyle = "black";
        this.ctx.strokeRect(this.food.x, this.food.y, this.gridSize, this.gridSize);

        this.snake.forEach(segment => {
            this.ctx.fillStyle = "green";
            this.ctx.fillRect(segment.x, segment.y, this.gridSize, this.gridSize);
            this.ctx.fillStyle = "black";
            this.ctx.strokeRect(segment.x, segment.y, this.gridSize, this.gridSize);
        });

        let head = { ...this.snake[0] };

        if (this.direction === "UP") {
            head.y -= this.gridSize;
        }
        if (this.direction === "DOWN") {
            head.y += this.gridSize;
        }
        if (this.direction === "RIGHT") {
            head.x += this.gridSize;
        }
        if (this.direction === "LEFT") {
            head.x -= this.gridSize;
        }

        this.snake.unshift(head);


        if (head.x < 0 || head.x >= this.canvas.width || head.y >= this.canvas.height || head.y < 0) {
            this.gameOver();
            return;
        }

        for (let i = 1; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                this.gameOver();
                return;
            }
        }

        if (head.x === this.food.x && head.y === this.food.y) {
            this.food = this.getRandomFoodPosition();
            this.score++;
            this.scoreEl.textContent = `Счет: ${this.score}`;
            if (this.gameSpeed > 50) {
                this.gameSpeed -= 5;
            }
        } else {
            this.snake.pop();
        }

        if (this.snake.length > 0) {
            setTimeout(() => this.gameLoop(), this.gameSpeed);
        }
    }

    changeDirection(event) {
        const code = event.code;

        if ((code === "ArrowUp" || code === "KeyW") && this.direction !== "DOWN") { this.direction = "UP"; }
        else if ((code === "ArrowDown" || code === "KeyS") && this.direction !== "UP") { this.direction = "DOWN"; }
        else if ((code === "ArrowRight" || code === "KeyD") && this.direction !== "LEFT") { this.direction = "RIGHT"; }
        else if ((code === "ArrowLeft" || code === "KeyA") && this.direction !== "RIGHT") { this.direction = "LEFT"; }
    }

    gameOver() {
        this.gameIsRunning = false;
        let result = document.createElement("p");
        result.innerHTML = `<span style="color: red; font-weight: bold">GAME OVER</span><br><span style="color: red">Ваш счет: ${this.score}</span>`;
        this.p.append(result);
        this.startButton.style.display = "inline";
        this.scoreEl.style.display = "none";
    }
}

const root = document.getElementById("root");
const game = new Game(root, 400, 20);
document.addEventListener("keydown", (event) => game.changeDirection(event));
//game.startButton.addEventListener("click", () => game.startGame());
game.startButton.addEventListener("click", function () {
    game.startGame();
});

