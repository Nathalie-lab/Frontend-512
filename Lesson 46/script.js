/* setTimeout(function(){
    console.log("1");  
}, 1500); */

//console.log("2");

//Асинхронность - не по очереди задачи выполняются

//Цикл событий Event Loop 

//Client -> Server -> DataBase -> Server -> Client

//Порядок асинхронных функций

/* console.log("Клиент: хочу получить список пользователей");
console.log("...");

setTimeout(function(){
    console.log("Сервер: запрашиваю список пользователей в Базе данных");
    console.log("...");
        setTimeout(function(){
            console.log("База данных: формирую список пользователей");
            console.log("...");
                setTimeout(function(){
                    console.log("Сервер: трансформирую данные для клиента");
                    console.log("...");

                        setTimeout(function(){
                            console.log("Клиент: получил данные и отображаю их");
                        }, 1000)
                }, 500)            
        }, 500)
}, 1000); */


// Promise (обещание) - надстройка к асинхронному коду

/* console.log("Клиент: хочу получить список пользователей");
console.log("...");

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Сервер: запрашиваю список пользователей в Базе данных");
        console.log("...");
        resolve(); // когда закончим асинхронную операцию и предудыщий код будет выполнени без ошибок
    }, 1000);
})
.then(function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let users = [
                {uid: 'id1', name: 'Igor'},
                {uid: 'id2', name: 'Irina'},
            ]
            //reject("База данных не смогла получить список пользователей");
            console.log("База данных: формирую список пользователей", users);
            console.log("...");
            resolve(users);
        }, 500); 
    });
})
.then(function(dbUsers){
    return new Promise(function(resolve, rejects){
        setTimeout(function(){
            console.log("Сервер: трансформирую данные для клиента");
            console.log("...");
            let users = dbUsers.map(function(user){
                return {
                    id: user.uid,
                    firstName: user.name,
                    timestamp: Date.now()
                }
            })
            resolve(users);
        }, 500); 
    });
})
.then(function(users){
    return new Promise(function(resolve, rejects){
        setTimeout(function(){
            console.log("Клиент: получил данные и отображаю их", users);
            resolve();
        }, 500); 
    });
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Finally");
}) */




/* let test = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
}

test(1000).then(()=>console.log("1000 ms"));
test(2000).then(()=>console.log("2000 ms"));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log("All"); 
}) //в самом конце отрабатывает

Promise.race([test(1000), test(2000)]).then(() => {
    console.log("Race"); 
}) //отрабатывает после первого promise */




/* let test = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
}

let p1 = test(1000).then(() => ({name: "Promise 1000"}));
let p2 = test(2000).then(() => ({name: "Promise 2000"}));


Promise.all([p1, p2]).then((data) => {
    console.log("All", data); 
})

Promise.race([p1, p2]).then((data) => {
    console.log("Race", data); 
})  */


//получение данных с сервера fetch 
/* fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json()) //данные преобразуются в объект Javascript
      .then(json => console.log(json))   */


/* document.querySelector("#load").addEventListener("click", load); 

function load(){
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            let ul = document.querySelector("#list");
            let html = data.map(function(item){
                return "<li>" + item.id + " " + item.name + " " + item.email + "</li>";
            })
            ul.insertAdjacentHTML("afterbegin", html.join(" "));
        })
} */


// async / await - останавливает выполнение функции



document.querySelector("#load").addEventListener("click", load);

async function load() {
    try{
    let url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url);
    let data = await response.json();

    let html = data.map(function (item) {
        return "<li>" + item.id + " " + item.name + " " + item.email + "</li>";
    })
    document.querySelector("#list").insertAdjacentHTML("afterbegin", html.join(" "));
    } catch(error){
        console.error("Ошибка при загрузке:", error); 
    }
}