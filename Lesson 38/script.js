"use strict";

//<canvas></canvas>

const canvas = document.getElementById("test");
const c = canvas.getContext("2d");

//c.fillStyle = "#369" // заполняет квадрат цветом
//c.fillRect(10,10,60,50); // x, y, ширина, высота

//c.fillStyle = "#f60";
//c.fillRect(40,50,100,90);

//c.setLineDash([15, 5]); //длина, расстояние между элементами
//c.lineWidth = 4.5; //толщина контура
//c.strokeStyle = "#369";
//c.strokeRect(5, 5, 140, 140); //добавляет пустые границы

//c.clearRect(30, 30, 50, 50); //очищаем, вырезаем

/* c.fillRect(20,20,90,90);
c.clearRect(43,43,45,45);

c.lineWidth = 2.5;
c.strokeRect(49,49,35,35) */

/* c.beginPath();
c.rect(30, 180, 100, 90);
c.closePath();

c.fillStyle = "yellow";
c.strokeStyle = "brown";
c.fill();
c.stroke();

c.clip(); //отрезает

c.beginPath();
c.rect(10, 200, 140, 90);
c.closePath();
c.stroke(); */

//==================================================================== РИСУЕМ ТРЕУГОЛЬНИК
/* c.beginPath();
c.moveTo(80, 50); //координата начала рисования, первая точка
c.lineTo(100, 80); //координата конечной точки, последняя  точка
c.lineTo(100, 20);
c.closePath();


c.strokeStyle = "brown";
c.stroke();
c.fillStyle = "yellow"
c.fill(); */

//========================================================================== РИСУЕМ КРУГ
/* c.beginPath();
c.arc(200, 80, 40, 0, Math.PI *2); //центр круга - первые две координаты, радиус, начальный и конечный угод усекает окружность арки - 4 и 5 числа
c.closePath();

c.stroke(); */

/* c.beginPath();
c.moveTo(300, 80);
c.arc(300, 80, 40, 0, Math.PI / 2, true);
c.closePath();
c.stroke(); */

/* c.beginPath();
c.moveTo(310, 90);
c.arc(310, 90, 40, 0, Math.PI / 2, false);
c.closePath();
c.stroke(); */

/* c.beginPath();
c.moveTo(410, 90);
c.arc(410, 90, 40, 0, Math.PI, false);
c.closePath();
c.stroke(); */

//c.beginPath();
//c.moveTo(180, 220); //начало элемента
//c.quadraticCurveTo(230, 160, 290, 220); // первые две циры - то точка, куда пойдет, третий и четвертый - точки куда придет кривая
/* c.moveTo(180, 260);
c.bezierCurveTo(240, 200, 220, 320, 290, 260); 
c.closePath();
c.strokeStyle = "red";
c.stroke();


c.fillStyle = "blue";
c.font = "30px Arial";
c.fillText("Hello, World!", 160, 30);
c.strokeText("Hello, World!", 330, 30)

c.font = "30px Verdana";
c.fillStyle = "orange";
c.textAlign = "center";

c.shadowOffsetX = 3;
c.shadowOffsetY = 3;
c.shadowBlur= 3;
c.shadowColor = "#AAA";

c.fillText("Hello, World!", canvas.width /2, canvas.height / 2); */

/* let pic = new Image();
pic.src = "card1.png";
pic.addEventListener("load", function(){
    c.drawImage(pic, 150, 100);
    c.drawImage(pic, 160, 0, 300, 130);

}) */

/* let gr = c.createLinearGradient(320,0, 470, 0);
gr.addColorStop(0, "red");
gr.addColorStop(0.4, "magenta");
gr.addColorStop(1, "yellow");
c.fillStyle = gr;
c.fillRect(320, 170, 150, 60); */

/* let st = c.createLinearGradient(320,0, 470, 0);
st.addColorStop(0, "red");
st.addColorStop(1, "yellow");
c.strokeStyle = st;
c.lineWidth = 10;
c.strokeRect(320, 170, 150, 60); */

/* let grd = c.createRadialGradient(400, 270, 5, 400, 270, 60);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");
c.fillStyle = grd;
c.fillRect(320, 240, 150, 60); */

/* c.shadowOffsetX = 10;
c.shadowOffsetY = 15;
c.shadowBlur = 10;
c.shadowColor = "#0f0";

let gr = c.createRadialGradient(60, 60, 15, 75, 75, 75);
gr.addColorStop(0, "#0F0");
gr.addColorStop(1, "#0DA805");
c.fillStyle = gr;

c.beginPath();
c.arc(75, 75, 75, 0, Math.PI *2);
c.closePath();
c.fill(); */

/* c.fillStyle = "brown";
c.fillRect(50, 50, 100, 100);
c.fillStyle = "orange";
c.globalAlpha = 0.5;
c.translate(50, 25);
c.rotate(.52);
c.scale(1.5, 1.5);
c.fillRect(50, 50, 100, 100); */

const w = canvas.width;
const h = canvas.height;

const mouse = {x: 0, y: 0};
let draw = false;

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
        c.lineCap = "round";  
        c.lineJoin = "round";
        c.lineWidth = 5; 
        c.lineTo(mouse.x, mouse.y);
        c.stroke();
    }
});

//отпускаем мышь
canvas.addEventListener("mouseup", function(e){
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        c.lineTo(mouse.x, mouse.y);
        c.stroke();
        c.closePath();
        draw = false;
});


//ДОМАШНЕЕ ЗАДАНИЕ ДО КАНИКУЛ

//БОЛЬШОЙ КРУГ
// c.beginPath();
// c.arc(300, 150, 50, 0, Math.PI * 2);
// c.fillStyle = '#FFDE00';
// c.fill();
// c.closePath();
// c.stroke();

// //КРИВАЯ УЛЫБКА
// c.beginPath();
// c.moveTo(270, 165);
// c.quadraticCurveTo(300, 195, 330, 165);
// c.stroke();

// //ЛЕВЫЙ ГЛАЗ
// c.beginPath();
// c.arc(285, 135, 5, 0, Math.PI * 2);
// c.fillStyle = 'white';
// c.fill();
// c.closePath();
// c.stroke();

// //ПРАВЫЙ ГЛАЗ
// c.beginPath();
// c.arc(315, 135, 5, 0, Math.PI * 2);
// c.fillStyle = 'white';
// c.fill();
// c.closePath();
// c.stroke();