class Calculator {
  constructor(previousValue, currentValue) {
    this.previousValue = previousValue;
    this.currentValue = currentValue;
  }
}

const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const allClearBtn = document.querySelector(".all-clear");
const previousValue = document.querySelector(".previous");
const currentValue = document.querySelector(".current");
