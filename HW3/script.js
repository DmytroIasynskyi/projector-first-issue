"use strict";

// 1 завдання

function recursiveOddSumTo(number) {
    if (typeof number !== 'number' || number < 0) return 'Please enter a positive number!';
    if (number === 0) return 0;
    if (number === 1) return number;
    if (number % 2 !== 0) {
        return number + recursiveOddSumTo(number - 1)
    } else {
        return recursiveOddSumTo(number - 1)
    }
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25
console.log(recursiveOddSumTo(0)) // 0
console.log(recursiveOddSumTo(-10)) // error
console.log(recursiveOddSumTo('-10')) // error



// 2 завдання

function iterativeOddSumTo(number) {
    if (typeof number !== 'number' || number < 0) return 'Please enter a positive number!';
    if (number === 0) return 0;
    let result = 0;
    for(let i = 1; i <= number; i++){
        if (i % 2 !== 0) result += i;
    }
    return result;
}

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25
console.log(iterativeOddSumTo(0)) // 0
console.log(iterativeOddSumTo(-10)) // error
console.log(iterativeOddSumTo('-10')) // error

