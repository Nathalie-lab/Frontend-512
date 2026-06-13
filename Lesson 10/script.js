// МЕТОДЫ МАССИВОВ (ПРОДОЛЖЕНИЕ)

/* let js = ["нужно", "учить", "JavaScript"];
document.writeln(js + "<br>");
console.log(js); */

//======================================================= mas.includes - проверяет содержит ли массив определенное значение

/* let isValue = js.includes("нужно");
console.log(isValue);

let array = [7,4,4,7,4,2,4,7,7,1,4];
let result = [];

for(let el of array){
    if(!result.includes(el)){ // 7 => если результат не включает в себя 7 // 4 => если в результате нет 4 (а результат включает только 7 пока что) // опять 4 => если результат не включает 4, а у нас уже в результате сейчас (7, 4), поэтому эта 4 не будет добавляться
        result.push(el); // кладем сюда 7 в конец массива // добавляем 4 в конец массива
    }
}
for(let el of result){ //выводим элементы
    document.writeln(el + "");
} */

// ========================================== объединить элементы 

/* let stroka = js.join("; ");
console.log(stroka); */

//ЗАДАЧА
/* let mas = ["Фамилия:", "Имя:", "Отчество:"];

let data = new Array (3);

for(i = 0; i < data.length; i++){
    data[i] = prompt("Введите Ваши данные:\n" + mas[i]);
}

alert(data.join(" ")); */

/* js.reverse(); // меняет порядок следования элементов на обратный
console.log(js); */


//=======================================================Метод mas.flat() - достает всё из массива и вложенных массивов в него, упрощает массив с учетом указанной вложенности элементов

/* let people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
console.log(people.length);

let arr = people.flat(2); // второй уровень вложенности в скобочках

console.log(arr);
console.log(arr.length); */

//============================================================ МЕТОД concat - создает новый массив, объединяющий несколько массивов, либо в массив добавляются элементы
/* let a = [1, 2];
let b = a.concat(3, 4);
console.log(b);
let c = ['a', 'b', 'c'];
let res = a.concat(b, c);
console.log(res); */


//========================================================= МЕТОД .with - изменяет элемент массива, но сохранил старый массив с измененным элементом

/* let users = ["Tom", "Bob", "Alice", "Kate", "Sam", "Ann"];
console.log(users); */

//let modified = users.with(0, "Thomas");
//console.log(modified);

//============================================================ МЕТОД .sort - ставит в алфавитном порядке
//console.log(users.sort());

//ЗАДАЧА

/* let firstName = prompt("Ваше имя: ", "Натали");
let favouriteNames = "";
let arr = [];

while(favouriteNames != null){
    favouriteNames = prompt("Введите любимое имя: ");
    arr.push(favouriteNames);
}

arr[arr.length - 1] = firstName;
arr.sort();

console.log(arr);
let index = arr.indexOf(firstName);
console.log(index);

for (let i = 0; i < arr.length; i++){
    if(i == index){
        document.writeln("<span style = 'color: blue; text-decoration: underline;'>" + arr[i] + "</span>");
    }else{
        document.writeln(arr[i] + " ");
    }
} */

/* let n = [1,5,15,2];
n.sort((a,b) => a - b);
console.log(n); */

//ФУНКЦИЯ 1) Function Declaration

/* 
function имя(аргументы){тело функции};
*/

/* function hello(name){
    document.writeln("Hello, " + name + "<br>");
}

hello();
hello("Irina"); // параметр */

/* function caption(){
    for(let i = 1; i <= 6; i++){
        document.writeln("<h" + i + ">Заголовок " + i + "</h" + i + ">");
    }
}
caption(); */


/* function test(a, b, c){
    //alert(a + b + c);
    let res = a + b + c;
    return res;
}
let n1 = 10, n2 = 20, n3 = 30; m1 = 1, m2 = 2, m3 = 3;
let sum = test(n1, n2, n3);
//test(m1, m2, m3);
console.log(sum); */

/* function test2(n, m){
    if(m == 0){
        return "Делить на ноль нельзя!";
    }else{
        return n / m; // return прерывает
    }
} */

/* function test2(n, m){
    if(m == 0){
        return "Делить на ноль нельзя!";
    }
    return n / m; // return прерывает
}
 */

/* let a1 = test2(10, 2);
let a2 = test2(10, 0);

alert(a1);
alert(a2); */

//ЗАДАЧА

/* function result(n, m){
    if(n > m){
        return n - m;
    } else{
        return n + m;
    }
}

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let res = result (a, b);
alert(res); */

//ЗАДАЧА
//Создать функцию для вычисления суммы элементов массива

/* function sum(arr){
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        res += arr[i];       
    }
    return res;
}
document.writeln(sum([3,8,9,4,1,2,5]) + "<br>");
document.writeln(sum([1,2,5]) + "<br>"); */

//ЗАДАЧА
//Создать функцию для нахождения большего из двух числ, учитывая, что числа могут быть равны

/* function max(a, b){
    if(a > b){
        document.writeln("Большее число:" + a + "<br>");
    }
    else if (a == b){
        document.writeln("Числа равны")
    }
    else{
        document.writeln("Большее число:" + b + "<br>");
    }
}

let a = +prompt("Введите первое число: ");
let b = +prompt("Введите второе число: ");

max(5,2);
max(2,5);
max(5,5); */

// ДОМАШНЯЯ ЗАДАЧА

let mas = new Array(9); 

for(let i = 0; i < mas.length; i++){
    let a = +prompt("Введите число: ");
    mas[i] = a;
}
document.writeln("Все введенные числа: " + mas + "<br>");

function divided_by_three(mas){
        let arr = [];
        for(let i = 0; i < mas.length; i++){
            if(mas[i] % 3 === 0){
                arr.push(mas[i]);
        }   
    }
        return arr;
}

let res = divided_by_three(mas);
document.writeln("Числа, кратные трём: " + res);