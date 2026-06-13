//Задача
/* let question = ["Нам ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2х2 будет 8?", "Дельфины - это рыбы?", "Мадонна - это настоящее имя певицы?", "Первая мировая война началась 1 сентября 1939 года?"];

let answers = [false, true, false, false, false, false, false];

let sum = 0;

let res = new Array();

for(let i = 0; i < question.length; i++){
    let answer = confirm(question[i]);
    if(answer == answers[i]){
        res[i] = 10;
        sum += res[i];
    }else{
        res[i] = 0;
    }
}

console.log(res);
console.log(sum); 

document.writeln("<table border='1' width='500'>");

document.writeln("<tr>");
document.writeln("<th>Вопрос</th>");
document.writeln("<th>Баллы</th>");
document.writeln("</tr>");

for(let i = 0; i < question.length; i++){
    document.writeln("<tr>");
    document.writeln("<td>" + question[i] + "</td>");
    document.writeln("<td>" + res[i] + "</td>");
    document.writeln("</tr>");
}

document.writeln("<tr>");
document.writeln("<th>Итог</th>");
document.writeln("<th>" + sum + "</th>");
document.writeln("</tr>");

document.writeln("</table>"); */

//OF название массива
/* let arr = [1, 2, 3, 4, 5];
for(let elem of arr){
    console.log(elem);
    //console.log(elem ** 2);
} */

/* for(let i = 2; i < arr.length - 1; i++){
    document.writeln(arr[i] + "<br>");
} */

/* let colors = ["red", "blue", "green", "yellow"];
for(let color of colors){
    document.writeln(color + "<br>");
} */

// ================================================================================= ФЛАГ

/* let arr = [1, 2, 3, 4, 5];
let flag = false;

for(let elem of arr){
    if(elem == 3){
        //console.log("+++");
        flag = true;
        break;
    }
}
console.log(flag);
if(flag){
    console.log("+++");
}else{
    console.log("---");
} */

/* let arr = [7, 55, 9, 33, 2];

let max = arr[0]; */

//1 вариант
// for(let i = 0; i< arr.arr.length; i++){
//    if(arr[i] > max){
//        max = arr[i];
//    }
//} 

//2 вариант
/* for(let num of arr){
    if(num > max){
        max = num;
    }
} 
    console.log(max);
*/ 

/* let sum = 0;  
for (let num of arr){
    sum += num;
}
console.log(sum); */

//=============================================================================== НОВЫЕ МЕТОДЫ И СВОЙСТВА

/* let text1 = document.getElementById("text_1");
console.log(text1);
console.log(text1.textContent);
text1.textContent = "Новое содержимое";

let text2 = document.getElementById("text_2");
text2.innerHTML = "Новое содержимое с <b>HTML РАЗМЕТКОЙ</b>"; */

//ЗАДАЧА
/* let res = +prompt("Выберите изображение", "1-собака, 2-кот, 3-птица, 4-рыба");
document.writeln("<div id='image'></div>");
let img = document.getElementById("image");

switch(res){
    case 1:
        img.innerHTML = "<img src='img/dog.jpg'>";
        break;
    case 2:
        img.innerHTML = "<img src='img/cat.jpg'>";
        break;
    case 3:
        img.innerHTML = "<img src='img/bird.jpeg'>";
        break;
    case 4:
        img.innerHTML = "<img src='img/fish.jpeg'>";
        break;
    default:
        alert("Такого изображения нет");
} */


//============================================================== Получение доступа по имени элемента

/* let tag = document.getElementsByTagName("p")[2];
console.log(tag);
tag.innerHTML="Hello <u>tag</u>"
tag.style.color = "blue";
tag.style.fontWeight = "bold";
tag.style.background = "silver";
tag.style.padding = "10px 20px";

tag.id = "test";
tag.className = "x"; */

/* let tag = document.getElementsByTagName("p");
tag[2].innerHTML = "Hello <u>tag</u>";
tag[2].style.color = "blue";
tag[1].style.color = "orange"; */

//=============================================================== Получение доступа по имени класса

/* let q = document.getElementsByClassName("two");
console.log(q);
q[1].style.color = "red"; */


//НОВЫЕ МЕТОДЫ
/* document.querySelector("CSS");
document.querySelectorAll("CSS"); */ 

/* let id = document.querySelectorAll("text_1");
console.log(id);
id.style.color = "red"; */

/* let id = document.querySelector(".two");
console.log(id);
id.style.color = "red"; */

/* let id = document.querySelectorAll(".two")[1];
console.log(id);
id.style.color = "red"; */

/* let id = document.querySelectorAll("div")[2];
console.log(id);
id.style.color = "red"; */

/* let id = document.querySelector("div");
console.log(id);
id.style.color = "red"; */

//========================================== ЯГОДКИ

/* let el = document.querySelector("h2");
el.style.color = "red"; */

//1 ВАРИАНТ
/* let el2 = document.querySelectorAll("h2")[1];
el2.style.color = "purple"; */

//2 ВАРИАНТ
/* let el2 = document.querySelector("h1 + h2");
el2.style.color = "purple";

let lists = document.querySelectorAll("li");
//console.log(lists.length);
for(let i = 0; i < lists.length; i++){
    lists[i].innerHTML += "!!!";
}

let purple = document.querySelectorAll(".purple li");
for(let i = 0; i < purple.length; i++){
    purple[i].style.color = "purple";
    purple[i].innerHTML += "???";
} */

//================================================================= ДОМАШНЯЯ ЗАДАЧА ====================================================

document.writeln("<div id='demonstration'></div>");

let div = document.getElementById('demonstration');

div.innerHTML = "Термоста́т — прибор для поддержания постоянной температуры. Поддержание температуры обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как правило, теплоизолируют. Но не всегда. Широко известны автомобильные моторы, где летом нет никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная температура. Другим примером термостата, широко используемого в быту, является холодильник.";

div.style.backgroundColor = "yellow";
div.style.color = "black";
div.style.width = "256px";
div.style.height = "256px";
div.style.overflow = "scroll";
div.style.outline = "1px dashed red";

div.className = "resetFont";

//1 вариант
/* let d = document.getElementsByClassName("resetFont")[0];

d.style.fontSize ='20pt';
d.style.fontWeight = '400';
d.style.textDecoration ='underline'; */

//2 вариант
/* let d = document.querySelectorAll(".resetFont")[0];

d.style.fontSize ='20pt';
d.style.fontWeight = '400';
d.style.textDecoration ='underline'; */

//3 вариант
let d = document.querySelector(".resetFont");

d.style.fontSize ='20pt';
d.style.fontWeight = '400';
d.style.textDecoration ='underline';