// Вложенные циклы

/* let i = 0;
while(i < 4){
    document.writeln("+++<br>");

    let j = 0;
    while(j < 2){
        document.writeln("--<br>");
        j++;
    }

    i++;
} */

/* for (let i = 0; i < 4; i++){
    document.writeln("+++<br>");
    for(let j = 0; j < 2; j++){
        document.writeln("--<br>");
    }
} */

//====================================================Создаем таблицу при помощи JavaScript
/* document.writeln("<table border='1'>");
for( let i = 0; i < 5; i++){
    document.writeln("<tr>");
    for(let j = 0; j < 10; j++){
        document.writeln("<td>*</td>");
    }
    document.writeln("</tr>");
}
document.writeln("</table>"); */


/* let symbol = prompt("Введите символ", `*`);
let tr = prompt("Введите количество строк", 5);
let td = prompt("Введите количество столбцов", 10);
document.writeln("<table border='1' width='150'>");
for( let i = 0; i < tr; i++){
    document.writeln("<tr align='center'>");
    for(let j = 0; j < td; j++){
        document.writeln("<td>" + symbol + "</td>");
    }
    document.writeln("</tr>");
}
document.writeln("</table>"); */

//Делаем таблицу умножения

/* document.writeln(`<table border="1" width="300" align="center">`);
for( let i = 1; i < 11; i++){
    document.writeln(`<tr align="center">`);
    for(let j = 1; j < 11; j++){
        if(i % 2 == 0){
            document.writeln("<td bgcolor='red'>" + i * j + "</td>");
        }else{
            document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
        }
        if(j % 2 == 0){
            document.writeln("<td bgcolor='red'>" + i * j + "</td>");
        }else{
            document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
        }
    }
    document.writeln("</tr>");
}
document.writeln("</table>"); */

//Массивы

/* let a = 2;
let b = 6;
let c = 8; */

//==============Первый способ
/* let mas = [2, 5, 8];
document.writeln(mas[2]);
console.log(mas); */

/* let mas1 = [5]; // массив на 1 элемент со значением 5
console.log(mas1); */


//==============Второй способ
/* let mas2 = new Array(2, 6, 8);
document.writeln(mas2[2]);
console.log(mas2); */

/* let mas3 = new Array(5); //массив на 5 элементов, но без значений
console.log(mas3); */

/* let mas4 = [];
let mas5 = new Array();
console.log(mas4);
console.log(mas5); */

/* let mas = [2, 6, 8];
document.writeln(mas + "<br>");
console.log(mas);
document.writeln(mas.length); */

/* let arr = [1, 2, 3, 4, 5, 6];
document.writeln(arr + "<br>");
document.writeln(arr.length + "<br>"); */

/* arr.length = 3;
document.writeln(arr + "<br>");
document.writeln(arr.length + "<br>"); */

/* arr.length = 6;
document.writeln(arr + "<br>");
document.writeln(arr.length + "<br>");
document.writeln(arr[4] + "<br>");
console.log(arr); */

/* arr.length = 0;
document.writeln("Пустой массив: " + arr + "<br>");
document.writeln(arr.length + "<br>");
console.log(arr);
 */
//Последний индекс массива = длина массива - 1
// length = последний индекс массива + 1

/* let arr1 = [1, 2, 3, 4, 5, 6];
document.writeln(arr1 + "<br>");
document.writeln(arr1[arr1.length - 1] + "<br>");
console.log(arr1); */



/* let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6, 8, 10];
for(let i = 0; i < arr.length; i++){
    document.writeln(arr[i] **3 + "<br>")
} */

//Задача 1

//Первый вариант
/* let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6, 8, 10];
for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        document.writeln(arr[i] * -1 + "<br>");
    }else
    document.writeln(arr[i] + "<br>");
} */

//Второй вариант
/* let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6, 8, 10];
for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        arr[i] *= -1;
    }
    document.writeln(arr[i] + "<br>");
} */

//console.table(arr);

//Задача 2

/* let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6, 8, 10];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
    document.writeln(arr[i] + "<br>");
    sum += arr[i];
    }
}
document.writeln("Сумма: " + sum); */


/* let arr = new Array();
arr[0] = 15;
arr[1] = 6;
arr[2] = 9;
arr[3] = 4;

//arr[5] = +prompt("Введите число: ");
arr[6] = 4;
//arr[7] = "Hello";
console.log(arr); */

//Задача 3

/* let arr = new Array(5);
for(let i = 0; i < arr.length; i++){
    arr[i]= +prompt("Введите " + (i + 1) + " элемент массива: ");
} 
document.writeln(arr + "<br>");

for(let i = arr.length - 1; i >= 0; i--){
    document.writeln(arr[i] + " ");
} */

/* let arr = new Array(5);
for(let i = 0; i < arr.length; ){
    arr[i]= +prompt("Введите " + ++i + " элемент массива: ");
} 
document.writeln(arr + "<br>"); */

/* let arr = ['a', 'b', 'c'];
arr[0] = arr[0] + "!";
arr[1] = arr[1] + "!!";
arr[2] = arr[2] + "!!!";
console.log(arr); */

/* let arr = [1, 2, 3, 4];
arr[0]++;
++arr[1];
arr[2]--;
--arr[3];
console.log(arr); */


//Задача 4

/* let n = +prompt("Введите количество элементов массива: ", 4);
let mas = [];
for(let i = 0; i < n; i++){
    if(n >= 5){
        mas[i] = 0;
    }else{
        mas[i] = prompt("->")
    }
}
document.writeln(mas); */

//=============================================== Домашняя задача про разные цвета

document.writeln(`<table border="1" width="300" align="center">`);
    document.writeln("<tr align='center'>");
        for(let j = 0; j <= 10; j++){
            document.writeln(`<th align="center" bgcolor="green">` + j + `</th>`);
        }
    document.writeln("</tr>");

    for (let i = 1; i < 11; i++) {
        document.writeln("<tr>");
            document.writeln(`<th align="center" bgcolor="green">` + i + `</th>`);
                for (let j = 1; j < 11; j++) {
                    if ((j + i) % 2 != 0){
                        document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
                    }
                    else{
                        document.writeln("<td bgcolor='red'>" + i * j + "</td>");
                    }
                }
        document.writeln("</tr>");
    }
document.writeln("</table>");