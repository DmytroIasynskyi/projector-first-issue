"use strict";

// 1 завдання --------------------------------------------------------------------------

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

let initials = userNames
    .map(userName => userName.split(' ').map(value => value[0] + '.').join(''))
    .sort();

//let initials = [];
// userNames.forEach((name, index) => {
//     initials[index] = '';
//     name.split(' ').forEach(value => initials[index] += value[0] + '.')
// })
// initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// 2 завдання --------------------------------------------------------------------------

const userNames1 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const letters = ['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'];

let filteredNames = [];

for (let i = 0; i < userNames1.length; i++) {
    if (letters.includes(userNames1[i][0])) filteredNames.push(userNames1[i]);
}

let filteredNames2 = userNames1.filter(userName => letters.includes(userName[0]));

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
console.log(filteredNames2); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// 3 завдання --------------------------------------------------------------------------

const currentMaxValue = 4589;
let reverseMaxValue = +currentMaxValue.toString().split('').reverse().join('');

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// 4 завдання --------------------------------------------------------------------------

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = 1;

resultsArray.flat(Infinity).forEach(number => productOfArray *= number);

console.log(productOfArray); // 24