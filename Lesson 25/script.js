"use strict";


//ПОЛЗУНОК 

/* document.getElementById("slider").addEventListener("input", function(){
    document.getElementById("slider-value").textContent = this.value;
}); */

//this со стрелочной функцией не работает, нужно указать полное имя


//Кликая по ячейке появляется инпут и вводим текст

/* let tds = document.querySelectorAll("td");

for(let i = 0; i < tds.length; i++){
    tds[i].addEventListener("click", function func(){
        let input = document.createElement("input");
        input.value = this.innerHTML;
        this.innerHTML = "";
        this.append(input);

        let td = this;
        input.addEventListener("blur", function(){
            td.innerHTML = this.value;
            td.addEventListener("click", func);
        })

        this.removeEventListener("click", func);
    })
} */


/* let userInput = document.getElementById("userInput");
let name = document.getElementById("displayName");

userInput.addEventListener("input", function(){
    name.textContent = this.value || "Гость";
}) */

//FormData()

/* let form = document.getElementById("myForm");
form.addEventListener("submit", function(event){ */
/*     if(!form.checkValidaty()){
        event.preventDefault();
        alert("Заполните все поля корректно")
    } */


/*     let username = form.username.value;
    let password = form.password.value; */

/*     let formData = new FormData(form);
    console.log(formData.get("username"));
    console.log(formData.get("password")); */
    
/*     let username = form.username.value;
    let password = form.password.value;

    if(username.length < 3){
        event.preventDefault();
        alert("Имя пользователя должно быть более 3 символов")
    }
    if(password.length < 6){
        event.preventDefault();
        alert("Пароль должен быть более 6 символов")
    }
})
 */
//Валидация данных форм
//checkValidaty() - проверка валидности формы

//Методы регулярных выражений

//search - возвращает позицию, на которой регулярное выражение совпадает с вызываещей строкой, или "-1" если совпадений нет
//match - получит все совпадения с регулярным выражением
//replace - поиск и замена
//split - делит строку на массив, разбивая ее по указанной подстроке 
//test - выполняет поиск совпадения регулярного выражения со строкой. возврщает true or false

//синтаксис записи:
// let regexp = new RegExp ("шаблон","флаги");
// let regexp = /шаблон/флаги;

/* let str = "Я ищу совпадения в 2026 году 7894354635734 Hello_World ё^"; */
/* let regexp = /[2026]/g;
document.writeln(str + "<br>"); */
/* document.writeln(str.search(regexp) + "<br>");
document.writeln(str.match(regexp) + "<br>");
document.writeln(regexp.test(str) + "<br>"); */

//document.writeln(str.match(regexp) + "<br>");

//let regexp = /[я]/i;
/* let regexp = /[яи]/gi;
document.writeln(str.match(regexp) + "<br>"); */
/* let regexp = /[0-9]/gi;
document.writeln(str.match(regexp) + "<br>"); */
//let regexp = /[а-я]/g;
/* let regexp = /[А-Яа-я]/g;
document.writeln(str.match(regexp) + "<br>"); */
/* let regexp = /[A-Za-z]/g;
document.writeln(str.match(regexp) + "<br>"); */

//ФЛАГИ
// g (global) - ищет все совпадения с шаблоном поиска (глобальный поиск)
// i (ignoreCase) - регистрозависимый поиск
// d (digit) - любая цифра
// s (space) - пробельный символ, включая табуляцию и перенос строки
// w (word) - цифры, буквы, и символ подчеркивания (не поддерживает символы русской раскладки)

//Диапазон 
//[0-9] - любая цифра от 0 до 9
//[а-я] - любая буква от а до я
//[А-Яа-я] - любая буква от Аа до Яя В ОБОИХ РЕГИСТРАХ
//[A-Za-z] - любая буква от Aa до Zz В ОБОИХ РЕГИСТРАХ
//[А-яЁё] - это поиск всех букв русского алфавита


/* function lowerCase(str){
    return str.replace(/[А-Я]/g, u => u.toLowerCase());
}

console.log(lowerCase("Несколько Слов")); */


/* let regexp = /[^0-9]/g;
document.writeln(str.match(regexp) + "<br>"); */
/* let regexp = /[0-9^]/g; */
/* document.writeln(str.match(regexp) + "<br>"); */

//^ - сирконфлекс это как НЕ (но в начале диапазон), исключающий диапазон, ни один из указанных символов

/* let regexp = /[0-9]{3}/g;
document.writeln(str.match(regexp) + "<br>"); */
/* let regexp = /[0-9]{1,}/g;
document.writeln(str.match(regexp) + "<br>"); */
/* let regexp = /[0-9]{2,5}/g;
document.writeln(str.match(regexp) + "<br>"); */

//{3} - количество символов идущих подряд
//{1,} - от одного до бесконечного количества повторений
//{2, 5} - от 2 до 5 повторений


/* let html = `
    <table>
        <tr>
            <td bgcolor="#CCC">
                <img src="222.png">
            </td>
            <td bgcolor="#003399">
                <img src="af3.png">
            </td>
            <td bgcolor="#00ccdd">
                <img src="fff.png">
            </td>
        </tr>
    </table>
` */

//0-9A-F - диапазон цветов

/* let exp = /#([0-9a-f]{3}){1,2}/ig;
console.log(html.match(exp)); */


/* let regexp = /\w/g;
document.writeln(str.match(regexp) + "<br>"); */


//Домашнее задание - создать строку, написать шаблон регулярного выражения, и на выходе строка выводилась через символ подчеркивания\

let str = "Это пример строки с   несколькими пробелами";
let regexp = /\s/g;
let result = str.replace(regexp, "_"); 
document.writeln(result);