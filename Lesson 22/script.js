"use strict";

//ФИЛЬТРАЦИЯ И ПАГИНАЦИЯ

/* let lengthPath = 5;
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
}) */



// ================================== FORMS

//let form = document.querySelector("form");
//console.log(form.length); // количество вложенных тегов
//console.log(form.elements); // массив значений
//console.log(form.name);
//console.log(form.action);
//console.log(form.method);

/* document.form1.style.background = "red";
document.forms[0].style.margin = "20px";
document.forms["form1"].style.padding = "16px";
document.forms.form1.style.border = "2px dotted green"; */

/* let key = form.elements[0];
console.log(key);

let key2 = form.elements["name1"];
console.log(key2); */

/* document.form1.name1.style.color = "blue";
document.form1["name1"].style.background = "aqua";

let txt = document.querySelector("#text1");
let but = document.querySelector("button");

but.addEventListener("click", content);

function content(){
    alert(txt.value);
} */




/* 
let text = document.querySelector("input");
let output = document.querySelector("#length");

text.addEventListener("input", function(){
    output.textContent = text.value.length + " / 10";
}) */





/* let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    console.log("Сохраненные данные: " + form.elements.value.value);
    event.preventDefault(); // отменили автоматические действия, в нашем случае обновление страницы
}) */



//Форма регистрации

/* let form = document.querySelector("form"); //доступ к форме в документе

form.addEventListener("submit", function(event){ // при нажатии сабмит будет выполняться функция - ивент=событие пишем для ЧЕГО? просто так надо?

let login = document.getElementsByName("login")[0];
//console.log(login.value);
let pass = document.getElementsByName("psw")[0];
//console.log(pass.value);
let pass2 = document.getElementsByName("psw2")[0];
//console.log(pass2.value);
event.preventDefault();
if(login.value.length < 5 || login.value.trim() === ""){
    alert("Слишком короткий логин!");
}else{
    if(pass.value.length < 5 || pass.value.trim() === ""){
    alert("Слишком короткий пароль!");
    }else{
        if(pass.value === pass2.value){
           alert("Регистрация прошла успешно!");
        }else{
            alert("Пароли не совпадают!");
        }
    }
}}); */


// 2 ВАРИАНТ

let reg = document.querySelector(".registered");
let h2 = document.querySelector("h2");
let win = document.createElement("p");
h2.after(win);

reg.addEventListener("submit", function(event){
    event.preventDefault();

    let login = reg.login.value;
    let password = reg.psw.value;
    let password2 = reg.psw2.value;
    console.log(login);
    let errors = "";

    if(login == "" || password == "" || password2 == ""){
        win.className = "red";
        win.innerHTML = "Все поля должны быть заполнены";
        return;
    }

    if(password.length < 6){
        errors += "Слишком короткий пароль!<br>"
    }

    if(password != password2){
        errors += "Пароли не совпадают!<br>"
    }
    if(errors == ""){
        win.className = "green";
        win.innerHTML = "Регистрация прошла успешно"
            //Поля очищаются
        reg.login.value = "";
        reg.psw.value = "";
        reg.psw2.value = "";
    }else{
        win.className = "red";
        win.innerHTML = errors;
    }

})