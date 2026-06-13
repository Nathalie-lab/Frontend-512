"use strict";

// ОСТАТОЧНЫЙ ПАРАМЕТР - нельзя поставить в середину

/* function fn(a, b, ...args){
    console.log("a = " + a + ", b = " + b + ", args = " + args);
} */

//fn(1); // a = 1, b = undefined
//fn(1, 2); // a = 1, b = 2
//fn(1, 2, 3); // a = 1, b = 2

//Когда стоит остаточная функция, получается следующее:
//fn(1); // a = 1, b = undefined, args =
//fn(1, 2, 3, "A", "B", "C"); // a = 1, b = 2, args = 3,A,B,C


//Тренируемся использовать остаточную функцию / args может выступать в роли массива

//№1
/* function sum(...args){
    let totalSum = 0;
    for(let a of args){
        totalSum += a;
    }
    return totalSum;
}
console.log(sum(1,2,3)); //6
console.log(sum(5,7,9,6,8,2,3)); //40 */

//№2
/* function sum(...args){
    let totalSum = 0;
    for(let a of args){
        totalSum += a;
    }
    return totalSum;
}
console.log(sum(10, "Hi", null, undefined, 20)); // 10Hinullundefined20 */

//№3
/* function sum(...args){ // 10, "Hi", null, undefined, 20
    return args
    .filter(e => typeof e === 'number') // [10, 20]
    .reduce((previous, current) => previous + current); // 30
}
console.log(sum(10, "Hi", null, undefined, 20)); */


// Тренируем ...args
/* let combine = (...args) => args.reduce((previous, current) => previous + " " + current);
console.log(combine("Hello", "World", "!")); //Hello World ! */

//Значения для аргументов по умолчанию, если пользователь ничего не ввел

//№1
/* function hello(name){
    name = name || "stranger"; // undefined=false ИЛИ true=stranger
    document.writeln("Hello, " + name + "!<br>");
}
hello("Sergey");
hello(); */

//№2
/* function hello(name="stranger"){
    document.writeln("Hello, " + name + "!<br>");
}
hello("Sergey");
hello() */;

//№3
/* function fn(a = 0, b = 0){
    console.log(a + b);
}
fn(1,2);
fn(1);
fn(0); */


//Тренируем настройки по умолчанию

/* function rectangle(w = 300, h = 100, fon = "gold"){
    document.writeln("<div id ='shape'></div>");
    let id = document.getElementById("shape");
    id.style.width = w + "px";
    id.style.height = h + "px";
    id.style.background = fon;
} */

//rectangle(200, 100, "green");
//rectangle();


//№1
/* let j = 2; //глобальная переменная
function ch(){
    let j = 3; //локальная переменная
}
ch();
console.log(j); //2 */

//№2
/* let j = 2; //глобальная переменная
function ch(){
    j = 3; //локальная переменная - перезаписывается глобальная переменная
}
ch();
console.log(j); //3 */


//Вложенные функции

/* function func(num1, num2){
    function square(num){ //локальная функция и за пределами не видна
        return num * num;
    }
    return square(num1) + square(num2);
}
console.log(func(2, 3)); // 4 + 9 = 13 */

/* let num = 5;
function test(num1, num2){
    function func(){
        console.log(num1 + num2);
    }
    func();
}
test(5,2); */

//
/* function func(num1){
    return function(num2){
        return num1 + num2;
    }
}
console.log(func(1)(2)); */

//func(2)(3)(4)(5)() => [2,3,4,5]

//ЗАДАЧА
/* function func(num1) {
    return function (num2) {
        return function (num3) {
            return function (num4) {
                return function () {
                    return [num1, num2, num3, num4]
                }
            }
        }
    }
}
console.log(func(2)(3)(4)(5)()); */

//Можем в переменные можем положить другую функцию
/* function hello(){
    console.log("Привет");
}
//console.log(hello);
let fn = hello;
console.log(fn); */

//Замыкание - функция возвращает другую функцию и возвращает то, что объявлено в теле функции

/* function test(){
    let num = 5;
     return function(){
        console.log(num);
     }
}

let func = test();
//console.log(func);
func(); */


/* function outer(n){
    return function(x){
        return n + x;
    }
}
let add = outer(5);
console.log(add(10));

let add6 = outer(6);
console.log(add6(10)); */

