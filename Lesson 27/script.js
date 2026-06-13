"use strict";

//REPLACE
/* document.writeln("aaa".replace("a","b") + "<br>");
document.writeln("aaa".replace(/a/g,"b") + "<br>"); */

/* let text = "I kill you, a black dog";
document.writeln(text + "<br>");
let exp = /book|kill|black/ig;
text = text.replace(exp, "***");
document.writeln("<p>" + text + "</p>"); */

//Жадный и ленивые квантификаторы
//let st = "<p>Hello, World!</p>";
//let st = "12323554545455";
//let reg = /<.+?>/g;
//let reg = /\d{2,4}?/g;
//console.log(st.match(reg));

/* 
*?
=?
??
{2,5}?
{2,}?
*/

/* let st = "<p>Hello, World!</p>";
let reg = /<[^>]+>/g;
console.log(st.match(reg)); */

/* let st = "... <!-- My -- comment text --> .. <!----> ..";
//let reg = /<!--.* -->/g;
let reg = /<[^>]+>/g;
alert(st.match(reg)); */

/* let st = "<> <a href='#'> <input type='radio' checked> <b>";
//let reg = /<[^>]+>/g;
let reg = /<[^<>].+>/g;
alert(st.match(reg)); */

/* let html = "Дмитрий Васильев";
let exp = /(Дмитрий) Васильев/;
document.writeln(html.match(exp) + "<br>"); */

/* let html = "site.com и my.site.com";
let exp = /(\w+\.)+\w+/g;
document.writeln(html.match(exp) + "<br>"); */

/* let st = "<h1>Hello, world!</h1>";
let tag = st.match(/<(.*?)>/);
alert(tag[0]);
alert(tag[1]); */

/* let date = "2026-05-30";
let reg = /^(\d{4})-(\d{2})-(\d{2})$/;
let match = date.match(reg);
let format = match[3] + "." + match[2] + "." + match[1];
console.log(format); // 30.05.2026 */

/* let st = "<span class='my'>";
let exp = /<(([a-z]+)\s*([^>]*))>/;
let res = st.match(exp);
alert(res[0]); */

//Именнованные круглые скобки
/* let date = "2026-05-30";
let reg = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/;
let match = date.match(reg).groups;
let format = match.day + "." + match.month + "." + match.year;
console.log(format); */
//let format = match[3] + "." + match[2] + "." + match[1];

/* let date = "2026-05-30 2026-10-15";
let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;
let res = date.matchAll(reg);
for(let result of res){
    let {year, month, day} = result.groups;
    document.writeln(`${day}.${month}.${year}`);
} */

//ДОМАШНЯЯ РАБОТА

let st = "-1.5 0 2 -123.4.";
let reg = /-?\d+(\.\d+)?/g;
document.writeln(st.match(reg));

//Любые целочисленные значения, значения с точкой, но в конце точка обрезается
// -1.5,0,2,-123.4