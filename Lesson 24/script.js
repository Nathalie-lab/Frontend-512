"use strict";

//При нажатии кнопки цвета, чтобы менялся цвет фона

/* let choose = document.querySelector("input[type='button']");
choose.addEventListener("click", chooseColor); */

//Вариант 1
/* function chooseColor(){
    let f = document.forms.form3;
    for(let i = 0; i < f.radio2.length; i++){
        if(f.radio2[i].checked){
           document.body.style.background = f.radio2[i].value; 
        }   
    }
} */

//Вариант 2
/* function chooseColor(){
    let f = document.forms.form3;
    document.body.style.background = f.radio2.value; 
}   
 */

//Вариант 3
/* let f = document.forms.form3;
for(let i = 0; i < f.radio2.length; i++){
    f.radio2[i].addEventListener('change', chooseColor);
}

function chooseColor(){
    document.body.style.background = f.radio2.value; 
}  */

//Вариант 4
/* let f = document.forms.form3;
for(let i = 0; i < f.radio2.length; i++){
    f.radio2[i].addEventListener('change', chooseColor);
}

function chooseColor(event){
    document.body.style.background = event.target.value; 
} 
 */



//Выбираем язык программирования с радио-кнопками

/* let languages = document.querySelector("#languages");
let languageOptions = ["Python", "JavaScript", "C++", "Java"];

languages.innerHTML = languageOptions.map(language => `
    <div>
    <label for="${language}">
        <input type="radio" name="language" value="${language}" id="${language}">
        ${language}
    </label>
    </div>
`).join(" ");

let radioButtons = document.querySelectorAll('input[name="language"]');
for(let radioButton of radioButtons){
    radioButton.addEventListener("change", showSelectedLanguage);    
}
function showSelectedLanguage(){
    if(this.checked){
      document.querySelector("#languageOutput").textContent = `Вы выбрали: ${this.value}`
    }
} */



//Выпадающий список с городами и гербами

/* let city = document.querySelector("#city");
city.addEventListener("change", setImage); */

/* Свойства Select
select.options - коллекция из подэлементов <option> - массив
select.value - значение выбранного аттрибута в данный момент <option>
select.selectedIndex - номер(индекс) выбранного <option>
*/

/* function setImage(){
    let cities = city.selectedIndex;
    let options = city.options;
    let code = options[cities].value;
    console.log(code);

    let div = document.querySelector("#img");
    div.innerHTML = "<img src='"+code+".png'>"
} */



 //Двоичная система исчисления и складывание их значений
 
/* let select = document.querySelector("select");
let output = document.querySelector("#output");

select.addEventListener("change", function(){
    let number = 0;
    for(let i = 0; i < select.options.length; i++){
        let option = select.options[i];
        if(option.selected){
            number += Number(option.value);
        }
    }
    output.textContent = number;
}) */



//От выбора страны будет выбор городов

/* let countries = document.querySelector("#countries");
let ruCities = document.querySelector("#ru");
let belruCities = document.querySelector("#belru");

countries.addEventListener("change", function(){
    document.querySelector(".cities.active").classList.remove("active");

    if(this.value == "ru"){
        ruCities.classList.add('active');
    }
    if(this.value == "belru"){
        belruCities.classList.add('active');
    }
}) */

/* let option = new Option("Текст", "value", true, true);
console.log(option); */


//Диспетчер задач

/* let btnAdd = document.querySelector("#btnAdd");
let btnRemove = document.querySelector("#btnRemove");

let taskInput = document.querySelector("#task");
let taskList = document.querySelector("#taskList");

btnAdd.addEventListener("click", e => {
    e.preventDefault();

    if(taskInput.value.trim() === ""){
        alert("Введите название задачи");
        return;
    }

    let option = new Option(taskInput.value, taskInput.value);
    taskList.add(option, undefined);
    taskInput.value = '';
    taskInput.focus();
})

btnRemove.addEventListener("click", e => {
    e.preventDefault();

    let selectedTasks = [];
    for(let i = 0; i < taskList.options.length; i++){
        selectedTasks[i] = taskList.options[i].selected;
    }

    let index = taskList.options.length;
    while(index--){
        if(selectedTasks[index]){
            taskList.remove(index);
        }
    }
}) */


//Работа с файлом

/* let input = document.querySelector("input");
input.addEventListener("change", function(){
    if(input.files.length > 0){
        let file = input.files[0];
        console.log("Вы выбрали", file.name);
        if(file.type){
            console.log("У него тип", file.type);
        }
    }
}); */


//КАЛЬКУЛЯТОР БЕНЗИНА

/* let gas = document.querySelector(".gallon");
let petrol = document.querySelectorAll(".petrol");
let res;

for(let i = 0; i < petrol.length; i++){
    petrol[i].addEventListener("click", function(){
        let gallons = gas.value;
        let amount = this.getAttribute("data-pet");

        res = gallons * amount;
        let sum = document.querySelector(".sum");
        sum.innerHTML = res;
    })
} */


//Домашнее задание - КАЛЬКУЛЯТОР ДЕНЕГ

let valuta = document.querySelector(".money");
let currency = document.querySelectorAll(".currency");
let res;

for(let i = 0; i < currency.length; i++){
    currency[i].addEventListener("click", function(){
        let muchMoney = valuta.value;
        let amount = this.getAttribute("data-pet");

        res = (muchMoney / amount).toFixed(2);
        let sum = document.querySelector(".sum");
        sum.innerHTML = res + " " + this.value;
    })
}