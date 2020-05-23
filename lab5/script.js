const OpsNames = ["changeColor", "changeSize", "changeBG", "rotate"];

let timer = document.querySelector(".time");
let bgColorElem = document.querySelector(".bgColor");
let fontSizeElem = document.querySelector(".fontSize");
let fontColorElem = document.querySelector(".fontColor");
let degElem = document.querySelector(".deg");
let translateElem = document.querySelector(".translate");

function random(num) {
    return Math.trunc(Math.random() * 1000) % num;
}

function propCounter (obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count;
}

var ops = {
    changeColor: function (elem) {
        let color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        elem.style.color = color;
        fontColorElem.innerHTML = "Цвет цифр: " + color;
    },
    changeSize: function (elem) {
        let size = `${random(50)}px`;
        elem.style.fontSize = size;
        fontSizeElem.innerHTML = "Размер шрифта: " + size;
    },
    changeBG: function (elem) {
        let color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        elem.style.background = color;
        bgColorElem.innerHTML = "Цвет фона: " + color;
    }, 
    rotate: function (elem) {
        let deg = random(360);
        elem.style.transform = `rotate(${deg}deg)`;
        degElem.innerHTML = "Угол поворота: -" + deg + " градусов";
    }
};

timer.addEventListener("click", function () {
    ops[OpsNames[random(propCounter(ops))]](timer);
});