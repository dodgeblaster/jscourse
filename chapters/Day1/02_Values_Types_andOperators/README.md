# 1. Values, Types, and Operators

## Basic Intro (Demonstration)

-   talk about expressions generally
-   values about expressions generally
-   operators about expressions generally

## Read Chapter (In Class Reading)

-   Read chapter in 30 minutes

## Chapter concepts overview (Demonstration)


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
values are the things or material of your program
variables are names or assignments pointing to a value
Think of a wire connecting a variable to a value, example:
```
let myCar = 'Kia Forte'
myCar = 'Honda Civic'
```
This makes sense, because its possible that for me to get a new car.

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
let color = prompt('what is your favourite color?')

// OUTPUT
console.log(color)

```

## If statements

```js
let color = prompt('what is the best color?')

if (color !== 'blue') {
  console.log('Your wrong')
}

if (color === 'blue') {
  console.log('Your right')
}

```


## Chapter Exercises (In Class Work)

Download exercise files and make a sorting hat app using if statements.
For those who have never read Harry Potter, here is the answer key:

| House      | Color  | Animal |
| ---------- | ------ | ------ |
| Griffendor | Red    | Lion   |
| Ravenclaw  | Blue   | Raven  |
| Hufflepuff | Yellow | Badger |
| Slytherin  | Green  | Snake  |
