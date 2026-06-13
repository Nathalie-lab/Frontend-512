//ЗАДАЧА

/* function showArrayContent(arrayToShow) {
    if(arrayToShow.length == 1){
        return arrayToShow;
    } else {
        let last = arrayToShow.pop();
        let str = arrayToShow.join(", ");
        let res = str + " и " + last;
        return res;
    }
}

let a = new Array('Текст');
let b = new Array('день', 'ночь');
let c = new Array('зима', 'весна', 'лето', 'осень');
alert(showArrayContent(a)); 
alert(showArrayContent(b)); 
alert(showArrayContent(c)); */


// Function Expression (функциональное выражение)

/* 

let func = function(аргументы){
    // тело функции
    }
    func (параметры);

*/

/* function sum1(a,b){
    return a + b;
}

let sum2 = function(a,b){
    return a + b;
}

alert(sum1(20, 30)); //50
alert(sum2(2, 3)); //5 */

// ЗАДАЧА
/* let average = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return (sum / arr.length).toFixed(2);
}

document.writeln(average([3,8,9,4,1,2,5]) + "<br>");
document.writeln(average([8,2,4,5]) + "<br>"); */

//ЗАДАЧА

/* let max = function(arr){
    let n = arr[0]; //3
    for(let i = 0; i < arr.length; i++){
       if (arr[i] > n){
        n = arr[i];
       }
    }
    return n;
}
document.writeln(max([3,8,9,4,1,2,5]) + "<br>");
document.writeln(max([1,2,5]) + "<br>"); */

//Immediately Invoked Function Expression (IIFE) - самовызывающаяся (фнонимная функция)

/* (function(){
    alert("Привет, мир!");
})() */

/* (function(n){
    alert(n * n);
})(4); */

// Arrow Function (стрелочная функция) - для сокращения синтаксиса

/* function test(a, b, c){
    let res = a + b + c;
    return res;
}
alert(test(2, 3, 4)); //9

let test2 = (a, b, c) => a + b + c;
alert(test2(1, 2, 3)); // 6 */

/* let hello = () => alert("Hello!");
hello(); */

//ЗАДАЧА
/* let double = n => n ** 2;
let arr = [5,3,8,2];
let res = [];
for(let i = 0; i < arr.length; i++){
    res[i] = double(arr[i]);
}
console.log(res); */

//ЗАДАЧА
/* let symbol = (count, a, b) => {
    for(let i = 0; i < count; i++){
        document.writeln(i % 2 ? b : a) // true false ? - тернарный оператор - условие = операнд 1 (тру): операнд 2 (фалс)
    }
    document.writeln("<br>");
}
symbol(9, "+", "-");
symbol(7, "X", "O"); */

//ЗАДАЧА

/* let change = list => {
    let last = list.pop();
    let first = list.shift();
    list.unshift(last);
    list.push(first);
    return list;
}

document.writeln(change([1,2,3]) + "<br>");
document.writeln(change([9, 12, 33, 54, 105]) + "<br>");
document.writeln(change(['с', 'л', 'о', 'н']) + "<br>"); */

//ЗАДАЧА
/* let a = 5;
let b = 7;
console.log("a =", a, "b =", b);

let temp = a;
a = b;
b = temp;

console.log("a =", a, "b =", b); */


/* let isGreater = (x, y) => x > y ? true : false;

document.writeln(isGreater(10,5) + "<br>");
document.writeln(isGreater(5,10) + "<br>"); */

//=======================================================================================================ПРОВЕРЯЕМ ПАРОЛЬ

/* let psw = prompt("Введите пароль:");

let checkPassword = password => {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;

    for(let ch of password){
        if("A" <= ch && ch <= "Z"){
            hasUpper = true;
        }
        if("a" <= ch && ch <= "z"){
            hasLower = true;
        }
        if("0" <= ch && ch <= "9"){
            hasNum = true;
        }
    }

    if(password.length >= 8 && hasUpper && hasLower && hasNum){
        return true;
    }
    return false;
}

if(checkPassword(psw)){
    document.writeln("Это надежный пароль");
} else{
    document.writeln("Это ненадежный пароль");
} */

//ЗАДАЧА С ФАКТОРИАЛОМ   
// 5! = 1*2*3*4*5 = > 120

/* let factorial = n => {
    let fact = 1;
    for(let i = 1; i <= n ;i++){
        //console.log(i);
        fact *= i;
    }
    return fact;
}
document.writeln(factorial(7)); */

//ЗАДАЧА

/* function getNames(){
    let firstName = "Irina"; lastName = "Vetrova"; age = 25;
    return [firstName, lastName, age];
} */

