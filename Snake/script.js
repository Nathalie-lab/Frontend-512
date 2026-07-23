//У меня в index только один id через который нужно получить доступ к документу
const root = document.getElementById("root");

//ПОЛЕ ИГРЫ через canvas - 1. создаю канву как в уроке 38; 2. задаю параметры ширины и высоты, границу для видимости, фон; 3. При помощи appendChild (добавляет дочерний элемент в конец родительского элемента) добавляю канву в root 
const canvas = document.createElement("canvas");
const c = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
canvas.style.border = "4px solid white";
canvas.style.backgroundColor = "#111";
root.appendChild(canvas);

//СЧЕТЧИК БАЛЛОВ ниже канвы - 1.Создаю div для счетчика
const scoreElement = document.createElement("div");
scoreElement.style.color = "white";
scoreElement.style.fontSize = "24px";
scoreElement.style.marginTop = "20px";
scoreElement.style.fontFamily = "Verdana, sans-serif";
scoreElement.innerText = "Счёт: 0";
root.appendChild(scoreElement);

class Game {
        constructor() {
            this.playfieldSize = 20;
            this.cellSize = canvas.width / this.playfieldSize; // размер клетки 400px / 20px = 20px
            this.apple = {x: 0, y: 0}; //начальные координаты яблока
            this.createApple(); //включается игра и появляется яблоко
        }

        //Случайные координаты для яблока. Math.random - случайное дробное число от 0 до 1. this.playfieldSize - размер поля. У меня размер поля 20 на 20. Math.floor - округляет дробное число назад. Это номер клетки. 
        createApple() {
            this.apple.x = Math.floor(Math.random() * this.playfieldSize) * this.cellSize;
            this.apple.y = Math.floor(Math.random() * this.playfieldSize) * this.cellSize;
        }
    } 

class View {

    //Рисуем яблоко на холсте
    renderApple(c, game) {
        c.fillStyle = 'red'; // Цвет яблока
        c.fillRect(game.apple.x, game.apple.y, game.cellSize, game.cellSize); // координаты, размер одной клетки 20 и 20 (по логике указываем два раза для ширины и высоты)
    }
}


const game = new Game();
const view = new View();

view.renderApple(c, game);







