/**
 * Task:
 * List all movies that were made in 1906 using filter, map, foreach
 *
 * Documentation:
 * https://github.com/prust/wikipedia-movie-data
 */

/**
 * The result should look like this:
 *
 * The Automobile Thieves
 * Dream of a Rarebit Fiend
 * From Leadville to Aspen: A Hold-Up in the Rockies
 * Humorous Phases of Funny Faces
 * Kathleen Mavourneen
 * A Trip Down Market Street
 * Waiting at the Church
 */

function addLine(string) {
    const element = document.createElement('li')
    element.textContent = string
    document.getElementById('list').appendChild(element)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Your code goes here...
