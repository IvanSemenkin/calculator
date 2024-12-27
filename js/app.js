const resultElement = document.getElementById('result');
const inputOne = document.getElementById('inp-1');
const inputTwo = document.getElementById('inp-2');

function add() {    
    const result = +inputOne.value + +inputTwo.value;
    resultElement.innerHTML = result;
}

function subtract() {
    const result = +inputOne.value - +inputTwo.value;
    resultElement.innerHTML = result;
}