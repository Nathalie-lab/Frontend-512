"use strict";

let str = "I'm a JavaScript \"programmer\"";
document.writeln(str + "<br>");

let str1 = "Я учу JavaScript. Мне нравится JavaScript";
str = str.concat(". ", str1);
document.writeln(str + "<br>")

/* console.log(str.split(" ", 3)); // разделяет на элементы по символу разделения и второе число, сколько берем элементов
console.log(str.split("."));
console.log("05-04-2026".split("-")); */

/* let arr = str.split("JavaScript"); // джаваскрипт тут разделить, он убирается
console.log(arr);

let st = arr.join("C++"); // объединяем строку через сиплюсплюс, это объединитель
document.writeln(st + "<br>");

//let text = st.replace("C++", "JavaScript"); //заменяет первое слово на второе слово
//document.writeln(text + "<br>");
let text = st.replaceAll("C++", "JavaScript"); //заменяет все
document.writeln(text + "<br>"); */

/* document.writeln(str.slice(0,3) + "<br>"); // от 0 индекса до 3 индекса // получилось I'm
document.writeln(str.slice(6) + "<br>"); // с 6 индекса 
document.writeln(str.slice(-23) + "<br>"); // с конца строки считаем
document.writeln(str.slice(-23, -10) + "<br>"); 

document.writeln(str.substring(0, 3) + "<br>"); 
document.writeln(str.substring(6) + "<br>"); 
//document.writeln(str.substring(-23) + "<br>"); //не работает с отрицательными индексами, делает его 0
document.writeln(str.substring(3, 0) + "<br>");  */

//ЗАДАЧА

//УСЛОВИЕ: background-color=> backgroundColor

/* let style = prompt("Введите свойство CSS: ", "background-color");
alert(def(style));

function def(st){
    let arr = st.split("-");
    console.log(arr);
    for(let i = 1; i < arr.length; i++){
       // arr[i] = arr[i].at(0).toUpperCase() + arr[i].slice(1);
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
} */


/* let hello = "  Hello  ";
console.log(">" + "hello" + "<");
let beforeLength = hello.length;
console.log("Длина строки до:", beforeLength);

hello = hello.trim(); // убирает пробелы 
console.log(">" + "hello" + "<");
let afterLength = hello.length;
console.log("Длина строки после:", afterLength);

//добавить символы до или после строки

let add = hello.padStart(15);
console.log(">" + add + "<");
add = hello.padEnd(15);
console.log(">" + add + "<"); */

/* document.writeln("hello" > "Hello"); //104 > 72
document.writeln("hello".codePointAt(0));
document.writeln("Hello".codePointAt(0));
document.writeln("Ё".codePointAt(0)); //1025
document.writeln("А".codePointAt(0)); //1040
document.writeln("Я".codePointAt(0)); //1071
document.writeln("а".codePointAt(0)); //1072
document.writeln("я".codePointAt(0)); //1103
document.writeln("ё".codePointAt(0)); //1105 */

//Ё ... А-Я а-я .. ё

/* document.writeln(String.fromCodePoint(104)); //передаем код символа
document.writeln(String.fromCodePoint(1025)); */

//ЗАДАЧА

/* let a = 97; 
let b = 122; 

if(a > b){
    for(let i = b; i <= a; i++){
        document.writeln(String.fromCodePoint(i));
    } 
}else{
    for(let i = a; i <= b; i++){
        document.writeln(String.fromCodePoint(i));
    }
} */

//ЗАДАЧА - делаем случайно генерируемый пароль

/* let shortest = 12;
let longest = 18;
let minASCII = 33;
let maxASCII = 126;

document.writeln("Ваш случайный пароль: " + randomPassword());

function randomPassword(){
    let randomLength = rand(shortest, longest);
    let res = ""; 
       for(let i = 0; i < randomLength; i++){
        let randomChar = String.fromCodePoint(rand(minASCII,maxASCII));
        res = res + randomChar;
        }
    return res;
}

function rand(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
} */


//РЕКУРСИЯ ИЛИ РЕКУРСИВНАЯ ФУНКЦИЯ

/* function elevator(n){
    if( n == 0){
        document.writeln("Вы в подвале<br>");
        return;
    }
    console.log(n);
    elevator(n-1);
    document.writeln(n + " ");
}

let n1 = prompt("На каком вы этаже: ", 5);
elevator(n1); */

//рекурсия рано или поздно должна закончиться - базовый случай

//ЗАДАЧА - вычислить сумму чисел от 1 до n

/* function sum(n){ //5
    if (n <= 1){
        return n;
    }
    return n + sum(n - 1); // 5  + 4 + 3 + 2 + 1
}

document.writeln(sum(5)); */

//ЗАДАЧА
/* let chislo = +prompt("Число: ", 2);
let stepen = +prompt("Степень:", 4);
document.writeln(chislo, " в степени ", stepen, " = ", degree(chislo, stepen));

function degree(ch, st){ // 2 4 // 2 3 // 2 2 // //2 1
    if(st){ // 4 //3 // 2 // 1
        return ch * degree(ch, st - 1); // 2 // 2 // 2 // 2
    }
    return 1;
} */

/* degree(2, 4): Степень есть (4), значит берем 2 и умножаем на результат degree(2, 3).
degree(2, 3): Степень есть (3), берем 2 и умножаем на результат degree(2, 2).
degree(2, 2): Степень есть (2), берем 2 и умножаем на результат degree(2, 1).
degree(2, 1): Степень есть (1), берем 2 и умножаем на результат degree(2, 0).
degree(2, 0): А вот тут st равно 0. Условие if(st) (где 0 — это ложь) не срабатывает, и функция просто возвращает 1.
Обратный отсчет (схлопывание):
1 * 2 = 2
2 * 2 = 4
4 * 2 = 8
8 * 2 = 16
Результат: 2 в степени 4 = 16. */

// факторил 5! = 1 * 2 * 3 * 4 * 5 = 120

let factorial = n =>{
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact *= i;
    }
    return fact;
}
document.writeln(factorial(5));

//ДОМАШНЯЯ ЗАДАЧА В РЕКУРСИИ

