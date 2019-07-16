function getSpeed() {
    return 50;
}

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    let X = getSpeed();
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }
    this.moveXY = function () {
        if (this.left > window.innerWidth - hero.size) {
            X = -getSpeed();
        } else if (this.left < 0) {
            X = getSpeed();
        }
        this.left += X;
    }
}
let hero = new Hero('mario.png', 20, 30, 100);
function start() {
    hero.moveXY();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}
start();