"use strict";

// string - строка - неизменняемый тип данных

/* let str = "I'm a JavaScript \"programmer\""; //I 0 // \ НЕ СЧИТАЕТСЯ  // ' 1 // m 2
document.writeln(str + "<br>");
document.writeln(str[2] + "<br>"); */

//str = str[2] + "y"; // можно только перезаписать
//document.writeln(str + "<br>");

//document.writeln(str.length + "<br>"); // определить длинну строки. Считаются пробелы, кавычки и буквы

//ЗАДАЧА по строкам

/* УСЛОВИЕ: Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте.

Строка:
let s = "абббабввбабвбвббабвббабв";

Результат:
Символ 'а' встретился 5 раз
Символ 'б' встретился 13 раз
Символ 'в' встретился 6 раз */


/* let s = "абббабввбабвбвббабвббабв";
countLetters(s);

function countLetters(st){
    let letters = ["а", "б", "в"];
    for(let i = 0; i < letters.length; i++){
        let count = 0;
        for(let j = 0; j < st.length; j++){
            if(st[j] == letters[i]){
                count++;
            }
        }
        document.writeln("Символ '" + letters[i] + "' встретился " + count + " раз <br>");
    }
} */


/* let s = "Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте";
 ;
countLetters(s);

function countLetters(st){
    let letters = ["а", "б", "в"];
    for(let i = 0; i < letters.length; i++){
        let count = 0;
        for(let j = 0; j < st.length; j++){
            if(st[j] == letters[i]){
                count++;
            }
        }
        document.writeln("Символ '" + letters[i] + "' встретился " + count + " раз <br>");
    }
} */


//=================== МЕТОДЫ СТРОКИ

/* let str = "I'm a JavaScript \"programmer\""; //I 0 // \ НЕ СЧИТАЕТСЯ  // ' 1 // m 2
document.writeln(str + "<br>");
document.writeln(str.length + "<br>"); // ДЛИНА */

/* document.writeln(str[6] + "<br>"); 
document.writeln(str.at(6) + "<br>"); // возвращает символ строки из указанной позиции, может поддерживать отрицательный индекс
document.writeln(str.at(-6) + "<br>");  */

/* for(let ch of str){ // работаем как с массивом и можем пройтись без указания индекса по всей строке
    console.log(ch);
} */

/* document.writeln(str.toUpperCase() + "<br>") // преобразование в ВЕРХНИЙ регистр
document.writeln(str.toLowerCase() + "<br>") // преобразование в НИЖНИЙ регистр
document.writeln(str + "<br>"); */

// ====================================== ЗАДАЧА про регистры

/* let n = prompt("Введите имя", "алЕксандр");
alert(first(n));

function first(st){
    let newStr = st.at(0).toUpperCase();

    for(let i = 1; i < st.length; i++){
        newStr += st.at(i).toLowerCase();
    }

    return newStr;
} */


/* let str = "I'm a JavaScript \"programmer\"";
document.writeln(str + "<br>");
let str1 = "Я учу JavaScript. Мне нравится JavaScript"; */

/* let a = "Hello";
let b = "World";
str = str.concat(". ", str1, ". ", a, ". ", b); // соединяем всё */

//str = str.concat(". ", str1);
//document.writeln(str + "<br>")

//let message = "hello_";
//document.writeln(message.repeat(3) + "<br>"); // какой-то элемент повторить несколько раз

//let m = "*";
//document.writeln(m.repeat(30) + "<br>");

//document.writeln(str.indexOf("JavaScript1") + "<br>"); // индекс указанного элемента // возвращает индекс, на котром находится подстрока или "-1", если ничего не найдено

//document.writeln(str.indexOf("JavaScript", 7) + "<br>"); // ищем с заданного индекса
//document.writeln(str.lastIndexOf("JavaScript") + "<br>"); // ищем с заданного индекса с конца

// ================ ЗАДАЧА на проверку @

/* let email;

do{
    email = prompt("Введите email: ", "test");
    if(email.indexOf("@") == -1){
        alert("Некорректный электронный адрес. Повторите операцию");
    }else{
        break;
    }
} while(true);

alert("Спасибо за сотрудничество!"); */

//Вариант 2

/* let email;
do{
    email = prompt("Введите email: ", "test");
    if(email.indexOf("@") == -1){
        alert("Некорректный электронный адрес. Повторите операцию");
        continue;
    }
        break;
} while(true);

alert("Спасибо за сотрудничество!"); */

//ДРУГИЕ МЕТОДЫ
/* let str = "I'm a JavaScript \"programmer\"";
document.writeln(str + "<br>");
let str1 = "Я учу JavaScript. Мне нравится JavaScript";
str = str.concat(". ", str1);
document.writeln(str + "<br>")
 */
/* document.writeln(str.includes("JavaScript", 7) + "<br>"); //ищет есть ли такое в строке с указанного индекса 
document.writeln(str.includes("JavaScript", 63) + "<br>"); // false  */

/* document.writeln(str.startsWith("JavaScript") + "<br>"); // начинается с указанного слова
document.writeln(str.startsWith("JavaScript", 6) + "<br>"); 
document.writeln(str.endsWith("JavaScript") + "<br>"); // заканчивается ли на указанное слово */


// ДОМАШНЯЯ ЗАДАЧА

let str = prompt("Введите число: ", "12345622245632");
let count = 0;
let ch = str[str.length - 1];

for(let i = 0; i < str.length; i++){
    if(str[i] == ch){
         count++;
    }
}
document.writeln("Последняя цифра/буква " + "'" + ch + "'" + " повторяется " + count + " раз" + "<br>");

//вопрос! если пользователь нажмет ОК на пустую строк, то выводится 0 раз, но если нет числа то понятно что ноль, как попросить ввести число. на знаки также !!!!!!! повторяется 6 раз, буквы также