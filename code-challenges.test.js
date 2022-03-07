// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe('fibonacciSequence', () => {
    it('takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence', () => {
        const numOne = 6, numOneExpected = [1, 1, 2, 3, 5, 8]
        const numTwo = 10, numTwoExpected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

        expect(fibonacciSequence(numOne)).toEqual(numOneExpected)
        expect(fibonacciSequence(numTwo)).toEqual(numTwoExpected)
    })
})

// Good failure!

// b) Create the function that makes the test pass.

// Pseudo Code:
// create a function named fibonacciSequence
// fibonacciSequence will take a number parameter named num
// since we know the number will always be greater than or equal to 2, we can have a default result of [1, 1]
// we can use this default result to get all results that are greater than 2
// we can do this by adding the first two numbers of the sequence together to get the next number
// now we can always add the previous two elements to get the next number in the sequence
// when we reach the desired length, we can return the array

// original solution
// const fibonacciSequence = num => {
//     let result = [1, 1]
//     for (let i = 2; i < num; i++) {
//         const first = result[i - 2], second = result[i - 1]
//         result.push(first + second)
//     }
//     return result
// }

const fibonacciSequence = num => {
    let sequence = [...new Array(num)]
    sequence.forEach((v, i) => i > 1 ? sequence[i] = sequence[i - 2] + sequence[i - 1] : sequence[i] = 1)
    return sequence
}

// Passed the test!

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe('sortOdds', () => {
    it('takes in an array and returns a new array of only odd numbers sorted from least to greatest', () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"], fullArr1Expected = [-9, 7, 9, 199]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"], fullArr2Expected = [-823, 7, 23]

        expect(sortOdds(fullArr1)).toEqual(fullArr1Expected)
        expect(sortOdds(fullArr2)).toEqual(fullArr2Expected)
    })
})

// Good failure!

// b) Create the function that makes the test pass.

// Pseudo Code:
// create a function named sortOdds
// sortOdds will take in array named arr
// since we are dealing with mixed arrays we have to filter out any non numbers and numbers that are even
// we can sort the filtered array from least to greatest
// we can return the array or sorted odd numbers

const sortOdds = arr => arr.filter(v => typeof v === 'number' && v % 2 !== 0).sort((a, b) => a - b)

// Passed the test!

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe('accumulatingSum', () => {
    it('takes in an array and returns an array of the accumulating sum. An empty array should return an empty array', () => {
        const numbersToAdd1 = [2, 4, 45, 9], numbersToAdd1Expected = [2, 6, 51, 60]
        const numbersToAdd2 = [0, 7, -8, 12], numbersToAdd2Expected = [0, 7, -1, 11]
        const numbersToAdd3 = [], numbersToAdd3Expected = []

        expect(accumulatingSum(numbersToAdd1)).toEqual(numbersToAdd1Expected)
        expect(accumulatingSum(numbersToAdd2)).toEqual(numbersToAdd2Expected)
        expect(accumulatingSum(numbersToAdd3)).toEqual(numbersToAdd3Expected)
    })
})

// Good failure!

// b) Create the function that makes the test pass.

// Pseudo Code:
// create a function named accumulatingSum
// accumulatingSum will take in an array named arr
// we can make a new array by iterating over the input array and replacing the element with the sum of all the previous elements
// we can return the new array

// original solution
// const accumulatingSum = arr => {
//     let sum = 0
//     return arr.map(v => {
//         sum += v
//         return sum
//     })
// }

const accumulatingSum = arr => arr.map((v, i) => i > 0 ? arr.slice(0, i + 1).reduce((a, b) => a + b) : v)

// Passed the test!