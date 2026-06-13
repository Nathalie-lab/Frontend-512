"use strict";

/* document.image.border = "1";
document.writeln("<br>Ширина изображения: " + document.image.width);
document.writeln("<br>Ширина изображения: " + document.image.height);

document.image.width = 200; // меняем ширину
document.image.height = 50; // меняем высоту
document.writeln("<br>Ширина изображения: " + document.image.width);
document.writeln("<br>Ширина изображения: " + document.image.height);

document.image.src = "blue_star.png"; // изменили источник изображения */

/* document.image.addEventListener("click",changeImage);

let flag = 0;
function changeImage(){
    if(flag == 0){
        document.image.src = "blue_star.png";
        flag = 1;
    } else {
        document.image.src = "golden_star.png";
        flag = 0;
    }

} */

//============================== Слайдер =================================

/* let arr = new Array("2.jpg", "3.jpg", "4.jpg");

document.writeln("<input type='button' value='<' name ='left'>");
document.writeln("<img id='sl' src='"+ arr[0] + "'>");
document.writeln("<input type='button' value='>' name ='right'>");

document.getElementsByName("right")[0].addEventListener("click", setRight);
document.getElementsByName("left")[0].addEventListener("click", setLeft);

let i = 0;
let image = document.getElementById("sl");
function setRight(){
    i++;
    if(i == arr.length){
        i = 0;
    }
    image.src = arr[i];
}

function setLeft(){
    i--;
    if(i < 0){
        i = arr.length - 1;
    }
    image.src = arr[i];
} */

//======================= Электронные часы ===================================

/* let imgTime = ["c0.gif","c1.gif","c2.gif","c3.gif","c4.gif","c5.gif","c6.gif","c7.gif","c8.gif","c9.gif"];

let masImg = document.querySelectorAll("#block img");

clock();
function clock(){
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let seconds = time.getSeconds();
    getImg(hours,min,seconds);
    setTimeout(clock, 1000);
}

function getImg(h, m, s){
    masImg[0].src = imgTime[parseInt(h / 10)];
    masImg[1].src = imgTime[h % 10];

    masImg[3].src = imgTime[Math.floor(m / 10)];
    masImg[4].src = imgTime[m % 10];

    masImg[6].src = imgTime[Math.floor(s / 10)];
    masImg[7].src = imgTime[s % 10];
} */

// DOM

//alert(document.documentElement.innerHTML); // доступ к HTML
//alert(document.head.innerHTML); // доступ к head
//alert(document.body.innerHTML); // доступ к body

/* let myTitle = document.querySelector("h1").innerHTML;
console.log(myTitle);

let myTitle3 = document.querySelector("h3").firstChild;
let myTitle2 = document.querySelector("h3").lastChild;
console.log(myTitle3, myTitle2);

let myTitle4 = document.querySelector("h3").childNodes[0].nodeValue; //тут получает массив
console.log(myTitle4);

document.querySelector("h1").innerHTML = document.querySelector("h3").innerHTML; */

/* let myTitle = document.querySelector("h1");
//alert(myTitle.nodeName); // H1
alert(myTitle.nodeType); // 1 */

/* let myTitle = document.querySelector("h1").firstChild;
alert(myTitle.nodeType); // 3 */

/* let elem = document.querySelector("#root");
let tag = document.createElement("p"); // <p></p>
let node = document.createTextNode("Новый текст!!!"); // "Новый текст!!!"
tag.append(node); //<p>"Новый текст!!!"</p>
elem.append(tag); // добавляет новый элемент последним дочерним элементом внутри родительского
elem.prepend(tag);// добавляет новый элемент первым дочерним элементом внутри родительского
elem.before(tag);//добаляет новый элемент до выбранного id
elem.after(tag);//добаляет новый элемент после выбранного id

elem.replaceWith(tag); // заменяет новым элементом выбранный id */

//РАЗВЕРНУТЫЙ И СВЕРНУТЫЙ СПИСОК

/* let tree = document.querySelector(".tree");
for(let li of tree.querySelectorAll("li")){
    let span = document.createElement("span"); // <span></span>
    li.prepend(span); //<li><span></span>...</li>
    span.append(span.nextSibling);//после спана находится текст и мы его кладем в спан так как он некст сиблинг
} */

//tree.addEventListener("click", function(event){
/*     if(event.target.tagName != "SPAN"){
        return;
    } */
/*     let childrenContainer = event.target.parentNode.querySelector("ul");
    if(!childrenContainer){
        return;
    }
    childrenContainer.hidden = !childrenContainer.hidden;
}) */
//сравнение в верхнем регистре span SPAN


//======================================ДОМАШНЕЕ ЗАДАНИЕ=======================

let but = document.querySelector("#btn");
but.addEventListener("click", onChange);

function onChange(){
    let ch = document.getElementById("change").value;
    let on = document.getElementById("on").value;

    let a = document.getElementById("image" + ch);
    let b = document.getElementById("image" + on);

    let temp = a.src;
    a.src = b.src;
    b.src = temp;
}

//меняем местами значения
/* let a = 5;
let b = 7;
let temp = a;
a = b;
a = temp;  */