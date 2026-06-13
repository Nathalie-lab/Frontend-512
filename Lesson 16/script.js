"use strict";


// КОНВЕРТАЦИЯ ЧЕРЕЗ РЕКУРСИЮ

//десятичная система
/* function toStr(n, base){ // 254 10 // 25 10 // 2 10
    let convert = "0123456789ABCDEF"; //служебная строка
    if(n < base){ // 254 < 10 false идем в else // 25 < 10 false // 2 < 10 true
        return convert[n]; // 2 = 2
    }else {
        return toStr(parseInt(n / base), base) + convert[n % base]; 
        // 254 / 10 = 25 , 10
        // 254 % 10 = 4 из конверта 4 элемента - это 4
        //25 / 10 = 2, 10
        //25 % 10 = 5 из конверта 5 элемента - это 5 - это выше забирается раньше
    }
}

document.writeln(toStr(254, 10));
//итого получается 254 */


//шестнадцетиричная система
/* function toStr(n, base){ // 254 16 // 15 16 // 2 16
    let convert = "0123456789ABCDEF"; //служебная строка
    if(n < base){ // 254 < 16 false идем в else // 15 < 16 true
        return convert[n]; // 15 элемент в конверте = F
    }else {
        return toStr(parseInt(n / base), base) + convert[n % base]; 
        // 254 / 16 = 15 , 10
        // 254 % 16 = 14 из конверта 14 элемент - это E
    }
}

document.writeln(toStr(254, 16));
//итого получается FE */

//СОБЫТИЯ и ОБРАБОТЧИК СОБЫТИЯ
//смотри еще в index.html

/* function loadStr(){
    alert("Страница была загружена");
}

let m = document.getElementById("mes");
function over(){
    m.style.color = "red";
}
function out(){
    m.style.color = "black";
}

function change(){
    let id = document.querySelector("h2");
    id.style.color = "blue";
}

function randomBg(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.background = `rgb(${r}, ${g}, ${b})`
}

let newImg = document.getElementById("newImg");

function on(){
    newImg.src = "night.png";
}

function off(){
    newImg.src = "day.png";
} */

//let but = document.getElementById("but");

/* function hello(){
    alert("Thank You");
}
but.onclick = hello; */

/* let hex = "0123456789ABCDEF";
console.log(hex);
let button = document.getElementById("btn");
let color = document.querySelector(".color");

button.onclick = function(){
    let hexColor = generateHex();
    console.log(hexColor);
    color.textContent = hexColor;
    document.body.style.background = hexColor;
}

function generateHex(){
    let hexColor = "#";
    for(let i = 0; i < 6; i ++){
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
} */

/*     function change(id){
        id.innerHTML = "Новый текст";
        id.style.color = "red";
    } */

/* function setColor(color){
    document.body.style.background = color.className;
} */

let newImg = document.getElementById("star");

function showImage() {
    newImg.style.display = 'block'; // Показываем
    }

function hideImage() {
    newImg.style.display = 'none';  // Прячем
    }
