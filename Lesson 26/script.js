"use strict";

//Задача: Найти номер телефона
/* let string = "Мой номер телефона: +7 (999) 123-45-67. Номер телефона моего друга: +7 (987) 654-32-10.";
let regexp = /\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g;
let phoneNumbers = string.match(regexp);
console.log(phoneNumbers); */

//Найти время в разной записи
/* let regexp = /\d{2}[-:]\d{2}/g;
document.writeln("Завтрак будет в 09:00. Ужин будет в 21-30.".match(regexp)); */

//ОБратные символьные классы
//let str = "Я ищу совпадения в 2026 году 7894354635734 Hello_World ё^";
//let regexp = /\D/g; // ищет всё кроме цифр
//let regexp = /\S/g; // ищет все кроме пробельный символ, включая табуляцию и перенос строки
//let regexp = /\W/g; //ищет все кроме цифр, букв (латиницы) и символов подчеркивания
//document.writeln(str.match(regexp) + "<br>");

//b - поиск по границе слова

/* document.writeln("Hello, Java !".match(/\bJava\b/) + "<br>");
document.writeln("Hello, Java!".match(/\bJava!/) + "<br>");
document.writeln("Hello, JavaScript!".match(/\bJava!\b/) + "<br>"); */

/* document.writeln("1 23 456 78".match(/\b\d\d\b/g) + "<br>");
document.writeln("1 23 456 78".match(/\b\d{2}/g) + "<br>");
document.writeln("12_,34-,56,78".match(/\b\d{2}\b/g) + "<br>"); */

//document.writeln("Завтрак в 09:00 в комнате 123:456.".match(/\b\d{2}:\d{2}\b/g));

//let regexp = /[\p{Alpha}]/gu;
//let regexp = /[\p{L}]/gu;
//document.writeln(str.match(regexp) + "<br>");
//L or Alpha -для того, что найти все 
//u - включает поддержку Unicode
//let regexp = /[\p{L}\p{N}]/gu;
//document.writeln(str.match(regexp) + "<br>");

//^ - начало строки (перед последовательностью ничего не должно быть)
//$ - конец строки (после последовательности ничего не должно быть)

/* let html = "900";
let exp = /^\d{3}$/;
document.writeln(html.match(exp) + "<br>"); */

/* function capitalize(st){
     return st.replace(/^[а-я]/, u => u.toUpperCase());
}
console.log(capitalize("несколько слов")); */


/* КОЛИЧЕСТВО ПОВТОРЕНИЙ
+ => от 1 до бесконечности = {1, }
? => от 0 до 1 = {0,1}
* => от 0 до бесконечности повторений {0, }
*/

/* let st = "+7(903)-123-45-67";
document.writeln(st.match(/\d+/g) + "<br>"); */
//document.writeln("100 10 1".match(/\d0*/g) + "<br>");
//document.writeln("10, +23, -8, 5".match(/[+-]?\d+/g) + "<br>");
//document.writeln("0 1 12.345 7890".match(/\d+\.\d+/g) + "<br>");

//document.writeln("..Привет!...Как дела?.....".match(/\.{3,}/g));

/* function extractLinks(text){
    //let regexp = /https?:\/\/[^\s]+/g;
    let regexp = /https?:\/\/[\w.]+/g;
    return text.match(regexp) || [];
}
console.log(extractLinks("<a href='https://htmlbook.ru'> и <a href='https://webref.ru'>")); */

//Валидация электронного адреса
/* function validateEmail(email){
    let regexp = /^[a-z0-9%_.+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return regexp.test(email);
};
console.log(validateEmail("user@example.com")); */

/* function validateEmail(email){
    let regexp = /^[^\s]+@[^\s]+\.[^\s]{2,}$/i;
    return regexp.test(email);
};
console.log(validateEmail("user@example.com")); */

/* let st = `JavaScript
javascript
JAVASCRIPT`;
console.log(st.match(/^\w+/gm));
 */

//m - многострочный текст
// . обозначает любой символ
/* let re = /CS.3/;
document.writeln("Стандарт CSS3".match(re) + "<br>");
document.writeln("Стандарт CS-3".match(re) + "<br>");
document.writeln("Стандарт CS 3".match(re) + "<br>"); */

/* let st = "Hello\nworld";
console.log(st);
let exp = /Hello.world/s;
console.log(exp.test(st)); */

/* let regexp = /html|css|java(script)?/gi;
let st = "Сначала появился язык Java, затем HTML, потом JavaScript";
document.writeln(st.match(regexp)); */

/* let html = `
    <b>my text</b>
    <img src="222.jpg">
    <span>else</span>
    <img src="daffodils222.png">
    <img src="img.png">
    <img src="uno.gif">
`;

let ex = /\w+\.(jpg|jpeg|png|gif|bmp)/ig;
document.writeln(html.match(ex)); */

//Валидация номера телефона
/* function validatePhoneNumber(phoneNumber){
    let phoneRegex = /^(\+7|8)?\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

//let phone = "+79123456789";
//let phone = "89123456789";
let phone = "9123456789";
if(validatePhoneNumber(phone)){
    console.log("Номер телефона валиден!");
}else{
    console.log("Номер телефона невалиден!");
} */

//ЗАДАЧА

/* let regexp = /\w+(\++)?/gi;
//let regexp = /java(script)?|php|c(\+{2})?/gi;
let st = "Java, Javascript, PHP, C, C++";
document.writeln(st.match(regexp)); */

