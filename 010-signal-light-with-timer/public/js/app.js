/* I know it's ugly, but it does the work */
const red = document.getElementById("red");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");

let redChange = () => {
    red.classList.add('red-glow');
    setTimeout(function () {
        red.classList.remove('red-glow')
    }, 500)
}
    
red.addEventListener('click', event => {
    redChange();
});


let yellowChange = () => {
    yellow.classList.add('yellow-glow');
    setTimeout(function () {
        yellow.classList.remove('yellow-glow')
    }, 500)
}
    
yellow.addEventListener('click', event => {
    yellowChange();
});


let greenChange = () => {
    green.classList.add('green-glow');
    setTimeout(function () {
        green.classList.remove('green-glow')
    }, 500)
}
    
green.addEventListener('click', event => {
    greenChange();
});


