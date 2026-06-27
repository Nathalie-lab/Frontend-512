"use strict";

/* const personData = [["name", "Сергей"], ["age", 37]];
console.log(personData);
const person = Object.fromEntries(personData);
console.log(person); */

//Если у вас есть массив, состоящий из двухэлементных подмассивов [ключ, значение], этот метод .fromEntries()легко соберет их в единую структуру

/* const first = null;
const second = {name: "Bob"};

function printName(person){
    console.log(person?.name);
} */ 

//вопросительный знак - оператор опциональной цепочки (optional chaining).Он позволяет безопасно читать свойство объекта без риска получить ошибку, если сам объект равен null или undefined.

//JavaScript проверяет часть слева (person). Если она равна null или undefined, выполнение выражения останавливается, и возвращается undefined.

//printName(second);
//printName(first); 
//Uncaught TypeError: Cannot read properties of null (reading 'name') НО с ? будет undefined

//Смотрим вариант с функцией в массиве объекта
/* const first = null;
const second = {
    name: "Bob",
    sayHi(){
        console.log(`Hi! I am ${this.name}`);
    }
};

function printName(person){
    console.log(person?.name);
} */

//printName(second);
//printName(first);
//second.sayHi();
//first.sayHi(); //Uncaught TypeError: Cannot read properties of null (reading 'sayHi')
//first?.sayHi(); // вопросительный знак - обозначает, что может быть или не быть что-то (в данном случае метод)

/* const obj = {name: "Ирина"};
Object.preventExtensions(obj); */
//obj.age = 25;

//запрет на расширение объекта Object.preventExtensions() -НО изменить значение можно:
/* obj.name = "25";
console.log(obj); */


/* const obj = {name: "Ирина"};
Object.freeze(obj);
obj.name = "Марина";
console.log(obj); */
//Object.freeze() - метод запрещает изменять значения в ключе. Любые взаимодействия с этим объектом невозможны.

//КОНТЕКСТ

//1 вариант
/* let person  = {
    age: 24,
    name: "Irina",
    job: "Programmer",
    displayInfo: function(ms){
        //console.log(this); // {age: 24, name: 'Irina', job: 'Programmer', displayInfo: ƒ}

        let self = this; // 1 вариант пересохранить в переменную

        setTimeout(function(){
            console.log(self);
            console.log("name: ", self.name);
            console.log("age: ", self.age);
            console.log("job: ", self.job);
        }, ms);
    }
} */
//console.log(this);

//person.displayInfo(2000);


//2 вариант
/* let person  = {
    age: 24,
    name: "Irina",
    job: "Programmer",
    displayInfo: function(ms){
        setTimeout(function(){
            console.log(this);
            console.log("name: ", this.name);
            console.log("age: ", this.age);
            console.log("job: ", this.job);
        }.bind(this), ms); // второй вариант с методом .bind(this) достаем из области видимости предыдущей
    }
}
person.displayInfo(2000); */


//3 вариант
/* let person  = {
    age: 24,
    name: "Irina",
    job: "Programmer",
    displayInfo(ms){
        setTimeout(() => { // третий вариант - стрелочная функция не создает новую область видимости
            console.log(this);
            console.log("name: ", this.name);
            console.log("age: ", this.age);
            console.log("job: ", this.job);
        }, ms); 
    }
}
person.displayInfo(2000); */


/* let h = document.querySelector("h1");
h.addEventListener("click", function(){
    this.style.color = "red";
}) */
//со стрелочной функцией не будет работать

//BOM - browser object model

//window.alert("Hello");
//window.document.querySelector("h1").style.color = "red";

/* let modal = document.querySelector("#modal");
 document.querySelector("#btn").addEventListener("click",
    function(){
        modal.style.display = "block";
    });

document.querySelector(".close").addEventListener("click", function(){
    modal.style.display = "none";
})

window.addEventListener("click", function(event){
    if(event.target == modal){
        modal.style.display = "none"; 
    }

}) */

//.clientWidth; .clientHeight; - клиентское окно

/* let w = document.documentElement.clientWidth;
let h = document.documentElement.clientHeight;

document.querySelector("#window").innerHTML = "Ширина окна: " + w + ", высота окна: " + h;

console.log("Ширина окна", window.innerWidth);
console.log("Высота окна", window.innerHeight); */


//let box = document.querySelector(".box");
/* let width = box.clientWidth;
let height = box.clientHeight; */

/* let width = box.offsetWidth;
let height = box.offsetHeight; */

/* let width = box.scrollWidth;
let height = box.scrollHeight; */

//console.log(width, height);

//Свернуть и развернуть блок
/* let flag = 1;
let hh = box.scrollHeight;
let off = box.offsetHeight ;

document.querySelector("button").addEventListener("click", function(){ */
/*     if(flag == 1){
        box.style.height = hh + "px";
        flag = 0;
    } else {
        box.style.height = off + "px";
        flag = 1;
    } */

/*     console.log(box.scrollTop);
        
}) */



//Машинка едет в соответствии с полосой прокрутки

/* window.addEventListener("scroll", myFunction);

function myFunction(){
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = winScroll / height * 100;

    document.querySelector("#myBar").style.width = scrolled + "%";

    document.querySelector("img").style.transform = "translate("+(document.documentElement.clientWidth -94) * scrolled / 100 + "px, 0px)";
} */

//document.documentElement.scrollTop — показывает, сколько пикселей страницы уже ушло вверх за пределы видимости
//.document.documentElement.scrollHeight — общая высота всей страницы, включая то, что сейчас скрыто
//.document.documentElement.clientHeight — высота видимой части экрана (окна браузера)
//.height — максимальный доступный путь прокрутки (вся высота минус один видимый экран)
//.scrolled — финальный результат в процентах (от 0 до 100).
//Если вы прокрутили страницу в самый низ, winScroll станет равен height, и scrolled выдаст 100. Если вы в самом верху — результат будет 0.

//Домашнее задание

//собираю информацию в отдельные переменные и вывожу их в консоли и закрываю окно
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let text = document.querySelector("#text").value;
    console.log("Имя: " + name);
    console.log("Email: " + email);
    console.log("Текст: " + text);

    modal.style.display = "none";
});

let modal = document.querySelector(".main-modal");
let container = document.querySelector(".container");

//кликаем на кнопку и открывается окно
document.querySelector("#btn").addEventListener("click", function() {
    modal.style.display = "block";
});

//когда кликаем на крестик
document.querySelector(".close").addEventListener("click", function() {
    modal.style.display = "none";
});

//когда кликаем на пространство вне окна
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
});
