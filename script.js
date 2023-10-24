"use strict";

// 1 завдання
for (let x = 1; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('ЛолКек')
    } else if (x % 5 === 0) {
        console.log('Кек')
    } else if (x % 3 === 0) {
        console.log('Лол')
    } else {
        console.log(x)
    }
}


// 2 завдання

const errorMessage = 'Таке чуство шо Бог десь наказує нас за шось';
function isNumber(value) {
   return typeof value === 'number'
}
function getEvenNumbersWithFor(value) {
    if (!isNumber(value)) {
        console.log(errorMessage);
        return;
    }

    for (let i = 1; i < value; i++) {
        if (i % 2 === 0) console.log(i)
    }
}

function getEvenNumbersWithWhile(value) {
    if (!isNumber(value)) {
        console.log(errorMessage);
        return;
    }

    let i = 1;
    while (i < value) {
        if (i % 2 === 0) console.log(i)
        i++;
    }
}

getEvenNumbersWithFor(11)
getEvenNumbersWithFor('11')
getEvenNumbersWithWhile(14)
getEvenNumbersWithWhile('14')