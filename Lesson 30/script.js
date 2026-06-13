"use strict";

/* let registrationForm = document.getElementById("registrationForm");
let errorMessages = document.getElementById("errorMessages");

registrationForm.addEventListener("submit", function(event){
    event.preventDefault();

    let [username, email, password] = registrationForm.elements;
    errorMessages.innerHTML = "";

    if(!username.value.trim()){
        displayError("Имя пользователя обязательно!");
        return;
    }
    if(!email.value.trim() || !isValidEmail(email.value)){
        displayError("Введите адрес электронной почты!");
        return;
    }
    if(!password.value.trim() || !isStrongPassword(password.value)){
        displayError("Пароль должен состоять как минимум из 8 символов и как минимум одну заглавную букву, одну строчную букву, одну цифру и один спец.символ!");
    }

    alert("Registration successfull!");
    registrationForm.reset();
});

function displayError(message){
    errorMessages.innerHTML += `${message}`;
}

function isValidEmail(email){
    return /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
}
function isStrongPassword(password){
     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
} */

//Object 

/* let mas = [1,2];
console.log(mas[0]);
let obj = {one: 1, two: 2}; //ключи 
console.log(obj["one"]); */

/* let car = new Object();
let car1 = {};

console.log(car);
console.log(car1); */


// let car = new Object();
// car["type"] = "BMW";
// car["color"] = "white";
// console.log(car);
// //alert(car["type"]);
// document.writeln(car["type"] + " " + car["color"] + "<br>");

// let car1 = new Object();
// car1.type = "BMW";
// car1.color = "black";
// document.writeln(car1["type"] + " " + car1["color"]);

/* let menu1 = {};
menu1.width = 300;
menu1.height = 200;
menu1.title = "Menu";
document.writeln(menu1.title + ": " + menu1.width + " x " + menu1.height + "<br>");

let menu = {
    width: 300,
    height: 200,
    title: "Menu",
};
document.writeln(menu.title + ": " + menu.width + " x " + menu.height + "<br>");

//delete menu.width;
delete(menu.width);
document.writeln(menu.title + ": " + menu.width + " x " + menu.height + "<br>");

console.log("height" in menu);

menu.age = 25; */

/* let counter = 0;
for(let key in menu){
    document.writeln("<br>Ключ = " + key + ", значение = " + menu[key]);
    counter++;
} */

/* document.writeln("<br><br>Всего свойств: " + counter);
document.writeln("<br><br>Имена ключей: " + Object.keys(menu) + "<br>");
document.writeln("<br><br>Всего свойств: " + Object.keys(menu).length + "<br>"); */

/* Object.keys(menu).forEach(function(key){
    document.writeln("<br>" + key + ": " + menu[key]);
});

Object.values(menu).forEach(function(values){
    document.writeln("<br>" + values);
})

console.log(Object.values(menu));
console.log(Object.entries(menu)); */

/* for(let el of Object.entries(menu)){
    console.log(el[0], el[1]);
    document.writeln("<br>" + el);
} */

//Домашняя работа

// Получаем доступ к input по id
let emailInput = document.getElementById('email');


// Регулярное выражение для проверки
let emailRegex = /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

emailInput.addEventListener('input', checkEmail);
    
function checkEmail(){
    //Получаем, что пришло в поле ввода     
    let value = emailInput.value;

    // Если поле пустое, убираем подсветку ошибки
    if (value.length === 0) {
        emailInput.classList.remove('invalid');
        return;
    }

    // Проверяем текст на соответствие регулярному выражению
    if (emailRegex.test(value)) {
        emailInput.classList.remove('invalid'); // Совпадает
    } else {
        emailInput.classList.add('invalid'); // Не совпадает
    }   
};

