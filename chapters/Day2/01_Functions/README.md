# Functions

## Basic Intro (Demonstration)

#### What are functions and why should we use them?

-   Demonstrate a function
-   talk about inputs and return values
-   talk about how they help package up code and reuse it. (like css classes)
-   Functions help us name code and give it meaning

## Chapter concepts overview (Demonstration)

#### 3 ways to write functions

```js
const square = function(x) {
  return x * x;
}

function square(x) {
  return x * x;
}

const square = x => x * x

```


#### Function tied to its environment vs Functions that are not

Function tied to its environment:
```js
const main = () => {
  const sneakyDependancy = 5

  const printFinalScore = () => {
    console.log(sneakyDependancy)
  }
  
  printFinalScore()
}

main()
```

Function that doesnt care about its environment
```js
const main = () => {
  const sneakyDependancy = 5

  const printFinalScore = (x) => {
    console.log(x)
  }
  
  printFinalScore(sneakyDependancy)
}

main()
```

#### Scope

General Idea:
```js
const b = 2

function f1(a) {
  // it gets a from the arguments, so thats straightforward,
  // but if b is not defined in this function, it will go up 1 'scope' and see if its defined there
  // and will continue going up the next level of scope, all the way up to global scope until it finds the variable
	console.log( a + b );
}

f1( 2 ) // 4

```
If we have the same variable defined in multiple score:
```js
const b = 2

function f1(a) {
  // it gets a from the arguments, so thats straightforward,
  // it also gets b from inside this scope rather than the one oustide, because it looks here first. 
  	const b = 4
	console.log( a + b );
}

f1( 2 ) // 6
```

If we have multiple levels of scope, it always look at whats closest to it, and works its way out:
```js
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor; // first looks for factor inside this function, then in its parents scope
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
```


How scope works with ES5 vars:
```js
const f1 = () => {
  var var1 = 1
  console.log(var1); // works
}

f1()
console.log(var1); // does not work, its inside the functions scope


if (true) {
  var var2 = 2
  console.log(var2); // works
}

console.log(var2); // works because var doesnt listen to block scope
```
How scope works with ES6 let and const
```js

const f1 = () => {
  const const1 = 1
  console.log(const1); // works
}

f1()
console.log(const1); // does not work, its inside the functions scope


if (true) {
  const const2 = 2
  console.log(const2); // works
}

console.log(const2); // does not work because const and let listens to block scope
```
#### Explain the call stack

```js

const chooseRed = () => {
	console.log('chose red')
}

const chooseBlue = () => {
	console.log('chose red')
}

const chooseYellow = () => {
	console.log('chose red')
}

const setupCanvas = () => {
	console.log('canvas is setup')
}

const chooseColors = () => {
	chooseBlue()
	chooseYellow()
}

const paint = () => {
	console.log('painted')
}

const signMyName = () => {
	console.log('name signed')
}

const makePainting = () => {
	setupCanvas()
	chooseColors()
	paint()
	signMyName()
}

makePainting()

```
#### Closures

-   Demonstration of closures with explanation that closures are simply frozen environments, or remembered environments
```js
function wrapValue(n) {
  // when this function returns a new function, it will freeze and take its scope with it where ever it goes
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```
This is great because we can provide some values to a functions scope, freeze it (happens automatically when we
return this new function), and it can later reference that scope, or closure when we call it in the future:
```js
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10
```
Helpful quote from Eloquent Javascript on closures:

Thinking about programs like this takes some practice. A good mental model is to think of function values as containing both the code in their body and the environment in which they are created. When called, the function body sees the environment in which it was created, not the environment in which it is called

#### Side effects
A side effect means changing something elsewhere. Typically changing or doing something that is not explicitly in the function. We must have some functions that do this, but if all our functions do this, our code can get complicated.
- another way to think of side effects is to think of a function that does something other than return a value.
-   Advice: having lots of functions with lots of side effects is like having strings of yarn going everywhere, which makes your code more complex and harder to understand

## Chapter Exercises (In Class Work)

-   Minimum (from book)
-   BeanCounting (from book)
