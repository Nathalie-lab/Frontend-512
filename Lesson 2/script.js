// Унарные - один операнд

/* let a = 0, b = 0; */
// a = a + 1;
/* ++a;
let c = ++a;
console.log(a);
console.log(c); */
// b = b + 1;
/* let d = b++;
b++;
console.log(b);
console.log(d);
 */
/* let a = 0, b = 0;
let c = a++ + 2; // a + 2 = 0 + 2 = c и только после a + 1 =1
let d = ++b + 2; // сначала увеличился b + 1 = 0 + 1 = 1; */
/* console.log(a);
console.log(b);
console.log(c);
console.log(d); */

/* let a = 1;
let b = a++;
let c = b + 5 + a; // c = 1 + 5 + 2;
console.log(c); */

/* let a = 3;
console.log(a + 1); // 3
console.log(a); // 3

console.log(a++); // 3
console.log(a); // 4 */

// оператор декримента (вычитание)
/* let a = 3;
let b = 5 + --a - 1; // 5 + 2 - 1
console.log(a); // 2
console.log(b); // 6 */

/* let a = 3;
// a = a + 5;
a += 5;
console.log(a); */

// Сначала ставим оператор и потом присвоить(=)
/* let a = 3;
a += 5; // 8
a -= 3; // a = a - 3 = 8 - 3 = 5
console.log(a); // 5

a **= 2;
console.log(a); // 25 */

/* let a = +prompt("Введите первое число: ", 5);
let b = +prompt("Введите второе число: ", 4);
let c = +prompt("Введите третье число: ", 6);
let sum = a + b + c;
console.log("Сумма чисел: " + sum); */

/* let sum = +prompt("Введите первое число: ", 5);
sum += +prompt("Введите второе число: ", 4);
sum += +prompt("Введите третье число: ", 6);
console.log("Сумма чисел: " + sum);  */

// оператор равенства
/* console.log(5 == "5"); //не сравниваются типы данных
console.log(5 === "5"); //сравниваются типы данных
// НЕ РАВНО?
console.log(5 != "5"); 
console.log(5 !== "5");  */

/* console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 <= 3);
 */

// TRUE = 1 FALSE = 0
/* console.log(+true); // 1
console.log(+false); // 0

let b = 5 + true; // 5 + 0
console.log(b);  */

// УСЛОВИЕ ? команда 1 : команда 2;
// 7 < 3 ? alert("7") : alert("3");

/* let age = prompt("Введите возраст: ");
age >= 18 ? alert("Совершенолетний") : alert("Несовершенолетний"); */

/* let ch = prompt("Угадай число от 1 до 10");
let num = 7; */
/* ch == num ? alert("Угадали!") : alert("Не угадали!"); */
/* ch == num ? alert("Угадали!") : ch < num ? alert("Загаданное число больше") : alert("Загаданное число меньше"); */

/* let temp = prompt("Введите температуру");

let res = temp > 30 ? "Очень жарко"
: temp > 20 ? "Тепло"
: temp > 10 ? "Прохладно"
: temp > 0? "Холодно"
: "Очень холодно";
alert(res); */

// Условный оператор if else

/* if (условие) {
    истина (TRUE)
}else{
    ложь (FALSE)
} */

/* let a = 12;
let b = 0;
if (b != 0){
    let res = a / b;
    alert("Результат: " + res);
}else{
    alert("Делить на \"0\" нельзя");
} */


/* let value = prompt("Введите число");
if(value % 2 == 0){
    alert("Число четное");
}else{
    alert("Число нечетное");
} */

/*  let a = 32;
 let b = 22; */
/*  if(a > b){
    alert(a + " > " + b);
 } 
 if (a == b){
    alert(a + " = " + b);
 }
 if(a < b){
    alert(a + " < " + b);
 }  */
/*  if(a > b){
    alert(a + " > " + b);
 } 
else if (a == b){
    alert(a + " = " + b);
 }
else{
    alert(a + " < " + b);
 } 
 */

/*  let day = prompt("Введите день недели (цифрами):");
 if(day == 1){
    alert("Monday");
 }
 else if(day == 2){
    alert("Tuesday");
 }
 else if(day == 3){
    alert("Wednesday");
 }
 else if(day == 4){
    alert("Thursday");
 }
 else if(day == 5){
    alert("Friday");
 }
 else if(day == 6){
    alert("Saturday");
 }
 else if(day == 7){
    alert("Sunday");
 }
 else{
    alert("Such day of week doesn't exist");
 } */

// confirm("Знаете ли вы HTML?");

