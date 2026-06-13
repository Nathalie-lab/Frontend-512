// let firstName = "Admin"; 
// var, let, const

/* console.log("Третий скрипт");
console.log(firstName);

let age = 25;
console.log(age);

let a_$30 = "Hello";
console.log(a_$30); */

// ПЕРВЫЙ СПОСОБ - СНЕЙК СПОСОБ
/* let last_name = "Au revoir";
console.log(last_name); */

// ВТОРОЙ СПОСОБ - КЭМЭЛ СПОСОБ
/*let lastName = "Au revoir";
console.log(lastName);*/

/* let first = 5;
console.log(first, typeof(first)); */
// console.log(first, typeof first);
/* let second = 5.4;
console.log(second, typeof(second));
let third = "Hello!";
console.log(third, typeof(third)); */

/* let b = 5; Инициализация
b = 10;
b = "Hello";
console.log(b); */

/* let a;
a = 10;
console.log(a); */

/* let str1 = "Двойные кавычки";
let str2 = 'Одинарные кавычки';
console.log(str1 + " " + str2);
 */

/* let str1 = "Двойные \
кавычки";
let str2 = 'Одинарные \nкавычки';
console.log(str1 + " " + str2); */

/* let str = "Данные для входа:\nВаш логин: 'admin'";
console.log(str); */

/* let str = "Данные для входа:\nВаш логин: \"admin\""; экранирование кавычек
console.log(str); */

/* let str = "E:\\Frontend512\\folder\\file.txt"
console.log(str); */

// Табуляция
/* let str1 = "Новый\tтекст.";
console.log(str1); */

// поддерживают многострочный текст и возможность встроить другие переменные
/* let a = 5;
let str = `Обратные ${a} ${a + 2} кавычки`; 
console.log(str); */

// МОДАЛЬНОЕ ОКНО
// let firstName = "Nathalie";
// alert("Сообщение");
// alert(`Hello, ${firstName}!`)
// alert("Hello, " + firstName);


                                                                                            // ЗАДАЧА №1
// Решение 1
/* let days = 365;
let earth = "Земля";
let people = "7 млрд.";
let sun = "Солнца";
alert("Мы живем на планете " + earth + ", она делает один оборот вокруг " + sun + " за " + days + " дней" + ". Население нашей планеты составляет примерно " + people + " человек.") */

// Решение 2
/* let day = 365;
let planet = "Земля"
let person = "7 млрд."
let sunny = "Солнца"
alert(`"Мы живем на планете ${planet}, она делает один оборот вокруг ${sunny} за ${day} дней. Население нашей планеты составляет примерно ${person} человек."`) */

/* const week =7;
console.log(week); */

// confirm("Знаете ли вы HTML?");

/* let res = confirm ("Знаете ли вы HTML?");
console.log(res);
if (res){
    alert("Пора учить JavaScript");
} else {
    alert("Нужно выучить HTML");
} */


// OK = true
// Отмена = false

// console.log(confirm, typeof res);

// Неопределённый тип данных
/* let a;
console.log(a, typeof a); */

/* let a = null;
console.log(a, typeof a); */

/* let res = prompt("Ваше имя", "Виктор");
alert(`Привет, ${res}!`); */

/* let a = 12;
let b = 8;

console.log("+:", a + b);
console.log("-:", a - b);
console.log("*:", a * b);
console.log("/:", a / b);
console.log("**:", a ** b);
console.log("%:", a % b); */

                                                                                             // ЗАДАЧА №2
/* let a = +prompt("Введите первое число", 5);
let b = +prompt("Введите второе число", 7);
let c = +prompt("Введите третье число", 3);
let sum = a + b + c; */
/* let a = parseInt(prompt("Введите первое число", 5));
let b = Number(prompt("Введите второе число", 7));
let c = +prompt("Введите третье число", 3);
let sum = a + b + c;

console.log("Сумма:", sum);
console.log("Произведение:", a * b * c);
console.log("Среднее арифметическое:", sum / 3); */

/* console.log(parseInt("21.84"));
console.log(parseFloat("21.84"));
console.log(Number("21.84"));
console.log(Number("21.553334454").toFixed(1));
console.log(+"21.84"); */

/* let a = 23;
let b = +"6";  */
/* let b = Number("6");  */
// Особенность плюсов
/* console.log(a - b);
console.log(a * b);
console.log((a / b).toFixed(2));
console.log(a + b);
console.log("Результат: " + (a + b));  */
// Приоритет у скобок, потом конкатенация (это +)

                                                                                        // ЗАДАЧА №3
/* let a = Number(prompt("Введите число: ", 4)); 
console.log("Квадрат числа: " + a ** 2);                                                                                     
console.log("Куб числа: " + a ** 3);                                                                                     
console.log("Четвертая степень числа: " + a ** 4);   */                                                                                   

                                                                                        // ЗАДАЧА №4
/* let num = 4321;
let one, two, three, four;

console.log(num);

one = num % 10;
console.log(one);
num = parseInt(num / 10);

two = num % 10;
console.log(two);
num = parseInt(num / 10);

three = num % 10;
console.log(three);
num = parseInt(num / 10);

four = num % 100;
console.log(four);
num = parseInt(num / 10);

console.log(one * 1000 + two * 100 + three * 10 + four); */

                                                            // Домашнее задание - задача №1
let num = prompt("Введите 5-значное число: ", 39671);
console.log(num);
let a, b, c, d, e;

a = num % 10;
console.log(a);   
// 1
num = parseInt(num / 10);
// 3967

b = num % 10;
console.log(b);   
// 7
num = parseInt(num / 10);
// 396

c = num % 10;
console.log(c);   
// 6
num = parseInt(num / 10);
// 39

d = num % 10;
console.log(d);   
// 9

num = parseInt(num / 10);
// 3

e = num;
console.log(e);

// Произведение цифр: 1134
console.log("Произведение цифр: " + a * b * c * d * e);

// Среднее арифметическое 5.2
console.log("Среднее арифметическое: " + ((a + b + c + d + e) / 5));
