/**
 * Task:
 * What years did Robert Downy Jr. star in movies?
 * Format the print out as:
 * 'YYYY movieTitle'
 *
 * Documentation:
 * https://github.com/prust/wikipedia-movie-data
 */

/**
 * The answer should look like this:
 *
 * Devil Tiger
 * Happy Landing
 * A Man's Game
 * Speed Wings
 * Voice in the Night
 */

function addLine(string) {
    const element = document.createElement('li')
    element.textContent = string
    document.getElementById('list').appendChild(element)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Your code goes here...
