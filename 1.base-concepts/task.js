"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d === 0) {
    arr.push(-b/(2*a));
  } else if (d > 0) {
    arr.push(((-b + Math.sqrt(d) )/(2*a)), ((-b - Math.sqrt(d) )/(2*a)));
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let newPercent = Number(percent);
  let newContribution = Number(contribution);
  let newAmount = Number(amount);
  let newDate = Number(date);
  if (Number.isNaN(newContribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  }
  if (Number.isNaN(newPercent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  }
  if (Number.isNaN(newAmount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }
  let creditBody = newAmount - newContribution;
  let monthlyPer = newPercent/1200;
  let now = new Date();
  let result = (newDate - now)+1000;
  let n = Math.ceil(result / 1000 / 60 / 60 / 24 / 30.5);
  let monthlyPay = creditBody * (monthlyPer + (monthlyPer / (((1 + monthlyPer)**n ) - 1)))
  totalAmount = Number((monthlyPay * n).toFixed(2));
  return totalAmount;
}
