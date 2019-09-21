/**
 * Instructions
 *
 * Write a program that creates a string that represents an 8×8 grid,
 * using newline characters to separate lines. At each position of the grid
 * there is either a space or a "#" character. The characters should form a
 * chessboard.
 *
 * Passing this string to console.log should show something like this:
 * #_#_#_#_
 * _#_#_#_#
 * #_#_#_#_
 * _#_#_#_#
 * #_#_#_#_
 * _#_#_#_#
 *
 * When you have a program that generates this pattern, define a binding size = 8
 * and change the program so that it works for any size, outputting a grid of
 * the given width and height.
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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Your code goes here...
