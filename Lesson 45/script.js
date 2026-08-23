"use strict";

// ========================== ЧИСЛА ========================
//const sum1 = 120323;
//const sum2 = 100200200;
//const sum3 = 1600.33;

//const num = 0.1;

/* document.writeln(`
    ${sum1.toLocaleString()} <br>
    ${sum2.toLocaleString("ru")} <br>
    ${sum3.toLocaleString("en")} <br>
`); */

//метод .toLocaleString() - делает пробел между цифрами 120323 => 120 323

/* document.writeln(`
    <div>
        ${sum1.toLocaleString({
            style: 'decimal', // По умолчанию обычное число
        })} <br>

        ${num.toLocaleString("ru", {
            style: 'percent', // Число в процентах
        })} <br>

        ${sum2.toLocaleString("ru", {
            style: 'currency', // Добавляет знак валюты
            currency: 'rub', //Добавить денежные единицы - рубли
        })} <br>

        ${sum3.toLocaleString("en", {
            style: 'currency', // Добавляет знак валюты
            currency: 'USD', //Добавить денежные единицы - доллары
        })} <br>

        ${sum3.toLocaleString("ru", {
            style: 'currency', 
            currency: 'USD',
            currencyDisplay: 'name',
        })} <br>

        ${sum3.toLocaleString("ru", {
            style: 'currency', // Добавляет знак валюты
            currency: 'EUR', //Добавить денежные единицы - евро
            currencyDisplay: 'name', //добавляет имя валюты, а не условное обозначение 
        })} <br>
    </div>
`); */

/* document.writeln(`
    <div>
        ${new Intl.NumberFormat("ru", {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'name',
            minimumFractionDigits: 0, // сколько знаков после . или ,
        }).format(sum2)} <br> 
    </div>
`) */

//метод .format() - передаем в него, что будем форматировать

/* const toEuro = new Intl.NumberFormat("ru", {
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'name',
            minimumFractionDigits: 0, // сколько знаков после . или ,
        }); */

//можно теперь передавать любые значения, которые будут форматироваться по одному примеру

/* document.writeln(`
    <div>
        ${toEuro.format(sum2)}
    </div>
`);
document.writeln(`
    <div>
        ${toEuro.format(sum1)}
    </div>
`);
document.writeln(`
    <div>
        ${toEuro.format(sum3)}
    </div>
`); */

// Intl. // класс, который работает с разными элементами

//.DateTimeFormat - форматируем даты или время
//.NumberFormat - форматируем число

// =================== ДАТЫ ====================

///const now = new Date(); // класс для создания даты

//const locale = navigator.language; // язык настройки системы пользователя

/* const dateOptions = {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
    era: "long",
    weekday: "long",
    timeZoneName: "short",
    hour: "2-digit",
    hour12: true,
    minute: "2-digit",
    second: "2-digit",
}; */

//Варианты: numeric, 2-digit (двузначное число), short (для месяца сокращенные буквы), long (для месяца полное название), 

//const UserDate = new Intl.DateTimeFormat("locale", dateOptions); // вариант даты пользователя
//const RuDate = new Intl.DateTimeFormat("ru", dateOptions); // русский вариант даты
//const USDate = new Intl.DateTimeFormat("en-US", dateOptions); // американский вариант даты
//const UKDate = new Intl.DateTimeFormat("en-UK", dateOptions); // британский вариант даты

/* document.writeln(`
    <ul>
        <li>${RuDate.format(now)}</li>
        <li>${USDate.format(now)}</li>
        <li>${UKDate.format(now)}</li>
        <li>${UserDate.format(now)}</li>
    </ul>
`) */


// =========== обозначение. сколько времени назад было прислано письмо

/* const rtf = new Intl.RelativeTimeFormat("ru", {
    numeric: 'auto', // 'always'- другой формат "через 1 день"
    style: 'long', // 'short'
    localMatcher: 'best fit',
}); */

//console.log(rtf.format(1, "minute"));
//console.log(rtf.format(1, "day"));
//console.log(rtf.format(-1, "day"));
//console.log(rtf.format(2, "day"));
//console.log(rtf.format(-2, "day"));
//console.log(rtf.format(-20, "day"));


/* function getRelativeTimeString(date, lang=navigator.language){
    const timeMs = typeof date === 'number' ? date : date.getTime();
    
    const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

    const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];

    const units = ["second", "minute", "hour", "day", "week", "month", "year"];

    const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds));

    // .abs() - возвращает абсолютное число, делает число положительным

    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

    const rtf = new Intl.RelativeTimeFormat(lang, {numeric: 'auto'});

    return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
} */

//console.log(getRelativeTimeString(new Date("2026-08-23T00:55:04"), "ru"));
//console.log(getRelativeTimeString(new Date("2026-09-23"), "ru"));
//console.log(getRelativeTimeString(new Date("2026-08-18"), "ru"));


