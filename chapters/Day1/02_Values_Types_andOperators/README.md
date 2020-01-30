# 2. Values, Types, and Operators

## Intro

-   expressions
-   values and expressions
-   operators and expressions

## Values
- Number
- String
- Boolean
- Empty Values
  - undefined
  - null
  - NaN
  
   
## Operators
```js
// Unary
typeof

// Binary
// Mathmatical Operators
+ // Add
- // Subtract
/ // Divide
* // Multiply
% // Remainder

// Comparison Operators
=== // is equal
!== // is not equal
>   // is bigger than
<   // is smaller than
>=  // is bigger or equals
<=  // is smaller or equals

// Logical
&& // and
|| // or
```

## Helpful way to think about Logical Operators

```js
(true && false && true)
// with ANDS, any false value makes it all false
// the above has 1 false, there for its all false

(true && true && true)
// the above has 0 false, therefore its all true

(true || false || true)
// with ORS, any true statement makes this whole thing true

(false || false || false)
// the above has no true, therefore the whole thing is false

```

## Assignment with variables

```js
const favouriteNumber = 12
const favouriteColor = 'blue'
const isHappyWithWeather = false
```

## variables vs values
Values are the things or material of your program.
Variables are names or assignments pointing to a value.
Think of a variable as a name that has a wire connecting it to a value.
Example:
```
let myCar = 'Kia Forte'
myCar = 'Honda Civic'
```
Its possible that yesterday my car was a forte, and today my car is a civic. Both the Forte and the Civic still exist, but my car is no longer referring to the still existing Forte, it is now referring to the Civic.

## Grouping related things together
```js
const dog = {
  legs: 4,
  color: 'yellow'.
  age: 2
}
```
These are assignments or variables grouped together in what we would call an object.
We recognize this sort of structure because we deal with computer folders all the time

## Primitive Values vs New values we create

- 1 is a primitive value
- 'my dog' is a primitive value
- 'my cat' is a primitive value
- {} is a new value we created


## IO
IO usually means input and output. If we had no input or output, our code would have no connection to the real world and be useless. We need some sort of IO to get started with coding js, so we will start with the following:
```js
// INPUT
const color = prompt('what is your favourite color?')

// OUTPUT
console.log(color)

```

# Exercise 1 - TimeTracker
Create a time tracker app, where the user is prompted for the hours they worked (Mon - Fri).
Once the user submits the hours, `console.log` the total amount of hours worked.



## If statements

```js
const color = prompt('what is the best color?')

if (color !== 'blue') {
  console.log('Your wrong')
}

if (color === 'blue') {
  console.log('Your right')
}
```

## Exercise 2 - The Sorting Hat

Make an app that asks the user what their favourite color and animal is.
If the answers match a house from Hogwarts, `console.log` the House they belong to.
If they dont match, default to Hufflepuff.

For those who have never read Harry Potter, here is the answer key:

| House      | Color  | Animal |
| ---------- | ------ | ------ |
| Griffendor | Red    | Lion   |
| Ravenclaw  | Blue   | Raven  |
| Hufflepuff | Yellow | Badger |
| Slytherin  | Green  | Snake  |
