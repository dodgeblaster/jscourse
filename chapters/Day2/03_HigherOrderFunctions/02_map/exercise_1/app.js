/**
 * Task:
 * List all the names of the movies using map and forEach array methods
 * Use the addLine helper function to show the name on the page
 *
 * Documentation:
 * https://github.com/prust/wikipedia-movie-data
 */

function addLine(string) {
    const element = document.createElement('li')
    element.textContent = string
    document.getElementById('list').appendChild(element)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Your code goes here...
