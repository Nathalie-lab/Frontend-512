"use strict";

//РАБОТА С КЛАССАМИ

/* let div = document.querySelector("div");
div.className = "alert";
let activeDiv = document.querySelector(".active");
//activeDiv.className = "hidden"; //это перезаписывает имя класса
activeDiv.classList.add("hidden"); // добавляет еще одно имя класса, не перезаписывает
//activeDiv.classList.remove("hidden");//удаляет имя класса
activeDiv.classList.toggle("hidden");// делает протвоположное - был класс удаляет, не было добавляет
activeDiv.classList.replace("active","alert");// заменяет  */

//АКТИВНЫЙ ПУНКТ МЕНЮ

/* let menu = document.querySelector(".menu");
let child = document.querySelectorAll(".menu li"); //внутри класса меню есть дочерние ли
menu.addEventListener("click", (event) =>{
    if(event.target.tagName === "LI"){
    for(let item of child){
        item.classList.remove("active");
    }
    event.target.classList.add("active"); //обращение к целевому объекту
}}) */

//Меню сворачивается и разворачивается

/* let menuElem = document.querySelector("sweeties");
let titleElem = menuElem.querySelector(".title");

titleElem.addEventListener("click", function(){
    menuElem.classList.toggle("open");
}) */

// ================================== ДЕЛАЕМ КИСТОЧКУ ======================
/* let brush = document.createElement("div");
brush.classList.add("brush");

brush.hidden = true;

document.addEventListener("mouseover", function(){
    brush.hidden = false;
});
document.addEventListener("mouseout", function(){
    brush.hidden = true;
});
document.addEventListener("mousemove", function(event){
   //console.log("Событие сработало", event.clientX, event.clientY);
   brush.style.left = `${event.clientX}px`;
   brush.style.top = `${event.clientY}px`;
   //console.log(event.buttons);
   if(event.buttons === 1){
        let paint = document.createElement("div");
        paint.classList.add("paint");
        paint.style.left = `${event.clientX}px`;
        paint.style.top = `${event.clientY}px`;
        document.body.append(paint);
   }
});
document.addEventListener("mousedown", function(event){
    //console.log("Событие сработало");
    brush.style.scale = "0.8";
});
document.addEventListener("mouseup", function(event){
    //console.log("Событие сработало");
    brush.style.scale = "1";
});

document.body.append(brush); */


//===========================================================================
/* let starImg = document.getElementById("blue-star");
console.log(starImg.id);
console.log(starImg.className);
console.log(starImg.alt);
console.log(starImg.title);
console.log(starImg.src);
console.log(starImg.getAttribute("src"));
starImg.title = "Новый текст подсказки"
starImg.setAttribute("src", "golden_star.png");
//starImg.removeAttribute("src");
console.log(starImg.hasAttribute("src"));
console.log(starImg.getAttribute("data-star"));

console.log(starImg.dataset.star); //обращение к пользовательскому аттрибуту */

//ФИЛЬТРАЦИЯ И ПАГИНАЦИЯ

 let lengthPath = 5;
let pagination = document.querySelector(".pagination");
let product = document.querySelector(".product-cover");
let data = new Array(18);
let filter = document.querySelector(".buttons");

for(let i = 0; i < data.length; i++){
    data[i] = document.createElement("div");
    data[i].classList.add("card");
    if(i % 3){
        data[i].classList.add("blue");
    }else{
        data[i].classList.add("grey");
    }
    let node = document.createTextNode(i + 1);
    data[i].append(node);
    product.append(data[i]);
}

let chunks = splitParts(data);
renderChunks(0);
renderPagination();
pagination.addEventListener("click", event => {
    let item = event.target.closest(".pagination-item");
    if(item){
        let active = pagination.querySelector('.pagination-item.active'), part;
        if(item.classList.contains("item-prev") || item.classList.contains("item-next")){
            if(item.classList.contains("disable")){
                return false;
            }
            part = +active.dataset.part;
            part = item.classList.contains("item-prev") ? part - 1 : part + 1;
            renderChunks(part);

            active.classList.remove("active");
            pagination.querySelector(`.pagination-item[data-part="${part}"]`).classList.add("active");
        }else {
             active.classList.remove("active");
             item.classList.add('active');
             part = +item.dataset.part;
             renderChunks(part);
        }
        let prev = pagination.querySelector(".pagination-item.item-prev");
        let next = pagination.querySelector(".pagination-item.item-next");

        if(prev.classList.contains('disable')){
            prev.classList.remove("disable");
        }
        if(next.classList.contains('disable')){
            next.classList.remove("disable");
        }

        if(part === 0){
            prev.classList.add("disable");
        }
        if(part === chunks.length - 1){
            next.classList.add("disable");
        }
    }
});

function splitParts(arr){
    if(arr.length > lengthPath){
        let chunks = [];
        for(let i = 0; i < arr.length; i+= lengthPath){
            chunks.push(arr.slice(i, i + lengthPath));
        }
        return chunks;
    }else{
        return arr;
    }
}

function renderChunks(part){
    if(part >= 0 && part <= chunks.length){
        product.innerHTML = "";
        chunks[part].map(elem => product.append(elem));
    }else{
        return false;
    }
}

function renderPagination(){
    if(chunks.length > 1){
        chunks.map((elem, i) => pagination.insertAdjacentHTML("beforeend", `<li class='pagination-item${i === 0 ? " active" : ""}' data-part="${i}"><a href="#">${i + 1}</a></li>`));

        pagination.insertAdjacentHTML("afterbegin", "<li class='pagination-item item-prev disable'><a href='#'>prev</a></li>");

        pagination.insertAdjacentHTML("beforeend", "<li class='pagination-item item-next'><a href='#'>next</a></li>");
    }
}

filter.addEventListener("click", event => {
    let btn = event.target.closest(".btn");
    pagination.innerHTML = "";
    if(btn){
        if(btn.dataset.filter !== "all"){
            chunks = splitParts(data.filter(elem => elem.classList.contains(btn.dataset.filter)));
        }else{
            chunks = splitParts(data);
        }
    }
    renderChunks(0);
    renderPagination();
}) 