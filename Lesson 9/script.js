"use strict";

// ЗАДАЧА

/* document.writeln("<div id='divSample'></div>");

let div = document.getElementById("divSample"); */
//let div = document.querySelector("#divSample");

/* div.innerHTML = "Дюбель — конструктивный элемент, который используется для укрепления винта или предмета на \
стене, на потолке или на полу в помещении или под открытым небом в различных материалах \
(бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С \
некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно \
целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных \
величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым \
отверстием), измеренным в миллиметрах. "; */

/* div.textContent = `Дюбель — конструктивный элемент, который используется для укрепления винта или предмета на
стене, на потолке или на полу в помещении или под открытым небом в различных материалах
(бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С
некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно
целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных
величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым
отверстием), измеренным в миллиметрах.`;

div.style.background = "#f0f";
div.style.color = "#99ffff";
div.style.width = "50%";
div.style.outline = "10px dotted #000";

div.className = "resetFont";
//let cl = document.getElementsByClassName("resetFont");
let cl = document.querySelector(".resetFont");

cl.style.fontSize = "12pt";
cl.style.fontWeight = "bold";
cl.style.textDecoration = "line-through"; */

// ЯГОДЫ (ПРОДОЛЖЕНИЕ)

/* let el = document.querySelector("h2");
el.style.color = "red"; */

//1 ВАРИАНТ
/* let el2 = document.querySelectorAll("h2")[1];
el2.style.color = "purple"; */

//2 ВАРИАНТ
/* let el2 = document.querySelector("h1 + h2");
el2.style.color = "purple";

let lists = document.querySelectorAll("li");
//console.log(lists.length);
for(let i = 0; i < lists.length; i++){
    lists[i].innerHTML += "!!!";
}

let purple = document.querySelectorAll(".purple li");
for(let i = 0; i < purple.length; i++){
    purple[i].style.color = "purple";
    purple[i].innerHTML += "???";
}

//let m = document.querySelectorAll(".red li")[1];
let m = document.getElementsByClassName("red")[0].getElementsByTagName("li")[1];
m.style.color = "orange"; */

//=========================================================== МЕТОД CLOSEST

/* let el = document.querySelector(".elem");
console.log(el.closest(".content"));

//el.style.color = "green";
//let blue = el.closest(".content");
//blue.style.color = "blue";

console.log(el.closest(".container"));
console.log(el.closest("h1")); */


// ================================================ Особенные селекторы у querySelector

//let all = document.querySelectorAll("*")[6]; //выбирает все элементы
//let all = document.querySelectorAll("[class]")[2]; //выбирает по атрибуту
//let all = document.querySelectorAll("[class ~= 'two']"); //выбирает имени класса
//let all = document.querySelectorAll("[class ^= 'two']"); //выбирает класс, который начинается на cont
//let all = document.querySelectorAll("[class $= 'ner']"); //выбирает класс, который заканчивается на ner
//let all = document.querySelectorAll("[class *= 'ne']"); //выбирает класс, который имеет буквы ne
//let all = document.querySelectorAll(":empty"); //не вложенные теги
//console.log(all);

/* let title = document.querySelector("h1");
title.style.color = "red"; */


//========================== МЕТОДЫ МАССИВА 

/* let js = ["нужно", "учить", "JavaScript"];
document.writeln(js + "<br>");
console.log(js);

let last = js.pop();

console.log(last); //удалили последний элемент из массива и возвращает удаленный элемент, при этом урезает массив
console.log(js);

js.push("JavaScript", "!"); //добавляет элемент в конец массива, но передаем, что добавим
console.log(js);

console.log(js.shift()); //удаляет первый элемент массива и возвращает удаленный элемент
console.log(js);

js.unshift("почему", "нужно"); // добавляет элемент в начало массива
console.log(js); */


// ========================================  ЗАДАЧА
/* let fruits = ["апельсин", "банан", "груша"];
document.writeln(fruits.length + "<br>");
document.writeln(fruits + "<br>");
fruits.push("яблоко", "ананас");
fruits.unshift("грейпфрут");
document.writeln(fruits.length + "<br>");
document.writeln(fruits + "<br>");
fruits.pop("");
fruits.shift("");
document.writeln(fruits.length + "<br>");
document.writeln(fruits + "<br>"); */

