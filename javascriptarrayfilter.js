// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

function getEvenNumbers(numbersArray){
    let evens = numbersArray.filter(num => num % 2 == 0)
    console.log(`The even numbers in the array ${numbersArray} are:`)
    console.log(evens)
}
getEvenNumbers([2,4,5,6])
console.log('========')
getEvenNumbers([1,2,3,6,8,10])
console.log('========')
getEvenNumbers([1,2])
console.log('========')
getEvenNumbers([12,14,15])
console.log('========')
getEvenNumbers([13,15])