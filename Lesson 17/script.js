"use strict";

/* let el = document.querySelector("#elem");
// элемент.addEventListener("тип события", функция);

el.addEventListener("click", function(){
    el.innerHTML = "НОВЫЙ ТЕКСТ";
});

el.addEventListener("contextmenu", function(){
    el.style.color = "green";
    el.style.background = "yellow";
}) */

//ПРАКТИЧЕСКИЙ ПРИМЕР

/* let searchInput = document.querySelector("#searchInput");
let list = document.querySelectorAll("#list li");

searchInput.addEventListener("input", function(){
    let searchTerm = this.value.toLowerCase();

    for(let i = 0; i < list.length; i++){
        let item = list[i];
        if(item.textContent.toLowerCase().indexOf(searchTerm) !== -1){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
}}
) */


/* let but = document.querySelector("button");
but.addEventListener("click", function(event){
    console.log(event);
    
})
 */

/* let buttons = document.querySelectorAll("input");

let handleClick = function(event){
    console.log("Кликнули по ", event.target.value);
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", handleClick);
} */

/* document.addEventListener("mousemove",function(event){
    let c = document.querySelector("#ev");
    let x = event.clientX;
    let y = event.clientY;

    c.textContent = "X = " + x + ", Y = " + y;

    c.addEventListener("dblclick", function(event){
        event.target.style.background = "red";
    })
});
 */

/* let section = document.querySelector("section");
let div = document.querySelector("div");
let p = document.querySelector("p");

section.addEventListener("click", function(){
    section.style.background = "red";
})

div.addEventListener("click", function(event){
    div.style.background = "orange";
    event.stopPropagation();
})

p.addEventListener("click", function(){
    p.style.background = "yellow";
}) */

//Фазы события: 
//-фаза захвата (сверху вниз)
//-фаза цели (где произошло событие, на каком элементе)
//-фаза всплытия (событие идет снизу вверх)

/* let link = document.querySelector("a");

link.addEventListener("click", function(event){
 event.preventDefault();
 console.log("Переход по ссылке отменен");
}) */

/*let input = document.querySelector("#but");

input.addEventListener("click", handle);

function handle(){
    alert("Спасибо");
    input.removeEventListener("click", handle);
}*/


//встроенные функции

//setTimeout(функция, задержка);
//setTimeout("alert('TEXT')", 3000); // 3 секунды
//setTimeout("hello('Привет', 'друг')", 3000);
//setTimeout(hello, 3000, 'Привет', 'друг');

/* setTimeout(hello);
function hello(h, n){
    alert(h + ", " + n + "!");
} */

//вывод анимированного текста

/* document.writeln("<div id='dt'>Создание анимированного текста</div>");

let tag = document.querySelector("#dt");
let text = document.querySelector("#dt").innerHTML;
let i = 0;
window.addEventListener("load", animText);

function animText(){
    tag.innerHTML = text.substring(0, i);
    i++;
    if(i > text.length){
        i = 0;
    }
    setTimeout(animText, 100);
} */

/* let d = new Date();
document.writeln(d + "<br>");
document.writeln(d.toDateString() + "<br>");

document.writeln(d.getFullYear() + "<br>");
document.writeln(d.getMonth() + "<br>"); // месяцы от 0 по 11
document.writeln(d.getDate() + "<br>");
document.writeln(d.getDay() + "<br>"); // тоже 0 до 6 начиная с восресенья */

/* let d = new Date(2025, 11, 18, 10, 0, 0).getTime();
console.log(d); */

//Сегодня: 12 апреля 2026, Воскресенье

let d = new Date();

let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let a = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + ", " + days[d.getDay()];

document.writeln("Сегодня: " + a);