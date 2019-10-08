# Data Structures

## Basic Intro (Demonstration)

-   why are basic types not enough, why do we need complex data structures?
-   how do I represent a sait course with a simple type?
    -   teacher
    -   classroom
    -   startingDate
    -   endingDate
-   How do I represent all of this in one single value?
-   You cant, (string isnt a good option), thats why we have objects, to group values (including functions) together

## Chapter concepts overview (Demonstration)

#### How to make an array

```js
const list = []
const listWithItems = ['apple', 'orange']
```

#### How to make an Object
```js
const obj = {}
const dog = {
    legs: 4,
    color: 'brown',
    bark: 'loud'
}
```

#### Object Mutability
-   updating arrays
-   updating values on an object

#### Array methods

-   shift
-   unshift
-   push
-   indexOf
-   slice
-   splice
-   concat

#### Spreading an Array

-   how to spread an array
-   easy way to create a new array with a new value

#### Desctructuring

-   how get values out of object

#### JSON

-   why is a JSON a thing? because usually u dont want to save an object and all its memory references and locations, just the raw data

## Chapter Exercises

- make a function called 'generateId'. It should take no arguments and return a string. Hint: Math.random might be helpful here. Click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) for MDN's docs on Math.random

- make a function called 'chooseRandomTeam'. It should take an array of strings and return a string.

-   make a 'createPlayer' function . It should take a string (name of player), and returns the following object with a random team assigned and a random id:
```js
{
  id: 'random id from the generateId function
  name: 'Name of Player',
  score: 0,
  team: 'random team from the chooseRandomTeam function.'
}
```

-   make a function called add10Points. It should take an array of players, and the name of the person you want to add 10 points to. It should return a new array with the updated score. Example:


```js

// Before:
const listOfPlayers = [
    {
        id: 123456,
        name: 'John',
        score: 10,
        team: 'red'
    },
     {
        id: 123456,
        name: 'Jane',
        score: 10,
        team: 'red'
    }
]

// call function
const updatedPlayerList = add10Points(listOfPlayers, 'Jane')

// After:
const listOfPlayers = [
    {
        id: 123456,
        name: 'John',
        score: 10,
        team: 'red'
    },
     {
        id: 123456,
        name: 'Jane',
        score: 20, // notice the increased value here
        team: 'red'
    }
]
```

- make a function called getTeamsOverallScore. It should take an array of players and a team name. It should return a number of the total score of all players on that team. (if all team members have zero points, then it should return zero).

