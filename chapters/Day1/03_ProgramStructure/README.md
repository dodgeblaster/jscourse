# 3. Program Structure

## Basic Intro (Demonstration)

-   just writing expressions is not enough. We need a way to organize our code
-   we need a way to control the flow of our code, and make decisions

## Read Chapter (In Class Reading)

-   Read chapter in 30 minutes

## Chapter concepts overview (Demonstration)

### Giving things names (Variables)

-   why variables are good (giving data and procedures names is important, you are identifying intention)
-   comparing variables and expressions (are they the same?) - mention You Don't Know HS for more details

### functions

-   console.log()
-   prompt
-   return values
-   control flow (branchs, leading into if statements)

### Statements - If statements

If:
```js
if (something) {
  // do something...
}

```
If Else:
```js
if (something) {
  // do something...
} else {
  // otherwise, always do this thing
}
```

If, If Else, Else:
```js
if (something) {
  // do something...
} else if (something else) {
  // else do this...
} else {
  // otherwise, always do this thing
}
```
-   Advice: make sure to keep complexity low
-   Advice: nesting if statements is not great
- Advice: 'If, If else, If else, else' is complicated from a business logic perspective. Might be fine if its a low level technical function.

```js
// Example if, if else, else scenario:
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
```

### Do While Loops
```js
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
```

### Statements - For Loops

##### For Loops
```js
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
```
##### Incrementing a number
```js
let number = 1
number++ // this is now 2
```

##### Breaking out of a loop
```js
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
```

### Switch Statements

```js
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

```

### Comments

-   how to use comments

## Chapter Exercises (In Class Work)

-   fizzbizz (from book)
-   chessboard (from book)
