"use strict";

/* let st = "John Smith";
let re = /(\w+)\s(\w+)/;
document.writeln(st.replace(re, "$2, $1")); */

//$ - обозначает скобку. Считаем с 1 до ...

/* function add(str){
    return str.replace(/([A-Z])/g, " $1");
}
console.log(add("camelCase")); //camel Case
console.log(add("helloWorldItIsMe")); //hello World It Is Me */

/* let text = "red color: #F00 and green: #090";
let ex = /(#[a-f0-9]{3})/ig;
text = text.replace(ex, "<span style='color:$1'>$1</span>");
document.writeln("<p>" + text + "</p>"); */

/* let text = "I like google.com and yandex.ru";
let ex = /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/ig;
text = text.replace(ex, "<a href='https://$1'>$1</a>");
document.writeln("<p>" + text + "</p>"); */

// 7 (xxx) xxx-xx-xx или 8 (xxx) xxx-xx-xx
/* function formatPhoneNumber(phone){
    let cleaned = phone.replace(/\D/g, "");
    return cleaned.replace(/(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})/,"$1 ($2) $3-$4-$5");
}
console.log(formatPhoneNumber("+7 999 1234567"));
console.log(formatPhoneNumber("8 999 1234567"));
console.log(formatPhoneNumber("999 1234567"));
console.log(formatPhoneNumber("79991234567"));
console.log(formatPhoneNumber("7 999 123 45 67")); */

//document.writeln("Люблю HTML".replace(/HTML/, "$& и JavaScript"));
//$& добавляет к найденному сопадению

/* let st = `Он сказал: "I'm at home".`;
//let re = /(["'])(.*)\1/g;
let re = /(?<quote>["'])(.*)\k<quote>/g;
document.writeln(st.match(re) + "<br>"); */

//Позитивная опережающая проверка
//Используется в виде шаблона X(?=Y)
//x, если за ним следует y

/* let st = "1 курс стоит 30 руб";
document.writeln(st.match(/\d+(?= руб)/g)); */

//Негативная опережающая проверка
//Используется в виде шаблона X(?!Y)
//x, если за ним НЕ следует y

/* let st = "1 курс стоит 30 руб";
document.writeln(st.match(/\d+(?! руб)/g)); */

//Позитивная ретроспективная проверка
//Используется в виде шаблона (?<=Y)X
//x, если следует за y

/* let st = "1 курс стоит $30";
document.writeln(st.match(/(?<=\$)\d+/)); */

//Негативная ретроспективная проверка
//Используется в виде шаблона (?<!Y)X
//x, если НЕ следует за y

/* let st = "1 курс стоит $30";
document.writeln(st.match(/(?<!\$)\d+/)); */

//document.writeln("Hello, Error".match(/^(?=.*[eE][rR][rR][oO][rR]).{1,50}$/));
//(?=.* все что угодно в шаблоне)

/* function validPassword(psw){
    let pswEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@$#%^&*]).{8,}$/;
    return pswEx.test(psw);
}
console.log(validPassword("QWer23!#")) */


//ЗАДАЧА 5

/* let but = document.querySelector("#but");
but.addEventListener("click", smsUser);

function smsUser(){
    let name = document.querySelector("#your_name").value;
    let text = document.querySelector("#text").value;
    let regExpBBMail = /([\w.]+@[0-9a-z_^.]+\.[a-z]{2,3})/ig;
    text = text.replace(regExpBBMail, "<span style='color:red'>$1</span>");
 */
    //Вариант 1
/*    document.writeln(`
    <fieldset>
        <legend>${name}</legend>
         <div>${text}</div>
    </fieldset>
    `) */

//Вариант 2
/*     let form = document.querySelector("form");
    form.insertAdjacentHTML("afterend", `
        <fieldset>
            <legend><b>${name}</b></legend>
            <div>${text}</div>
        </fieldset>
        `)
    } */

/* let st = "  текст строки    ";
st = st.replace(/^\s+|\s+$/g, "");
console.log(">" + st + "<"); */

/* let date ="25-10-2026, 14/09/2025, 10.03.2022, 12:02:2014";
let re = date.split(/[-\/,.:]/);
console.log(re); */

//Домашняя работа
//Задача: Написать приложение подсвечивающее html синтаксис в тексте

let but = document.querySelector("#but");
but.addEventListener("click", htmlUser);

function htmlUser(){
    let name = document.querySelector("#your_name").value;
    let text = document.querySelector("#text").value;
    let regExpHtml1 = /(\<)/ig;
    let regExpHtml2 = /(\>)/ig;
    let regExpHtml = /(&lt;.+?&gt;)/ig;
    text = text.replace(regExpHtml1, "&lt;");
    text = text.replace(regExpHtml2, "&gt;");
    text = text.replace(regExpHtml, "<span style='color:red'>$1</span>");


    let form = document.querySelector("form");
    form.insertAdjacentHTML("afterend", `
        <fieldset>
            <legend><b>${name}</b></legend>
            <div>${text}</div>
        </fieldset>
        `)
    }

