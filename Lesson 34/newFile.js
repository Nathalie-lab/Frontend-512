//alert(window.name);

let x = document.querySelector("#x");

x.addEventListener("click", function(){
    //window.close();
    self.close(); //Закрывает сам себя через self и метод .close()
})