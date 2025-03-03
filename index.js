let num1 = 0;
let num2 = 0;
let operator = "";

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five= document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight= document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let mult = document.getElementById("mult");
let divi = document.getElementById("divi");
let ad = document.getElementById("add");
let sub = document.getElementById("subt");
let eq = document.getElementById("enter");
let screen= document.getElementById("screen");
let clear= document.getElementById("clear");

screen.textContent = "0";

one.addEventListener("click", () => appendScreen("1"));
two.addEventListener("click", () => appendScreen("2"));
three.addEventListener("click", () => appendScreen("3"));
four.addEventListener("click", () => appendScreen("4"));
five.addEventListener("click", () => appendScreen("5"));
six.addEventListener("click", () => appendScreen("6"));
seven.addEventListener("click", () => appendScreen("7"));
eight.addEventListener("click", () => appendScreen("8"));
nine.addEventListener("click", () => appendScreen("9"));
zero.addEventListener("click", () => appendScreen("0"));
mult.addEventListener("click", () => handleOp("*"));
divi.addEventListener("click", () => handleOp("/"));
ad.addEventListener("click", () => handleOp("+"));
sub.addEventListener("click", () => handleOp("-"));
eq.addEventListener("click", () => handleEq());
clear.addEventListener("click", () => clearScreen());

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const divide = function (a, b) {
  return a / b;
};

const multiply = function (a, b) {
  return a * b;
};

const clearScreen = function () {
  screen.textContent = "0"
  operator = "";
  num1 = 0;
  num2 = 0;
};

const appendScreen = function (a) {
  if (screen.textContent === "0") {
    screen.textContent = a;
  } else {
    screen.textContent += a;
  };
};

const operate = function (a, op, c) {
  switch (op) {
    case "*": 
      return multiply(a, c);
    
    case "+":
      return add(a, c);
    
    case "/":
      return divide(a, c);
    
    case "-":
      return subtract(a, c);
    
    default:
      console.log("Error in the function. Improper use case.");
      return null;
  }
};

const handleOp = function (op) {
  if (operator === "") {
    num1 = parseInt(screen.textContent);
    screen.textContent = "0";
  };

  operator = op; 
};

const handleEq = function () {
  if (operator === "") {
    console.log("No operator has been selected. Nothing to calculate.");
    return 1;
  };

  num2 = parseInt(screen.textContent);
  screen.textContent = operate(num1, operator, num2);
  
  operator = "";
};



/*if = pressed assign total to new var
when new operator is pressed, clear screen and add operator
when equals is pressed, repeat*/