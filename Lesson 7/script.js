//Задача про массив

/* let n = +prompt("Введите количество элементов массива: ");
let mas = new Array(n);

for(let i = 0; i < mas.length; i++){
    mas[i] = prompt("->");
}

console.log(mas);

for(let i = 1; i < mas.length; i++){
    if(mas[i] > mas[i - 1]){
    document.writeln(mas[i] + "");
    }
} */


//Задача   

/* let mas = [49, 22, 13, 31, 43 ,22, 10, 20, 28, 10, 40, 49, 38, 30, 48, 48, 31, 38, 35, 25];
console.log(mas);

let sum = 0;
let count = 0;

for(let i = 0; i < mas.length; i++){
    if (mas[i] % 2 == 0){
       count++;
    }
    else{
        sum += mas[i];
    }
}
    document.writeln("Количество четных элементов: " + count + "<br>");
    document.writeln("Сумма нечетных элементов: " + sum); */



 /*    let arr = [2, 5, 7, "Игорь", true, 1.5];
    console.log(arr);
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
        document.writeln(sum + "<br>"); */
    
/*     let mas = [[2, 1, 1], [6, 3, 7], [8, 5, 6]];
    console.log(mas);
    console.table(mas); */
/*     document.writeln(mas[1][2]);
    document.writeln(mas[0][2][1]); */
/* 
    for(let i = 0; i < mas.length; i++){
        for(let j = 0; j < mas[i].length; j++){
            document.writeln(mas[i][j] + " ");
        }
        document.writeln("<br>");
    } */

//Двумерный массив или матрица
//Задача
/* let mas = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
    for(let i = 0; i < mas.length; i++){
        for(let j = 0; j < mas[i].length; j++){
          document.writeln(mas[i][j] + "- - -"); 
        }
    document.writeln("<br>");
    }

document.writeln("<br>");

    for(let i = 0; i < mas.length; i++){
        for(let j = 0; j < mas[i].length; j++){
          document.writeln(mas[i][j] ** 2 + "- - -"); 
        }
    document.writeln("<br>");
    } */


//Задача
/* let question = ["Нам ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2х2 будет 8?", "Дельфины - это рыбы?", "Мадонна - это настоящее имя певицы?", "Первая мировая война началась 1 сентября 1939 года?"];

let answers = [false, true, false, false, false, false, false];

let sum = 0;

let res = new Array();

for(let i = 0; i < question.length; i++){
    let answer = confirm(question[i]);
    if(answer == answers[i]){
        res[i] = 10;
        sum += res[i];
    }else{
        res[i] = 0;
    }
}

console.log(res);
console.log(sum); */


//======================== Домашняя задача "Кто хочет стать миллионером?" ===================

let questions = ["Вопрос №1: Как переводится английское приветствие 'Hello'? \nA: Пока \nB: Привет \nC: Спасибо \nD: Пожалуйста", "Вопрос №2: Что в Британии называют словом 'Subway'?\nA: Переход\nB: Метро\nC: Еда\nD: Поезд",
" Вопрос №3: Какой артикль обычно ставится перед музыкальными инструментами?\nA: A\nB: An\nC: The\nD: Без артикля",
"Вопрос №4: Как переводится идиома 'Piece of cake'?\nA: Кусок торта\nB: Очень просто\nC: Сладкая жизнь\nD: Тяжело", " Вопрос №5: Из какого языка пришло слово 'Boutique'?\nA: Немецкий\nB: Французский\nC: Латынь\nD: Испанский", "Вопрос №6: Что означает 'False friend' в лингвистике?\nA: Враг\nB: Плохой словарь\nC: Ложный друг переводчика\nD: Ошибка", "Вопрос №7: Какой из этих языков НЕ является романским?\nA: Итальянский\nB: Испанский\nC: Немецкий\nD: Французский", "Вопрос №8: Как по-английски будет 'Стенокардия' (ложный друг слова Angina)?\nA: Sore throat\nB: Angina\nC: Tonsillitis\nD: Quinsy", "Вопрос №9: В какой стране говорят на языке 'ретороманский'?\nA: Швейцария\nB: Бельгия\nC: Австрия\nD: Люксембург", "Вопрос №10: Какое слово в английском самое длинное БЕЗ обычных гласных?\nA: Rhythm\nB: Syzygy\nC: Glyphs\nD: Tsktsk"];

let right_answers = ["B", "B", "C", "B", "B", "C", "C", "B", "A", "A"];
let right_answers_2 = ["b", "b", "c", "b", "b", "c", "c", "b", "a", "a"];
let money = [500, 1000, 2000, 5000, 10000, 25000, 50000, 100000, 500000, 1000000];

let sum = 0;
let answer;

alert("Добро пожаловать! С вами игра `Кто хочет стать миллионером?`");
for(let i = 0; i < questions.length; i++){
    answer = prompt(questions[i]);

    if (answer == right_answers[i] || answer == right_answers_2[i] ) {
            alert("Поздравляем, вы выиграли " + money[i] + " денежных единиц.");
            if (money[i] == 5000 || money[i] == 25000) {
                alert("Поздравляем! Вы дошли до несгораемой суммы!");
                sum = money[i];
            }
            if ( i == 9) {
            alert("Ура!\nВы победили))\nТеперь Вы миллионер");
            }
        } else {
            alert("Конец игры! \nВы проиграли!");
            alert("Вы выиграли " + sum + " денежных единиц");
            break;
            }
    }
