// Операторы логического объединения

//&& - И (AND)

// true && true => true
/* if(5 == 5 && 5 > 2){
    console.log("TRUE");
}else{
    console.log("FALSE");
} */
//false && true => false
/* if(5 == 3 && 5 > 2){
    console.log("TRUE");
}else{
    console.log("FALSE");
} */
//true&&false=>false
/* if(5 > 2 && 5 == 3){
    console.log("TRUE");
}else{
    console.log("FALSE");
} */
// false && flase => false
/* if(5 > 12 && 5 == 3){
    console.log("TRUE");
}else{
    console.log("FALSE");
} */


// || - ИЛИ (OR) 

//true || true => true  
/* if(5 > 2 || 5 == 5){
    console.log("TRUE");
}else{
    console.log("FALSE");
} */
//false || true => true
/* if(5 > 12 || 5 == 5){
    console.log("TRUE");
}else{
    console.log("FALSE");
} */
//true || false => true
/* if(5 == 5 || 5 > 12){
    console.log("TRUE");
}else{
    console.log("FALSE");
} */
//false || false => false
/* if(5 > 12 || 5 == 3){
    console.log("TRUE");
}else{
    console.log("FALSE");
} */

//ЗАДАЧА

/* let age = prompt("Введите возраст");
if(age > 17 && age < 70){
    alert("Вы можете получать права");
}else{
    alert("Права не выдавать");
} */

/* let age = prompt("Введите возраст");
if(age < 18 || age > 70){
    alert("Права не выдавать");
}else{
    alert("Вы можете получать права");
} */

//Задача

/* let a = +prompt("Введите первую сторону:");
let b = +prompt("Введите вторую сторону:");
let c = +prompt("Введите третью сторону:"); */
/* if(a == b && b == c){
    alert("Треугольник равносторонний");
}
else if(a == b || b == c || c == a){
    alert("Треугольник равнобедренный");
}
else{
    alert("Треугольник разносторонний");
} */
/* if(a == b && b == c){
    alert("Треугольник равносторонний");
}
if(a == b || b == c || c == a){
    alert("Треугольник равнобедренный");
}
if(a != b || b != c || a != c){
    alert("Треугольник разносторонний");
} */


// ! - не (NOT)

/* console.log("Hello");
if("Hello"){
    console.log("true")
} */
/* console.log(!(7 == 5)); */

/* console.log(!!"Hello");  */
/* console.log(!!0); 
console.log(!!!0);  */

//Задача про ворон - рекомендуют писать на листочке, если не знаем с чего начать

/* let vorona = +prompt("Введите количество ворон на ветке:");

if (vorona >= 0 && vorona <= 9){
    if (vorona == 1){
        alert(`На ветке ${vorona} ворона`);
    }else if(vorona >= 2 && vorona <= 4){
        alert(`На ветке ${vorona} вороны`);
    }else{
        alert(`На ветке ${vorona} ворон`);
    }
}else{
    alert("Недопустимое значение");
} */

/* let vorona = +prompt("Введите количество ворон на ветке:");

if (vorona >= 0 && vorona <= 9){
    if (vorona == 1){
        alert(`На ветке ${vorona} ворона`);
    }
    if(vorona >= 2 && vorona <= 4){
        alert(`На ветке ${vorona} вороны`);
    }
    if(vorona >= 5 && vorona <=9 || vorona ==0){
        alert(`На ветке ${vorona} ворон`);
    }
}else{
    alert("Недопустимое значение");
} */


// конструкция выбора SWITCH
/* switch(условия){
    case значение_1:
        код;
    break;
    case значение_2:
        код;
    break;
    case значение_n:
        код;
    break;
    default:
        код;
} */

/* let a = +prompt("Введите число");
switch(a){
    case 1:
        alert("Код 1");
    break;
    case 2:
        alert("Код 2");
    break;
    case 3:
        alert("Код 3");
    break;
    default:
        alert("Я таких значений не знаю");
} */

