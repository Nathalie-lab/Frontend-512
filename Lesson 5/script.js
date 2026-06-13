"use strict";
//======================================================= Задача

//===============================Вариант 1
/* let sum = 0;
let n;
let count = -1;
let max = 0;

do{
    n = +prompt("Введите число");
    sum += n;
    count ++;
    if(max < n){
        max = n;
    }
}while(n != 0);

document.writeln("Среднее арифметическое: " + sum / count + "<br>");
console.log("sum", sum);
console.log("count", count);
document.writeln("Максимальное число: " + max);*/

//===============================Вариант 2
/* let n = +prompt("Введите число", 1);
let max = n; // 4
let min = n; // 4
let sum = n;
let count = 0;
while ( n != 0){
    n = +prompt("Введите число"); // 9 3 11 0
    sum += n;
    count ++;
    if(max < n && n != 0){ //4 < 9 true // 4 < 11 true
        max = n; // 9 // 11
    }
    if(min > n && n != 0){ // 4 > 9 false // 4 > 3 true
        min = n; // false // min = 3
    }
}
document.writeln("Максимальное число: " + max + "<br>");
document.writeln("Минимальное число: " + min + "<br>");
document.writeln("Среднее арифметическое: " + (sum / count).toFixed(2) + "<br>");
console.log("sum", sum);
console.log("count", count); */

//===============================КЛЮЧЕВЫЕ СЛОВА BREAK И CONTINUE
/* let res = 1;
do{
    let n = +prompt("Введите число");    

    if(n < 0){
        break;
    }
    if(n == 0){
        continue;
    }

    res *= n;
}while(true);

console.log("Произведение", res); */


/* let i = 0;
do{
    if( i == 6){
        break
    }
    if(i == 3){
        i++;
        continue;
    }
    document.writeln(i + " ");
    i++;
}while(i < 10); */

//============================ Задача 3
//Вариант 1
/* let res = 1;
do{
    let num = prompt("Введите число");
    if( num == 0){
        break;
    }else{
        res *= num;
    }
}while(true);
document.writeln("Произведение: " + res + "<br>");
 */

//Вариант 2
/* let res = 1;
let num;
do{
    num = prompt("Введите число");
    if( num != 0){
        res *= num;
    }

}while(num != 0);
document.writeln("Произведение: " + res + "<br>"); */

//Вариант 3
/* let res = 1;
let num;
do{
    num = prompt("Введите число");
    if( num == 0){
        continue;
    }
    res *= num;
}while(num != 0);
document.writeln("Произведение: " + res + "<br>"); */

// for (цикл со счетчиком)

/* for(инициализцая переменной; проверка условия; изменение переменной){
    тело цикла;
} */

/* for(let i = 1; i <= 12; i++){
    if (i == 3){
        continue;
    }
    if(i == 6){
        break;
    }
    document.writeln(i + "<br>"); 
} */

//=====================================Задача 4

/* let n = prompt("n = "); // количество элементов
let sum = 0;
let count = 0;

for(let i = 0; i < n; i++){
    let num = +prompt("-> ");
    document.writeln(i + "<br>");
    sum += num;
    if(num != 0){
        count++;
    }
}
console.log(sum);
console.log(count);

document.writeln("Среднее арифметическое: " + (sum / count).toFixed(2) + "<br>"); */

/* let i = 1;
for( ; ; ){
    if( i == 7){
        break;
    }
    document.writeln(i + "<br>");
    i++
} */



// Строгий режим — "use strict" - указываем в начале документа - переводим в соременный режим

/* for(var i = 1; i < 6; i++){
    document.writeln(i + "<br>"); 
}
console.log(i); */

// =======================================Задача 5

/* let start = 5;
let end = 10;
let sum = 0;
let res = 1;

for(let i = start; i <= end; i++){
    if(i % 2 == 0){
        sum += i; 
    }else{
        res *= i; 
    }  
}
    document.writeln("Сумма нечетных чисел: " + sum + "<br>"); 
    document.writeln("Произведение нечетных чисел: " + res + "<br>"); 
 */

 // ======================================= Задача 6

/*  let ch = +prompt("Введите число: ");
document.writeln("Исходное число: " + ch + "<br>");
for(let i = 1; ;  i*=10){ 
    let res = parseInt(ch / i); // 321 / 1 = 321// 321 / 1*10 = 32 // 321 / 10*10 = 3
    if(res == 0){
        break;
    }
    document.writeln(res % 10);
} */

// ======================================= Задача 7

/* let start = 5;
let end = 30;
let sum = 0;
for(let i = start; i <= end; i++){
    if(i % 3 == 0){
        sum += i;
    }
}
document.writeln("Сумма: " + sum); */

//============================================================= Домашняя задача про линию

let num = +prompt("Введите количество символов: ", 7);
let type = prompt("Введите тип символа: ", `@`);
let orient = prompt("Введите ориентацию линии ( 0 - горизонтальная, 1 - вертикальная): ");

for( let i = 1; i <= num; i++){
    if(orient == 0){
    document.writeln(type);
    }
    else if (orient == 1){
    document.writeln(type + "<br>");
    }
    else{
       alert("Вы не ввели данные. Введите `0` или `1`!"); 
       break;
    }
}