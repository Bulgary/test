var money;
var time;

money = +prompt ("Ваш бюджет на месяц?");
time = +prompt ("Введите дату в формате YYYY-MM-DD");
console.log (typeof(money));
console.log (time);

var appData = {
    budget: money,
    timeData: time
};

var theMostValuableExpenses = prompt("Введите обязательную статью расходов в этом месяце");
var howMuch = prompt("Во сколько обойдется?");
var expenses = {
    theMostValuableExpenses : howMuch
};

var optionalExpenses = {};

var income = [];

var budgetPerDay = money / 30;
alert ("бюджет на 1 день " + budgetPerDay);