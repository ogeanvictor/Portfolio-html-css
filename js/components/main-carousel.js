const buttonRigth = document.querySelector('.button-arrow._right');
const buttonLeft = document.querySelector('.button-arrow._left');
const elements = document.querySelector('.elements')

let pixelsCount = 100;

buttonRigth.addEventListener('click', function () {
    pixelsCount = pixelsCount + 100;
    elements.style = `transform: translateX(${pixelsCount}px);`
});

buttonLeft.addEventListener('click', function () {
    pixelsCount = pixelsCount - 100;
    elements.style = `transform: translateX(${pixelsCount}px);`
});