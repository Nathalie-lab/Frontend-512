// Создание, настройка и отправка асинхронного HTTP-запроса
let request = new XMLHttpRequest(); // Создается новый экземпляр объекта XMLHttpRequest
request.open("GET", "information.json"); //Происходит настройка запроса - GET = метод запроса, что мы хотим получить данные + URL-адрес - это путь, где лежит файл с JSON
request.send(); //Запрос отправляется на сервер

let res = document.querySelector(".result"); // находим на странице элемент с классом result, сюда будут выводиться данные

let items, prices;

//Обработка успешного ответа сервера
request.addEventListener("load", () => {
    if(request.status === 200){ // Проверка HTTP-статуса ответа. Код 200 означает запрос выполнен успешно

        items = JSON.parse(request.response).goods; // Превращает текстовую строку, пришедшую от сервера, в массив JavaScript-объектов и сохраняет в переменную items

        items.forEach(item => { //цикл для перебора массива (выше)
            if(typeof item.price === "string") {
              prices = item.price;  
            };
            //Если item.price - это строка, то в prices записываем строку

            //Добавить HTML-разметку через обратные кавычки и эта часть добавляется в div с классом result
            res.innerHTML += `
                <h3>${item.name}</h3>
                <div><img src="${item.img}" alt="${item.name}" style="max-width: 150px;"></div>
                <div>${prices}</div>
                <div>${item.ratingRevievs}</div>
                <hr>
            `;
        });

        //Доступ к кнопкам по классу, добавляем клик и функцию при нажатии
        document.querySelector(".feed").addEventListener("click", () => sortByFeedbacks(items));

        document.querySelector(".price").addEventListener("click", () => sortByPrice(items));
    }
});

    let mas1 = ["рублей", "рубль", "рубля"];
    let mas2 = ["отзывов", "отзыв", "отзыва"];

// Функция для сортировки по цене
function sortByPrice(arr){

    const temp = JSON.parse(JSON.stringify(arr));

    temp.forEach(item => {
        item.ratingRevievs = +item.ratingRevievs.replace(/\D/g,"");
        if(typeof item.price === "string"){
            item.price = +item.price.replace(/\D/g,"")
        }else if(typeof item.price === "number"){
            item.price = item.price;
        }
    });
    
    //сортировка цены от меньшей к большей
    temp.sort((a,b)=> a.price > b.price ? 1 : -1);

    //очистка блока div
    res.innerHTML = "";

    temp.forEach(item => {
            res.innerHTML += `
                <h3>${item.name}</h3>
                <div><img src="${item.img}" alt="${item.name}" style="max-width: 150px;"></div>
                <div>Цена: ${item.price} ${countItems(item.price)(mas1)} </div>
                <div>${item.ratingRevievs} ${countItems(item.ratingRevievs)(mas2)}</div>
                <hr>
            `;
            console.log(item.price);
            
        });    
}

//Функция для сортировки по отзывам
function sortByFeedbacks(arr){

    const temp = JSON.parse(JSON.stringify(arr));

    temp.forEach(item => {
        item.ratingRevievs = +item.ratingRevievs.replace(/\D/g,"");
        if(typeof item.price === "string"){
            item.price = +item.price.replace(/\D/g,"")
        }else if(typeof item.price === "number"){
            item.price = item.price;
        }
    });
    
    //сортировка отзывов от меньшего к большему
    temp.sort((a,b)=> a.ratingRevievs > b.ratingRevievs ? 1 : -1);

    res.innerHTML = "";

    temp.forEach(item => {
            res.innerHTML += `
                <h3>${item.name}</h3>
                <div><img src="${item.img}" alt="${item.name}" style="max-width: 150px;"></div>
                <div>${item.ratingRevievs} ${countItems(item.ratingRevievs)(mas2)}</div>
                <div>Цена: ${item.price} ${countItems(item.price)(mas1)} </div>
                <hr>
            `;
            console.log(item.price);
            
        });
};

function countItems(num){
    let n = num % 10;
    let m = num % 100;
    let chislo = n === 1 && m !== 11 ? 1 : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2 : 0;
    return arr => arr[chislo];
}

//Какое-то умное слово КАРРИРОВАНИЕ