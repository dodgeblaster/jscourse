/**
 * Instructions
 *
 * Write a program that uses console.log to print all the numbers from 1 to 100,
 * with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
 * number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 *
 * When you have that working, modify your program to print "FizzBuzz" for numbers that
 * are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible
 * by only one of those).
 *
 * (This is actually an interview question that has been claimed to weed out a significant
 * percentage of programmer candidates. So if you solved it, your labor market
 * value just went up.)
 *
 */

/**
 * Helper Functions
 *
 * These are helper functions to get your result on a webpage,
 * you dont need to understand what is going on in these functions,
 * we will cover them in our functions and DOM chapters.
 */

function addLine(string) {
    const element = document.createElement('li')
    element.textContent = string
    document.getElementById('list').appendChild(element)
}

// example usage of addLine function:
addLine('1')
addLine('2')
addLine('3')

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Your code goes here...
