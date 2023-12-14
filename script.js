'use strict'

// Write a function min(a,b) which returns the least of two numbers a and b.

// function min(a, b){
//     a > b ? console.log(b) : console.log(a)
// }

// min(0, -1)

// ================================================================================================


// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// function pow(a, n){
//     a = a**n
//     console.log(a)
// }

// pow(3, 3)

// ================================================================================================

// ALGORITHM
// let salaries = {
//     Ann:200,
//     John:400,
//     Albert:500,
//     Jessica:"100",
// }

// let total = 0

// for (let key in salaries) {
//     if(typeof salaries[key] === 'number'){
//         total += salaries[key];
//     }
// }


// for (let key in salaries) {
//     if(!isNaN(salaries[key])){
//         total += Number(salaries[key]);
//     }
// }


// console.log(`Jami narxi: ${total}`)


let arr = [1, 2, 3, [4, 11 ,7]]

let total = 0,
    s = 0,
    b = 0

for(let i=0; i<arr.length; i++){
    s += arr[i]
    for(let j=0; j<arr[i].length; j++){
        total += arr[i][j]
        b = total + s
    }
}

console.log(b)