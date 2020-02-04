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

# Working with Arrays
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
-   indexOf (good for arrays with simple data types)
```js
const myArray = ['one','two','three','four']
myArray.indexOf('two') // 2 being that value in the array
// returns 1, which is the index
myArray[1] // will return 'two' because its at the index of 1
```
-   slice
    - [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    - returns part of the array, doesnt alter the original
-   splice
    - [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
    - returns part of the array, alters the original 
    

## Exercises #1 working with arrays
- Make a function that takes a list (of strings), and adds an item, and returns the updated list
```js
const exampleList = [
    'banans',
    'oranges',
    'apples'
]

function addToList(list, item) {

}

```

- Make a function that takes a list and removes the last item, and returns the updated list
```js
function removeLastItem(list){

}
```

- Make a function that adds an item to the beginning of a list, and returns the updated list:
```js
function addToBeginningOfList(list, item) {

}
```

- Make a function that removes an item from the beginning of the list, and returns the updated list:
```js
function removeFromBeginningOfList(list) {

}
```


## Mutating Objects
Demonstration of changing an object:
- Make a function that takes a studentObject and a name, and returns the student with the name:
```js
const john = {
    name: 'Henry',
    country: false,
    email: false
}

function updateName(student, name) {
    // do something
}

const updatedStudent = updateName(john, 'John')
console.log(updatedStudent)
```
## Exercises #2 with Objects 
- Make a function that takes a studentObject, and a country, and returns a student with an updated country
```js
const john = {
    name: 'John',
    country: false,
    email: false
}

function updateCountry(student, country) {
    // do something
}

const updatedStudent = updateCountry(john, 'CDN')
console.log(updatedStudent)
```

- Make a function that takes a studentObject, and an email, and returns a student with an updated email
```js
const john = {
    name: 'John',
    country: 'CDN',
    email: false
}

function updateEmail(student, email) {
    // do something
}

const updatedStudent = updateEmail(john, 'john@example.com')
console.log(updatedStudent)
```

# Array Methods
There are 3 ways to find an item in an array
- `myList.indexOf`
- `myList.findIndex`
- `myList.find`

#### myList.indexOf
indexOf will try to find the index of the string or number you give as a parameter
```js
const myArray = ['one','two','three','four']
myArray.indexOf('two') // 2 being that value in the array
// returns 1, which is the index
myArray[1] // will return 'two' because its at the index of 1
```

This will result in a number, example `0` or `4`. This will work if the array has simple primative values.


#### myList.findIndex
Most of the time, our arrays have objects, or collections of values grouped together as objects. In this case, `indexOf` will not work. We need to say what parameter we are looking for on the object. Example:
```js
const users = [
    {
        id: 1234,
        name: 'Jill'
    },
    {
        id: 1235,
        name: 'Jessica'
    }
]

```
If we wanted to find a user with a specific id, we would have to let the `findIndex` function know we want to search each object based on their id. This requires us to do something we have not seen yet, which is supply `findIndex` with a function
```js

const users = [
    {
        id: 1234,
        name: 'Jill'
    },
    {
        id: 1235,
        name: 'Jessica'
    },
    {
        id: 1236,
        name: 'Julie'
    }
]

const result = myArray.findIndex(function(x) {
    return x.id === 1235'
}) // will return 1

// arrow function alternative
const result = myArray.findIndex(x => x.name === 'two') // will return 1
```

#### myList.find
Rather than get the index, if we just want to find an item in an array and get it, we can instead use the `find` array method:
```js
const list = [1,2,3,4]

const found = list.find(x => {
    return x === 3
})

const users = [
    {
        id: 1234,
        name: 'Jill'
    },
    {
        id: 1235,
        name: 'Jessica'
    },
    {
        id: 1236,
        name: 'Julie'
    }
]

const userIAmLookingFor = users.find(x => {
    return x.id === 1235
})

```
This will result in being given the target object rather than just the index.

#### Referencing a single item in an array
```js
const purchases = [
    {
        name: 'WALMART',
        spent: 100
    },
    {
        name: 'CANADIAN TIRE',
        spent: 60
    },
    {
        name: 'STABUCKS',
        spent: 6
    }
]

const result1 = purchases[0] // this will be the first item
const result2 = purchases[1] // this will be the second item
const result3 = purchases[2] // this will be the third item
```

## Spreading an Array

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


## The ForEach array method, an alternative to the loop
add up the total of something
```js
const purchases = [
    {
        name: 'WALMART',
        spent: 100
    },
    {
        name: 'CANADIAN TIRE',
        spent: 60
    },
    {
        name: 'STABUCKS',
        spent: 6
    }
]

let total = 0
purchases.forEach(function(item){
    total = total + item.spent
})


```

#### Example of how to find an item in an array and update a value
```js
const purchases = [
    {
        name: 'WALMART',
        spent: 100
    },
    {
        name: 'CANADIAN TIRE',
        spent: 60
    },
    {
        name: 'STABUCKS',
        spent: 6
    }
]

const indexOfWalmart = purchases.findIndex(function(item){
    return item.name === 'WALMART' 
}) // returns 1

purchases[indexOfWalmart].spent = 110
// because indexOfWalmart ends up being 1, this is the same as:
purchases[1].spent = 110

```

### Example of a function returning an object
```js
function makeTodoItem(nameOfTodo) {
    return {
        name: nameOfTodo,
        done: false
    }
}

```

## Netflix Developers course on array methods
[Course Link](https://egghead.io/lessons/rxjs-the-array-foreach-method)



## Some helpful notes before the exercises
- There are some functions made available to us in the Brwoser environement such as:
    - Date
    - Math
- functions such as `Math.random` and `Math.floor` might be helpful for generating random numbers
- finding the length of an array can easily be determined by accessing this property: `myList.length`.


## Chapter Exercises
- make a function called 'generateId'. It should take no arguments and return a string. Hint: Math.random might be helpful here. Click [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) for MDN's docs on Math.random

```js
function generatedId() {
    // should return something like: 123454245
}

```

- make a function called 'chooseRandomTeam'. It should take an array of strings and return a string.
```js
function chooseRandomTeam(teams) {
    // should take an array of strings like ['red team', 'blue team', 'yellow team']
    // and return 1 team randomly. Math.random and teams.length might help
}

```

-   make a 'createPlayer' function . It should take a string (name of player), and returns the following object with a random team assigned and a random id:
```js
const exampleOfPlayerObject = {
  id: 'random id from the generateId function'
  name: 'Name of Player',
  score: 0,
  team: 'random team from the chooseRandomTeam function.'
}

function createPlayer(name) {
    // return an object in the format of exampleOfPlayerObject
}
```

-   make a function called add10Points. It should take an array of players, and the name of the person you want to add 10 points to. It should return a new array with the updated score. 
(Hint, use findIndex to find the person you want to update)
Example:


```js

// listOfPlayers before function call :
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

// listOfPlayers after function call:
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


function add10Points(listOfPlayers, player) {
    // return an updated list of players with 10 points added to which ever player is mentioned
}
```

- make a function called getTeamsOverallScore. It should take an array of players and a team name. It should return a number of the total score of all players on that team. (if all team members have zero points, then it should return zero).
```js

function getTeamsOverallScore(listOfPlayers, team) {
    // should return a total score of all the players scores that are on that team
}

```