/* let a = +prompt("Введите число");
switch(a){
    case 1:{
        alert("Код 1");
    }break;
    case 2:
        alert("Дополнительный код");
        alert("Код 2");
    break;
    case 3:
        alert("Код 3");
    break;
    default:
        alert("Я таких значений не знаю");
} */

//default может стоять в любом месте ,но после него должен стоять break
/* let a = +prompt("Введите число");
switch(a){
    case 1:
        alert("Код 1");
    break;    
    default:
        alert("Я таких значений не знаю");
    break;
    case 2:
        alert("Код 2");
    break;
    case 3:
        alert("Код 3");
}  */

/* let a = +prompt("Введите результат '2 + 2'");
switch(a){
    case 4:
        alert("Верно");
    break;   
    case 3:
    case 5:
        alert("Неверно");
    break;   
    default:
        alert("Я таких значений не знаю");
} */

/* let error = 500;

switch (error) {
    case 404:
        console.log("Страницы не существует");
        break;
    case 200:
        console.log("Запрос успешно обработан");
        break;
    case 500:
        console.log("Ошибка сервера");
        break;
    default:
        console.log("Неизвестная ошибка");
        break;
} */

/* let day = "суббота";

switch(day) {
    case "суббота":
    case "воскресенье": 
        alert("Выходной день");
        break;
    case "понедельник":
    case "вторник":
    case "среда":
    case "четверг":
    case "пятница":
        alert("Рабочий день");
        break;
    default:
        alert("Неизвестная ошибка");
        break;
} */

/* let m = +prompt("Введите номер месяца:");
let n; //глобальная переменная в глобальной области видимости
// в фигурных скобках - это тело switch
//локальная область видимости
switch(m){
    case 1: n="January"; break;
    case 2: n="February"; break;
    case 3: n="March"; break;
    case 4: n="April"; break;
    case 5: n="May"; break;
    case 6: n="June"; break;
    case 7: n="July"; break;
    case 8: n="August"; break;
    case 9: n="September"; break;
    case 10: n="October"; break;
    case 11: n="November"; break;
    case 12: n="December"; break;
    default:
        n = "Неправильный номер месяца"
}
alert("Вы ввели: " + n) */

/* let a = +prompt("Введите номер месяца: ");
let n;
switch (a) {
    case 1:
    case 2:
    case 12:
        n = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        n = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        n = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        n = "Autumn";
        break;

    default: n = "This month is not existed";
}

alert("Вы ввели месяц " + n); */

//Задача КАЛЬКУЛЯТОР

/* let operator = prompt("Действия: +, -, *, /, %:");
let num1 = +prompt(" Введите первое число: ");
let num2 = +prompt(" Введите второе число: ");

switch(operator){
    case "+":
        alert("Сумма: " + (num1 + num2));
        break;
    case "-":
        alert("Разность: " + (num1 - num2));
        break;
    case "*":
        alert("Произведение: " + num1 * num2);
        break;
    case "/":
        if(num2 == 0){
            alert("На ноль делить нельзя");
        } else{
        alert("Частное: " + num1 / num2);
        }
        break;
    case "%":
        if(num2 == 0){
            alert("Такая операция не допустима из-за нуля");
        } else{
            alert("Остаток от деления: " + num1 % num2);
        }
        break;
    default:
        alert("Я такого оператора не знаю");
} */

// =============================================================== Домашняя задача

let kop = +prompt("Введите, сколько у вас копеек: ");
let a = kop % 10;

if (kop >= 1 && kop <= 99) {
    if (kop >= 11 && kop <= 14){
        alert(`У вас ${kop} копеек`);
    }
    else if(a == 1) {
        alert(`У вас ${kop} копейка`);
    }
    else if(a >= 2 && a <= 4) {
        alert(`У вас ${kop} копейки`);
    }
    else {
        alert(`У вас ${kop} копеек`);
    }
}else {
    alert("Недопустимое значение");
}