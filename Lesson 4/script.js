/* document.writeln("Текст выведен в окно браузера");
document.writeln("<p>Текст <br> выведен <b>в окно</b> браузера</p>"); //может поддерживать html разметку внутри
document.writeln("<p><img src='1.jpg' alt='Лягушка'>Текст</p>"); */

//=========================ЦИКЛЫ В JAVASCRIPT -конструкция пвторения

//Цикл do ... while (цикл с пост-условием)

/* do {
    тело цикла (действия);
}while(условие); */

// Итерация - один шаг цикла

/* let i = 0; //переменная счетчик
do{
    document.writeln("Это номер: " + i + "<br>");
    i++;
}while(i < 5); */

/* let i = 1;
do{
    document.writeln("Квадрат числа " + ++i + " равен " + i ** 2 + "<br>");
    //i++;
}while(i < 7);
 */

/* let i = 0; 
do{
    document.writeln("Это номер: " + i + "<br>");
    i = i + 5;
}while(i <= 25); */

/* let i = 10; 
do{
    document.writeln("Это номер: " + i + "<br>");
    i--;
}while(i > 0);
 */

//======================================================================ЗАДАЧА
/* let i = 1;
do{
    if(i % 2 == 0){
        document.writeln(`i = ${i}<br>`);
    }
    i++;
}while(i <= 20); */

/* let i = 2;
do{
    document.writeln(`i = ${i}<br>`);
    i = i + 2;
}while(i <= 20); */

/* let i = 2;
do{
    document.writeln(`i = ${i}<br>`);
    i += 2;
}while(i <= 20);  */


//==============================================Задача

/* let start = +prompt("Введите начало диапазона:", 1);
let finish = +prompt("Введите конец диапазона:", 5);
let i = start;
let sum = 0;
do{
    if(i % 2 != 0) // i % 2 // i % 2 == 1 
    {
        //document.writeln(i + "<br>");
        sum = sum + i;
    }
    i++;
}while (i <= finish);

document.writeln("Сумма целых нечетных чисел: " + sum + "<br>"); */

/* let start = +prompt("Введите начало диапазона:", 1);
let finish = +prompt("Введите конец диапазона:", 5);
let sum = 0;
do{
    if(start % 2){
        sum += start;
    }
    start++;
}while (start <= finish);

document.writeln("Сумма целых нечетных чисел: " + sum + "<br>"); */

/* let a = 5; //глобальная переменная

if(a > 0 && a < 10){
    let b = 6; // локальная переменная - видна только там, где ее ввели
    document.writeln(a);
    document.writeln(b);
} */
    
//Цикл while (цикл с предусловием)
/* 
while(условие){
    тело цикла (действие);
} */

/* let i = 0;
while(i < 5){
    document.writeln("Это номер: " + i + "<br>");
    i++;
}

document.writeln("<br><br>");

let j = 0;
do{
    document.writeln("Это номер: " + j + "<br>");
    j++;
}while(j > 5) */

//Задача 

/* let count = prompt("Укажите количество звездочек", 7);
let i = 0;
while(i < count){
    document.writeln("*");
    i++;
} */

//Задача

/* let i = 1;
while (i <= 30 && i >= 1){
    m = i % 3
    if(m != 0){
    document.writeln(i);
    }
    i++;
} */

/* let i = 1;
while(i <= 30){
    if(i % 3){
      document.writeln(i + "<br>");
    }
    i++;
} */
 

//Задача
/* let start = +prompt("Введите начальное число диапазона: ", 5);
let finish = +prompt("Введите конечное число диапазона:", 10);
let i = start;
let c = 1;
while (i <= finish){
    c = c * i;
    i++;
}
document.writeln("Произведение: " + c + "<br>"); */

/* let i = 3;
while(i){
    document.writeln(i + "<br>");
    i--;
} */

/* let n;
do{
    n = prompt("Введите целое число: ");
    document.writeln(n + "<br>");
} while(n != 0); */

// ===================================== Домашние задачи ==================//

// Задача №1

/* let i = +prompt("Введите начальное число диапазона: ", 10);
let j = +prompt("Введите последнее число диапазона: ", 30);
let y = 1;
while(i <= j){
    if(i % 2){
        y = y * i;
    }
    i++;
}
document.writeln("Произведение нечетных чисел в заданном диапазоне: " + y) */

//Задача №2
let sum = 0; // сумма чисел, которые вводит пользователь
let count = 0; // число итераций = число на которое нужно поделить
let n; // числа, которые вводит пользователь
do{
    n = +prompt("Введите число:"); // 2 // 3 4 5 6 7 8 
    if(n != 0){ //2 не равен 0 // 3 4 5 6 7 8 не равны 0
       sum = sum + n; // 0 = 0 + 2 // 0 = 0 + 3 = 3 + 4 = 7 + 5 = 12 + 6 = 18 + 7 = 25 + 8 = 33
       count++; // 0 + 1 = 1 // 0 + 1 + 1 + 1 + 1 + 1 + 1 = 6
    }
}while(n != 0) // как только вводим 0 прекращается цикл

    let y; // переменная для среднего арифметического
   if (count > 0) { //1 // 6
    y = sum / count; // y = 2 / 1 = 2 // y = 33 / 6 = 5.5
    document.writeln("Среднее арифметическое: " + y + "<br>");
   }else{
    document.writeln("Вы не ввели числа");
   }
    