/* Представь, что функция outer — это завод по производству роботов-помощников.
Создание робота (let add = outer(5)):
Ты приходишь на завод и говоришь: «Сделайте мне робота, который к любому числу всегда прибавляет 5». Завод выдает тебе робота (функцию), у которого в «голове» намертво записано число 5.
Работа робота (add(10)):
Ты даешь этому роботу число 10. Он берет свою «пятерку» из памяти, складывает с твоей десяткой и выдает 15.
Второй робот (let add6 = outer(6)):
Ты снова идешь на завод и просишь другого робота, который прибавляет 6. Завод выпускает нового робота. Он никак не связан с первым — у него в памяти лежит число 6.
Работа второго (add6(10)):
Даешь ему число 10, он прибавляет свою шестерку и выдает 16.
Суть (Замыкание):
Внутренняя функция как бы «берет с собой рюкзак» из того места, где она родилась. В этот рюкзак она кладет все переменные, которые были вокруг неё (в данном случае n). И даже когда она уходит из «родительского дома» (outer), содержимое рюкзака остается при ней. */


//Задача на замкнутую функцию

/* function test(city){
    let num = 0;
    return function(){
        num++;
        console.log(city, num); 
    }
}

let func1 = test("Москва");
func1();
func1();
func1();
let func2 = test("Сочи");
func2();
func1(); */

//================================= ЗАДАЧА
//Условие: Написать функцию, которая выбирает только значения между 3 и 6 включительно

/*  function isBetween(a, b){
        return function (x){
            return x >= a && x <= b;
        }
    }
    function isArray(arr){
        return function(x){
            return arr.includes(x);
        }
    }

let arr = [1,2,3,4,5,6,7];
console.log(arr.filter(isBetween(3,6)));

//Второе условие: написать функцию, которая выбирает только значения совпадающие с одним из элементов массива [1,2,10]

console.log(arr.filter(isArray([1,2,10]))); */

/* Объяснение для меня "на пальцах". 
Функция isArray запоминает массив-образец и проверяет, входит ли в него число.
isArray([1, 2, 10]) создает «фильтр», в рюкзаке у которого лежит массив [1, 2, 10].
arr.filter(...) берет каждое число из основного массива [1, 2, 3, 4, 5, 6, 7] и спрашивает у этого фильтра: «Ты подходишь под [1, 2, 10]?» */


//========================= ДОМАШНЯЯ ЗАДАЧА ПРО КОПЕЙКИ

/* function isBetween(a, b, c){ // делаю диапазон от 1 до 99

        if (c < a || c > b) {
        return "Ваше число " + c + " не входит в диапазон " + "<br>";}

        let word; // типа контейнер для того, чтобы сохранить слово копейка

        //11 12 13 14 копеек
        if (c % 100 >= 11 && c % 100 <= 14) {
            word = "копеек";}
        // кончается на 2 3 4 копейки
        else if (c % 10 >= 2 && c % 10 <= 4) {
            word = "копейки";}
        //кончается на 1
        else if (c % 10 === 1) {
            word = "копейка";} 
        //кончается на 0 5 6 7 8 9
        else {
            word = "копеек";}

        return c + " " + word + "<br>";
}

document.writeln((isBetween(1,99, +prompt("Введите число: ")))); */

/* document.writeln((isBetween(1,99,11)));
document.writeln((isBetween(1,99,22)));
document.writeln((isBetween(1,99,1)));
document.writeln((isBetween(1,99,10))); */


//Вариант решения от преподавателя на занятии

let mas = ["копеек", "копейка", "копейки", "- число за пределами диапазона"];

let first = 1;
let last = 99;
let ch = +prompt("Введите количество копеек: ", 5);
console.log(ch, countKop(first, last, ch)(mas));

function countKop(start, end, num){
    let n = num % 10;
    let m = num % 100;
    
/*  let chislo;
    if (start <= num && num <= end ) {
        chislo = n == 1 && m != 11 ? 1 
        : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2 
        : 0
    } else{
        chislo = 3;
    }  */
 
    let chislo = !(start <= num && num <= end) ? 3
        : n == 1&& m != 11 ? 1
            : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
                : 0

    return arr => arr[chislo];
} 