/* let names = getNames();
console.log(names) */;
//let surname = names[1];
//console.log(surname);

// ================================ ДЕСТРУКТУРИЗАЦИЯ
/* let [name1, surname, year] = getNames();
console.log(name1);
console.log(surname);
console.log(year); */
//
//
//
//
//
//
//
//
//
//===================================== ДОМАШНЯЯ ЗАДАЧА №1

// Создать функцию для нахождения большего из двух чисел, что числа могут быть равны



//Вариант 1 - Function Expression (функциональное выражение)

/* let firstNum = +prompt("Введите первое число: ");
let secondNum = +prompt("Введите второе число: ");

let comparison = function(firstNum, secondNum){
        if(firstNum > secondNum){
           document.writeln("Большее число:" + firstNum + "<br>");
        }else if(firstNum == secondNum){
           document.writeln("Числа равны");
        }else{
           document.writeln("Большее число:" + secondNum + "<br>");
        }
} 
comparison(firstNum, secondNum); */


// Вариант 2 - Function Declaration

/* let firstNum = +prompt("Введите первое число: ");
let secondNum = +prompt("Введите второе число: ");

function comparison(firstNum, secondNum){
        if(firstNum > secondNum){
           document.writeln("Большее число:" + firstNum + "<br>");
        }else if(firstNum == secondNum){
           document.writeln("Числа равны");
        }else{
           document.writeln("Большее число:" + secondNum + "<br>");
        }
    } 
document.writeln(comparison(firstNum, secondNum));*/


// Вариант 2.1 - Function Declaration

/* let firstNum = +prompt("Введите первое число: ");
let secondNum = +prompt("Введите второе число: ");

function comparison(firstNum, secondNum){
        return firstNum === secondNum 
        ? "Числа равны" 
        : "Большее число: " + (firstNum > secondNum ? firstNum : secondNum);
    } 
document.writeln(comparison(firstNum, secondNum)); */


// Вариант 3 - Arrow Function - стрелочная функция

/* let firstNum = +prompt("Введите первое число: ");
let secondNum = +prompt("Введите второе число: ");

let comparison = (firstNum, secondNum) => {
        if(firstNum > secondNum){
           document.writeln("Большее число:" + firstNum + "<br>");
        }else if(firstNum == secondNum){
           document.writeln("Числа равны");
        }else{
           document.writeln("Большее число:" + secondNum + "<br>");
        }
}
comparison(firstNum, secondNum); */


// Вариант 3.1 - Arrow Function - стрелочная функция

/* let firstNum = +prompt("Введите первое число: ");
let secondNum = +prompt("Введите второе число: ");

let comparison = (firstNum, secondNum) => {
        return firstNum === secondNum 
        ? "Числа равны" 
        : "Большее число: " + (firstNum > secondNum ? firstNum : secondNum);
    } 
document.writeln(comparison(firstNum, secondNum)); */



//Как сократить функцию?
//Используем тернарные операторы
//условие ? значение если true : значение если false



//===================================== ДОМАШНЯЯ ЗАДАЧА №2

//Написать функцию нахождения максимального числа из массива



//Вариант 1 - Function Expression (функциональное выражение)

/* let mas = new Array(3);
for(let i = 0; i < mas.length; i++){
    let a = +prompt("Введите число: ");
    mas[i] = a;
}
document.writeln("Все введенные числа: " + mas + "<br>");

function max(mas){
    let num = mas[0];
        for(let i = 0; i < mas.length; i++){
            if(mas[i] > num){
              num = mas[i];
            }   
    }
        return num;
}

let res = max(mas);
document.writeln("Большее число: " + res); */


//Вариант 2 - Function Declaration

/* let mas = new Array(3);
for(let i = 0; i < mas.length; i++){
    let a = +prompt("Введите число: ");
    mas[i] = a;
}
document.writeln("Все введенные числа: " + mas + "<br>");

function max(mas) {
    let num = mas[0]; 
    for (let i = 1; i < mas.length; i++) {
        if (mas[i] > num){
            num = mas[i];
        }
    }
    return num;
}
let res = max(mas);
document.writeln("Большее число: " + res); */


//Вариант 3 -  Arrow Function

let mas = new Array(3);
for(let i = 0; i < mas.length; i++){
    let a = +prompt("Введите число: ");
    mas[i] = a;
}
document.writeln("Все введенные числа: " + mas + "<br>"); 

let max = (mas) => {
    let num = mas[0]; 
    for (let i = 1; i < mas.length; i++) {
        if (mas[i] > num){
            num = mas[i];
        }
    }
    return num;
};

let res = max(mas);
document.writeln("Большее число: " + res);   