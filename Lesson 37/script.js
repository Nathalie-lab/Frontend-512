"use strict";

// ====================================== ПОЛИМОРФИЯ

/* class Shape{
    constructor(name){
        this.name = name;
    }
    calculateArea(){
        throw new Error("Метод calculate должен быть реализован");
    }
    describe(){
        console.log(`Это ${this.name} с площадью ${this.calculateArea()}`);
    }
}
//================================================ КРУГ
class Circle extends Shape{
    constructor(name, radius){
        super(name);
        this.radius = radius;
    }
    calculateArea(){
        return (Math.PI * this.radius ** 2).toFixed(2);
    }
}

//const circle = new Circle("круг", 5);
//circle.describe();

//========================================== КВАДРАТ
class Square extends Shape{
    constructor(name, side){
        super(name);
        this.side = side;
    }
    calculateArea(){
        return this.side ** 2;
    }
}

//const square = new Square("квадрат", 4);
//square.describe();

//=========================================== ТРЕУГОЛЬНИК
class Triangle extends Shape{
    constructor(name, base, height){
        super(name);
        this.base = base;
        this.height = height;
    }
    calculateArea(){
        return 0.5 * this.base * this.height;
    }
}

//const triangle = new Triangle("треугольник", 6, 3);
//triangle.describe();

const shapes = [
    new Circle("круг", 5),
    new Square("квадрат", 4),
    new Triangle("треугольник", 6, 3)
];

shapes.forEach(shape => shape.describe()); */


//СТАТИЧЕСКИЕ МЕТОДЫ И СВОЙСТВА
//Статические методы (ключевое слово static) в классах JavaScript — это методы, которые принадлежат самому классу, а не его отдельным экземплярам. Их создают для выполнения служебных или утилитарных задач, для которых не требуются данные конкретного объекта (например, создание даты или математические вычисления)




/* class Animal{
    static count = 0;

    constructor(name){
        this.speed = 0;
        this.name = name;
        Animal.count ++;
    }
 
    static counter(){
        return Animal.count;
    }

    run(speed){
        this.speed = speed;
        document.writeln(`${this.name} бежит со скоростью ${this.speed} км/ч.<br>`);        
    }
 
    stop(){
        this.speed = 0;
        document.writeln(`${this.name} стоит.<br>`);``        
    }
}

let animal_1 = new Animal("Мой питомец 1");
let animal_2 = new Animal("Мой питомец 2");
let animal_3 = new Animal("Мой питомец 2");
//console.log(animal_1.name);
//console.log(animal_2.name);
//console.log(Animal.count); //0
console.log(Animal.counter()); */




/* class User{
    static takenNames = [];

    static isNameTaken(name){
        return User.takenNames.includes(name);
    }

    constructor(name){
        this.name = name;
        User.takenNames.push(name);
    }
}

const user_1 = new User("Сергей");
const user_2 = new User("Марина");

console.log(User.takenNames);
console.log(User.isNameTaken("Сергей"));
console.log(User.isNameTaken("Алексей")); */




//console.log(Math.PI);


/* class MathUtils{
    static PI = 3.141592653589793;

    static sum(...number){
        return number.reduce((total, num) => total + num, 0);
    }

    static average(...number){
        return MathUtils.sum(...number) / number.length;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.sum(1,2,3,4,5,6,7,8,9));
console.log(MathUtils.average(1,2,3,4)); */



// =================================================== ПЛАНИРОВЩИК ЗАДАЧ

/* class Task{
    constructor(title = Task.getDefaultTitle()){
        this.title = title;
        this.done = false;
        Task.count++;
        //console.log("Происходит создание задачи");
    }

    static getDefaultTitle(){
        return "Задача";
    }

    get done(){
        return this._done === true ? "Задача выполнена" : "Задача не выполнена"
    }

    set done(value){
        if(value !== undefined && typeof value == 'boolean'){
           this._done = value; 
        } else{
            console.error("Ошибка! Укажите значение true или false");   
        }
    }

    complete(){
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`);
    }
}

Task.count = 0;

let task1 = new Task("Выучить JavaScript");
let task2 = new Task("Выучить Frameworks");
let task3 = new Task();


console.log(task1.title);
console.log(task2.title);
console.log(task3.title);

console.log("Созданных задач: " + Task.count);

task2.complete();

console.log(task1.done);
console.log(task2.done); */



