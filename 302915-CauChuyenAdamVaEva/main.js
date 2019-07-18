let Adam = new Human("Adam", "male", 1500);
let Eva = new Human("Eva", "female", 1000);
let apple = new Apple();

setInterval(function () {

    Adam.eatApple()
    Eva.eatApple();
    console.log(apple, Adam, Eva)
}, 500)