// ЗАДАЧА

/* let mas = [];
let n = prompt("Количество элементов массива: ");
for(let i = 0; i < n; i++){
    let x = prompt("Введите какое-нибудь число: ");
    //mas.push(x);
    mas.unshift(x);
}
for(let i = 0; i < n; i++){
    document.writeln(mas[i] + " ");
} */

// ЗАДАЧА

/* let masFirst = [1, 2, 3];
let masSecond = [11, 22, 33];

let masEnd = [];

for(let i = 0; i < masFirst.length; i++){
    masEnd.push(masFirst[i]);
    masEnd.push(masSecond[i]);
}
document.writeln(masEnd); */

//========================== МЕТОДЫ МАССИВА (продолжение)
/* let js = ["нужно", "учить", "JavaScript"];
document.writeln(js + "<br>");
console.log(js);

let arr = js.slice(1, 3); //копируем участок массива, не включая последнее значение
console.log(arr);

console.log(js.slice(1)); //если конечного значения нет, то копируется до конца массива

let range = js.toSpliced(1, 2); // получение элемента вне диапазона
console.log(range);

console.log(js);
delete js[1]; // удаляет значение, но указывает empty / удалили значение по заданному индексу
console.log(js);

js.splice(1, 2); // удаляет из массива указанное число элементов, начиная с позиции start, второй параметр указывает количество элементов для удаления
console.log(js);

js.splice(0, 1, "Мы", "Изучаем"); //также можем добавлять элементы
console.log(js);

js.splice(2, 0, "сложный", "язык"); //если мы не хотим удалять элементы, а хотим их добавить, то вторым параметром указываем значение 0, и после него с третьего параметра указываем добавляемые элементы
console.log(js);

js.splice(-1, 0, "Но", "очень", "интересный"); // отрицательный индекс считается с конца списка
console.log(js); */

// ЗАДАЧА

/* let mas = [];
let n;
do{
    n = prompt("Введите элемент массива: ");
    if(n >= 0){
        mas.push(n);
    }else{
        break;
    }
}while(true);
document.writeln(mas + "<br>");

let k = prompt("Введите индекс для удаления: ");

if(k >= 0 && k < mas.length ){
    mas.splice(k, 1);
}else{
    alert("Недопустимое значение");
}

for(let el of mas){
    document.writeln(el + " ");
} */

//========================== МЕТОДЫ МАССИВА (продолжение)

/* let index = js.indexOf("сложный"); //возвращает первый индекс по которому данный элемент может быть найден в массиве или '-1', если элемент не найден
console.log(index);

js.push("сложный");
console.log(js);

let index1 = js.indexOf("сложный", index + 2); //указывает второй параметр указывает начальный индекс для поиска
console.log(index1);

let index2 = js.lastIndexOf("сложный"); //ищет с конца
console.log(index2); */


//  ===================================  ДОМАШНЯЯ ЗАДАЧА  =====================

let mas = []; // делаю пустой массив, куда буду класть числа, которые введет пользователь

for(let i = 0; i < 10; i++){
    let n = +prompt("Введите число: ");
    mas[i] = n; // В массив в ячейку/коробку i = 0 кладем первое число и тд
}
document.writeln(mas + "<br>"); // вывели начальный массив на экран

let max = mas[0]; // Создали переменную, куда положим число, которое будет первым в массиве, теперь проверим каждое число на максимальность

let nomer = mas.indexOf(max); // сюда положим номер коробки, где лежит самое большое число

for(let i = 0; i < 10; i++){
    if (mas[i] > max){ // первая коробка с числом 1 больше, чем 1? Нет. В max остается 1 // вторая коробка с число 2 больше, чем 1? Да. В max записывается 2.и т.д
        max = mas[i]; // перезаписываем максимальное число, если true
        nomer = i; // номер коробки с числом будем удалять менять методом splice
    }
}
document.writeln("Самое большое число:" + max + "<br>"); // нашли самое большое число

mas.splice(nomer, 1);// удалили самое большое число из массива
mas.unshift(max); // поставили самое максимальное число на первое место

document.writeln("Перезаписанный массив:" + mas);