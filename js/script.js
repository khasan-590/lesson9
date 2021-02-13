"use strict";


let getCalculate = document.getElementById('#start');
// console.log(document.getElementById('start'))

let getPlus = (document.getElementsByTagName('button')[0] , [1]);
// console.log(document.getElementsByTagName('button'));

let getCheckBox = document.querySelector('#deposit-check');
// console.logdocument.querySelector('#deposit-check');

let getCosts = document.querySelectorAll('additional_income-item');
// console.log(document.querySelectorAll('.additional_income-item'));

let getBudgetMonth = document.getElementsByClassName('budget_month-value'),
		getBudgetDay = document.getElementsByClassName('budget_day-value'),
		getExpensesMonth = document.getElementsByClassName('expenses_month-value'),
		getAddIncome = document.getElementsByClassName('additional_income-value'),
		getAddExpenses = document.getElementsByClassName('additional_expenses-value'),
		getIncomePeriod = document.getElementsByClassName('income_period-value'),
		getTargetMonth = document.getElementsByClassName('target_month-value');

// console.log(document.getElementsByClassName('budget_day-value'));

let getSum = document.querySelector('.deposit-amount'),
		getProcent = document.querySelector('.deposit-percent'),
		getPeriodSelect = document.querySelector('.period-select');
		