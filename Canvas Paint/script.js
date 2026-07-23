//ДОСТУП К CANVAS
const canvas = document.getElementById("test");
const c = canvas.getContext("2d");

const w = canvas.width;
const h = canvas.height;

const mouse = {x: 0, y: 0};
let draw = false;

//Параметры линии
c.lineCap = "round";  
c.lineJoin = "round";
c.lineWidth = 5;

//доступ к кнопкам
const eraserBtn = document.getElementById("eraser");
const drawBtn = document.getElementById("draw");
const size = document.getElementById("size");
const sizeValue = document.getElementById("sizeValue");

//нажатие мыши
canvas.addEventListener("mousedown", function(e){
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    draw = true;
    c.beginPath();
    c.moveTo(mouse.x, mouse.y);
});

//перемещение мыши
canvas.addEventListener("mousemove", function(e){
    if(draw){
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        c.lineTo(mouse.x, mouse.y);
        c.stroke();
    }
});

//отпускаем мышь
canvas.addEventListener("mouseup", function(e){
    if(draw){
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        c.lineTo(mouse.x, mouse.y);
        c.stroke();
        c.closePath();
        draw = false;
    }
});

//сброс рисования, если курсор ушел с холста
canvas.addEventListener("mouseleave", function() {
    draw = false;
});

//очистка холста
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function() {
    c.clearRect(0, 0, w, h);
});

let erase = false;
let currentColor = "#000000";

//цвет линии
const color = document.getElementById("colors");
color.addEventListener('input', function(e) {
    currentColor = e.target.value;
    if (!erase) {
        c.strokeStyle = currentColor;
    }
});

//ластик
eraserBtn.addEventListener('click', function() {
    erase = true;
    c.globalCompositeOperation = 'destination-out';

    eraserBtn.classList.add('active');
    drawBtn.classList.remove('active');
});

//кисть
drawBtn.addEventListener('click', function() {
    erase = false;
    c.globalCompositeOperation = 'source-over';
    c.strokeStyle = currentColor;

    drawBtn.classList.add('active');
    eraserBtn.classList.remove('active');
});

//размер линии
size.addEventListener('input', function(e) {
    const currentSize = e.target.value;
    c.lineWidth = currentSize;
    sizeValue.textContent = currentSize;
});