// ====== ЕДИНИЦЫ ИЗМЕРЕНИЯ ======

/* const formatter = new Intl.NumberFormat("ru", {
    style: 'unit', //единицы измерения
    unit: 'meter', // 'liter'
    unitDisplay: 'long', //'short', 'narrow'
}); */

/* document.writeln(`
    <ul>
        <li>${formatter.format(100)}</li>
        <li>${formatter.format(101)}</li>
        <li>${formatter.format(102)}</li>
        <li>${formatter.format(105)}</li>
        <li>${formatter.format(108)}</li>
        <li>${formatter.format(111)}</li>
        <li>${formatter.format(121)}</li>
    </ul>
`) */

// Варианты юнитов:
//acre
//bit
//byte
//celsius
//centimeter
//day
//degree
//fahrenheit
//fluid-ounce
//foot
//gallon
//gigabit
//gigabyte
//gram
//hectare
//hour
//inch
//kilobit
//kilobyte
//kilogram
//kilometer
//liter
//megabit
//megabyte
//meter
//microsecond
//mile
//mile-scandinavian
//milliliter
//millimeter
//millisecond
//minute
//month
//nanosecond
//ounce
//percent
//petabyte
//pound
//second
//stone
//terabit
//terabyte
//week
//yard
//year





// Map - коллекция пар и значений и Set - коллекция уникальных значений

/* let obj = {
    "name": "Ivan",
    20: "age",
    true: "boolean",
}; */
//Если объект и массив пустые, то все равно вернется true

/* let obj = {};
obj[{id: 1}] = "first";
obj[{id: 2}] = "second"; */

//объект перезаписал первый ключ на второй (это недостаток)

//console.log(obj);
//console.log(!!obj); // !! меняют булевое значение на противоположное

/* let obj = {40: "число", true: "boolean"};
console.log(Object.keys(obj).length); */

/* let obj = {1: "один", "1": "one"};
console.log(obj); */


//let map = new Map();

//map.set(5, "число"); //в скобках ключ и значение
//map.set("5", "строка");
//map.set([3,4], "массив");
//map.set({7: "семь"}, "объект");
//let obj = {7: "семь"}
//map.set(obj, "объект");
//let mas = [3 , 4]
//map.set(mas, "массив");

//console.log(map);
//console.log(map.get(5)); //получить значение у отдельного ключа
//console.log(map.size); // длина
//console.log(map.has(5)); //определяем, есть ли такой элемент и выдает true или false

/* map.delete("5"); //метод, который удаляет 
console.log(map); */

/* map.clear();
console.log(map); */

/* for(let elem of map){
    document.writeln(elem + "<br>");
    console.log(elem);
} */

/* for(let [key, elem] of map){
    document.writeln("***<br>");
    document.writeln(key + "<br>");
    document.writeln(elem + "<br>"); 
} */

/* let values = map.values(); // получить значения у элементов
console.log(values);
console.log(values[1]); //будет undefined */

/* let keys = map.keys(); // получить ключи у элементов
console.log(keys); */

/* let entries = map.entries(); //значения и ключи по умолчанию 
console.log(entries); */

/* for(let el of map.values()){
    console.log(el); 
} */


//let maps = new Map();

/* maps.set("1", "one")
    .set(1, "first")
    .set(true, "bool"); */

/* let maps = new Map([
    ["1", "one"],
    [1, "first"],
    ["true", "bool"],
]);
 */
//console.log(maps);

/* maps.forEach((value, key) => {
    document.writeln(`${key}: ${value} <br>`)
}); */




/* const users = [
    {name: "Alex", age: 25},
    {name: "Bob", age: 30},
    {name: "Rob", age: 25},
    {name: "Diana", age: 30},
    {name: "Ivan", age: 35},
]; */

//Группировка данных

/* const byAge = Map.groupBy(users, user => user.age);
console.log(byAge); */

/* const age25 = byAge.get(25);
console.log(age25);
 */



/* const items = [1, 2, 3, 4, 5];
const enumerate = Map.groupBy(items, n => n % 2 === 0 ? "even" : "odd");
console.log(enumerate); */


//Домашняя задача
//Создать коллекцию Map на два элемента из обычного массива. Ключами будет "строка" и "число", значениями строковые или числовые данные из массива


//делаю массив со строковыми или числовыми данными
let mas = {
    "name": "Natalya",
    "number": 19,
};

//создаю коллекцию
let map = new Map();

//устанавливаю ключ-значение (ключами будет "строка" и "число")
map.set("строка", mas.name)
    .set("число", mas.number);

console.log(map);

//Нахожу каждое значение из коллекции
let values = map.values();
console.log(values);

//нахожу каждый тип данных каждого значения и вывожу  в консоль
for(let elem of values){
    console.log("Тип данных:" + typeof elem);
}


