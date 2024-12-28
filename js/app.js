const inputOne = document.getElementById("inp-1");
const inputTwo = document.getElementById("inp-2");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnClear = document.getElementById("clear");

let action = "";

btnPlus.onclick = function () {
    action = "plus";
};

btnMinus.onclick = function () {
    action = "minus";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function clearInputs() {
  inputOne.value = "";
  inputTwo.value = "";
  resultElement.innerHTML = "";
}

btnClear.onclick = function () {
  clearInputs();
};

function computeResult(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  let result;
  
  if (actionSymbol === "plus") {
    result = num1 + num2;
  } else if (actionSymbol === "minus") {
    result = num1 - num2;
  }
  
  printResult(result);
}


submitButton.onclick = function () {
    if (action === "plus" || action === "minus") {
      computeResult(inputOne, inputTwo, action);
    } else {
      resultElement.innerHTML = "Please select an operation";
    }
  };