/* let res = confirm ("Знаете ли вы HTML?");
console.log(res);
if (res){
    alert("Пора учить JavaScript");
} else {
    alert("Нужно выучить HTML");
} */

// FALSE => "", 0, null, undefined, NaN (Not a Number), false

/*     let a = "Hello";
if (a){
    console.log("TRUE");
}else{
    console.log("FALSE");
}
console.log(a); */

// ========================= ЗАДАЧА =========================
/* let login = prompt("Введите логин: ", "admin");
if (login) {
    if (login == "admin") {
        let pas = prompt("Введите пароль: ");
        if (pas) {
            if (pas == "password") {
                alert("ДОБРО ПОЖАЛОВАТЬ!");
            } else {
                alert("Пароль неверен");
            }
        } else {
            alert("Вход отменен");
        }
    } else {
        alert("Я вас не знаю");
    }
} else {
    alert("Вход отменен");
} */


                                                                           // Задача ПРАКТИЧЕСКОЕ ЗАДАНИЕ №7
                                                                        //    Решение 1
/* let signal = prompt("Введите цвет сигнала светофора: ");
    if(signal == "красный"){
        alert("Сигнал светофора красный - СТОЙТЕ!");
    }
    else if(signal == "желтый"){
        alert("Сигнал светофора желтый - Приготовьтесь!");
    }
    else if(signal == "зеленый"){
        alert("Сигнал светофора зеленый - Идите!");
    }
    else{
        alert("ПРЕДУПРЕЖДЕНИЕ! Сигнал светофора введен некорректно");
    } */

                                                                        // Решение 2
/* let sign = prompt("Введите ЦИФРУ цвета сигнала светофора: 1 - красный, 2 - желтый, 3 - зеленый");
    if(sign == "1"){
        alert("Сигнал светофора красный - СТОЙТЕ!");
    }
    else if(sign == "2"){
        alert("Сигнал светофора желтый - Приготовьтесь!");
    }
    else if(sign == "3"){
        alert("Сигнал светофора зеленый - Идите!");
    }
    else{
        alert("ПРЕДУПРЕЖДЕНИЕ! Сигнал светофора введен некорректно");
    } */


        // Практика - Задание №2
/* let a = prompt("Введите первое число: ", 2);
let b = prompt("Введите второе число: ", 4);
let c = prompt("Введите третье число: ", 3);
let d = prompt("Введите четвертое число: ", 6);

console.log(alert("Результат: " + (Number(a*a + b*b + c*c + d*d)))); */

    //    Практика - Задание №3  // СПРОСИТЬ ПРО ВВОД РАЗНЫХ ИМЕН
/* let login = prompt("Введите логин: ");
if (login == "Виктория") {
    alert("Привет, " + login);
} 
else if (login == "Директор"){
    alert("Здравствуйте, " + login);
}
else if(login){
    alert("Неверный ввод логина");
}
else{
    alert("Отмена ввода")} */

        //    Практика - Задание №4
/* let price = +prompt("Введите сумму покупки: ");
if(price >= 1000){
    alert("Стоимость покупки без скидки: " + price + " Скидка: 5%" + " Итоговая стоимость покупки: " + (price-(price*5/100)));
}
else if(price >= 500){
    alert("Стоимость покупки без скидки: " + price + " Скидка: 3%" + " Итоговая стоимость покупки: " + (price-(price*3/100)));
}
else{
    alert("Стоимость покупки без скидки: " + price);
}
 */

// Задача №3

/* let a = prompt("Введите Ваше имя: ", "Наталья");
let b = prompt("Введите Вашу фамилию: ", "Воробьева");
let c = prompt("Введите Ваш возраст: ", "26");
let d = prompt("Введите Ваше место проживания: ", "Мстера");

if(a, b, c, d){
    alert("Ваше имя: " + a + " Ваша фамилия: " + b + " Ваш возраст: " + c + " Ваше место проживания: " + d + "." + " Все верно?");
}
else {
    alert("Данные введены неверно")
} */

    //Задача №2
/* let question_1 = prompt("Каким именем Вы бы назвали подаренную Вам на день рождения лошадь?");
let question_2 = prompt("В каком году изобретут 'машину времени'?");
let question_3 = prompt("Ваш любимый цвет?");
let question_4 = prompt("Как зовут Вашу маму?");
let question_5 = prompt("В какое время года Вы родились?");
alert("Сначала отец меня обзывает " + question_1 + " , потом говорит, что купит мне компьютер только в " + question_2 + " , потом выбрасывает мой любимый " + question_3 + " шарф, которым моя мама " + question_4 + " укутывала меня " + question_5) */

