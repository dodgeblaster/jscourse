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
-   indexOf (good for arrays with simple data types)
```js
const myArray = ['one','two','three','four']
myArray.indexOf('two') // 2 being that value in the array
// returns 1, which is the index
myArray[1] // will return 'two' because its at the index of 1
```
- findIndex (good for arrays with complex data types, AKA objects
```js

const myArray = [
    {name: 'one'},
    {name: 'two'},
    {name: 'three'},
    {name: 'four'}
]

const result = myArray.findIndex(function(x) {
    return x.name === 'two'
}) // will return 1

// arrow function alternative
const result = myArray.findIndex(x => x.name === 'two') // will return 1
```

-   slice
    - [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    - returns part of the array, doesnt alter the original
-   splice
    - [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
    - returns part of the array, alters the original 
    
    
- find
Find is unique in that it takes a function. Lets spend some time talking through how this works...
```js
const found = [1,2,3,4].find(x => {
    return x === 3
})

const user = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'James'
    },
    {
        id: 3,
        name: 'Jane'
    }
].find(x => {
    return x.id === 2
})

```

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

#### Good example of practical use for Array methods
```js
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
```

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

#### Examples of how we can take data from an object with forEach and add up a total
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

// arrow function alternative
let total = 0
purchases.forEach(item => {
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

// arrow function alternative
const makeTodoItem = nameOfTodo => {
    return {
        name: nameOfTodo,
        done: false
    }
}

```


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
    // should tak an array of strings like ['red team', 'blue team', 'yellow team']
    // and return 1 team randomly. Math.random might help with this as well
}

```

-   make a 'createPlayer' function . It should take a string (name of player), and returns the following object with a random team assigned and a random id:
```js
const exampleOfTeamObject = {
  id: 'random id from the generateId function
  name: 'Name of Player',
  score: 0,
  team: 'random team from the chooseRandomTeam function.'
}

function createPlayer(name) {
    // return an object in the format of exampleOfTeamObject
}
```

-   make a function called add10Points. It should take an array of players, and the name of the person you want to add 10 points to. It should return a new array with the updated score. Example:


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

