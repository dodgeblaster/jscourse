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

#### Array methods
-   push
```js
const myArray = [1,2,3,4]
myArray.push(5)
// now the array is [1,2,3,4,5]

// note: we can change the array even though its defined as const, because its still pointing to the same
// array. The contents of the array have been updated, not the entire array reference.

```
- pop
```js
const myArray = [1,2,3,4]
myArray.pop()
// now the array is [1,2,3]
```
-   shift
```js
const myArray = [1,2,3,4]
myArray.shift()
// now the array is [2,3,4]
```
-   unshift
```js
const myArray = [2,3,4]
myArray.unshift(1)
// now the array is [1,2,3,4]
```
-   indexOf
```js
const myArray = [1,2,3,4]
myArray.indexOf(2) // 2 being that value in the array
// returns 1, which is the index
myArray[1] // will return 2 because its at the index of 1
```
-   slice
    - [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    - returns part of the array, doesnt alter the original
-   splice
    - [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
    - returns part of the array, alters the original 

#### Spreading an Array

```js
// if i have 2 lists, i an create a combined list with the spread operator:
const list1 = [1,2,3]
const list2 = [4,5,6]
const newList = [
  ...list1,
  ...list2
]
// new list = [1,2,3,4,5,6]

// this is also another way to add something to a list:
const newestList = [
  ...newList,
  7
]
// results in [1,2,3,4,5,6,7]
```


#### Object Methods
- Object.keys
```js
const obj = {
    name: 'John',
    job: 'developer
}

Object.keys(obj) // will return an array of all the keys


```
#### Desctructuring

```js
const personFromDatabase = {name: "Faraji", age: 23}
const {name} = personFromDatabase
```

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