/* class Header{
    constructor(image, h1, h2){
        this.src = image;
        this.h1 = h1;
        this.h2 = h2;
        this.out = "";
    }

    render(id){
        this.out = `
            <img src="${this.src}" alt="Изображение">
            <h1>${this.h1}</h1>
            <h2>${this.h2}</h2>
        `;
        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

class HeaderExt extends Header{
    constructor(image, h1, h2, tel){
        super(image, h1, h2);
        this.tel = tel;
    }

    get tel(){
        return this._tel;
    }

    set tel(value){
        let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if(reg.test(value)){
            this._tel = value;
        }else{
            alert("Некорректный номер теелфона");
        }
    }

    render(id){
       super.render(id);

       this.out += `<h3>${this.tel}</h3>`;
       document.querySelector(`#${id}`).innerHTML = this.out;

    }
}

let img = "https://images.icon-icons.com/1451/PNG/512/jsfolder_99356.png";
let header1 = new Header(img, "Заголовок", "Описание");

header1.render("header");


let img2 = "https://images.icon-icons.com/2107/PNG/512/file_type_nest_adapter_js_icon_130377.png";
let header2 = new Header(img2, "Заголовок2", "Другое описание");
header2.render("header2")

let img3 = "https://images.icon-icons.com/2107/PNG/512/file_type_ng_component_js_icon_130350.png";
let header3 = new HeaderExt(img3, "Заголовок3", "Другое описание2", "8 800 555 35 35");

//header3.tel = "Hello";
header3.tel = "+7 800 555-77-99"

header3.render("header-ext") */


//<canvas></canvas>

/* const canvas = document.getElementById("test");
const c = canvas.getContext("2d");

c.fillRect = "#369"
c.fillRect(10,10,60,50); */


//Домашняя работа

class Cards{ // это мой шаблон для создания карточек
    constructor(image, p){ // конструктор, который будет работать в New Cards (ниже). Принимает картинку и текст
        this.image = image;
        this.p = p;
    }
    render(id){ //метод. Принимает id туда, куда нужно вставить карточку.
        const container = document.querySelector(`#${id}`);
        if(container){   //ошибки нет, делаем структуру HTML
            //записываем новую HTML
            container.innerHTML = `
                <div class="card">
                    <img src="${this.image}" alt="Иконка">
                    <p>${this.p}</p>
                </div>
            `;
        } else { //если у нас ошибка
            console.error(`Элемент с id "${id}" не найден!`);
        }
    }
}

//Массив для вывода изображений все карточек
const images = [
    "imagesForCards/card1.png",
    "imagesForCards/card2.png",
    "imagesForCards/card3.png",
    "imagesForCards/card4.png",
    "imagesForCards/card5.png",
    "imagesForCards/card6.png",
    "imagesForCards/card7.png",
    "imagesForCards/card8.png",
    "imagesForCards/card9.png",
];

//Массив для вывода текста всех карточек
const cardTexts = [
    "Работа 24 часа в сутки, 7 дней в неделю, 365 дней в году",
    "Нет географических границ",
    "Ассортимент",
    "Безопасность",
    "Сокращение расходов на аренду и персонал",
    "Партнерские отношения",
    "Покупатель всегда на связи",
    "Комфортный выбор",
    "Удобство оплаты"
];

//Делаю цикл с подстановкой информации из массивов
cardTexts.forEach((text, index) => { //подставляю текст и порядковый номер элемента
    const id = `card${index + 1}`; //беру текущий индекс и добавляю 1. Массив начинается с 0, а мои id с цифры 1
    let currentImg = images[index]; //беру из массива картинок по индексу
    const card = new Cards(currentImg, text); // вызываю конструктор для создания экземпляра класса Cards. Добавляется картинка и текст
    card.render(id); // это должно вызывать метод .render(), в который передаю id (card1)- это чуть выше. Отрисовываем.
});