"use strict";

//получили доступ к canvas по стандарту
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//получаем доступ по id к счету
const scoreEl = document.getElementById("score");
//получаем доступ по id к кнопки старта
const startButton = document.getElementById("startButton");

//размер ячейки-сегмента
const gridSize = 20;

//массивы и переменные
let snake; //массив кубиков для змейки
let direction; //массив для направления движения змейки
let score; //счет
let gameSpeed; //скорость змейки
let food;
let gameIsRunning; //флаг для старта и финиша

function startGame(){
    snake = [{x: 200, y: 200,}] //формируется кубик змейки по координатам
    
    gameIsRunning = true;
    direction = "RIGHT"; //начальное движение вправо

    score = 0; //счет
    gameSpeed = 200; //скорость игры
    food = getRandomFoodPosition();//функция для появления яблока

    scoreEl.textContent = "Счет: 0"; //обнуляется счет в начале игры
    startButton.style.display = "none"; //кнопка исчезает с экрана при запуске игры
    gameLoop(); //начался игровой цикл
}

//функция для спама еды
function getRandomFoodPosition(){
    return{
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize,
    }
}

const p = document.querySelector("p");

function gameOver(){
    gameIsRunning = false;
    let result = document.createElement("p");
    result.innerHTML = `<span style="color: red; font-weight: bold">GAME OVER</span><br><span style="color: red">Ваш счет: ${score}</span>`;
    p.append(result);
    startButton.style.display = "inline";
    scoreEl.style.display = "none";
}

//ЦИКЛ для анимации змейки в 150 м/с
function gameLoop(){
    ctx.clearRect(0,0, canvas.width, canvas.height);

        ctx.fillStyle = "red";
        ctx.fillRect(foot.x, foot.y, gridSize, gridSize);
        ctx.fillStyle = "black";
        ctx.strokeRect(foot.x, foot.y, gridSize, gridSize);

    snake.forEach(segment => {
        ctx.fillStyle = "green";
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
        ctx.fillStyle = "black";
        ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
    });

    let head = {...snake[0]};
    if(direction === "UP"){
        head.y -= gridSize;
    }
    if(direction === "DOWN"){
        head.y += gridSize;
    }
    if(direction === "RIGHT"){
        head.x += gridSize;
    }
    if(direction === "LEFT"){
        head.x -= gridSize;
    }
    snake.unshift(head);
    
    if(head.x === foot.x && head.y === foot.y){
        do{
            foot = this.getRandomFoodPosition();
        }while(this.snake.some(segment => segment.x === foot.x && segment.y === foot.y))
    }

    if(head.x < 0  || head.x >= canvas.width || head.y >= canvas.height || head.y < 0){
        gameOver();
        return;
    }

    for(let i = 1; i < snake.length; i++){
        if(head.x === snake[i].x && head.y === snake[i].y){
            gameOver();
            return;
        }
    }

//if(head.x === food.x && head.y === food.y){
//food = getRandomFoodPosition();
        score++;
        scoreEl.textContent = `Счет: ${score}`;
        if(gameSpeed > 50){
            gameSpeed -= 5;
        }
    } else{
        snake.pop();
    }

    if(snake.length > 0){
        setTimeout(gameLoop, gameSpeed);
    };

//Смена направления при нажатии стрелки
function changeDirection(event){
    const key = event.key;
    if(key == "ArrowUp" && direction !== "DOWN"){
        direction = "UP";
    }else if(key == "ArrowDown" && direction !== "UP"){
        direction = "DOWN";
    }else if(key == "ArrowRight" && direction !== "LEFT"){
        direction = "RIGHT";
    }else if(key == "ArrowLeft" && direction !== "RIGHT"){
        direction = "LEFT";
    }else if(key == "W" && direction !== "DOWN"){
        direction = "UP";
    }else if(key == "S" && direction !== "UP"){
        direction = "DOWN";
    }else if(key == "A" && direction !== "RIGHT"){
        direction = "LEFT";
    }else if(key == "D" && direction !== "LEFT"){
        direction = "RIGHT";} 
}
document.addEventListener("keydown", changeDirection);

//при нажатии на кнопку начинается игра, пропадает кнопка начать игру
startButton.addEventListener("click", startGame);
