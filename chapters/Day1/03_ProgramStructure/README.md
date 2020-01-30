# 3. Program Structure

## Basic Intro (Demonstration)

-   just writing expressions is not enough. We need a way to organize our code
-   we need a way to control the flow of our code, and make decisions

### Logic - If statements

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
} else if (somethingElse) {
  // else do this...
} else {
  // otherwise, always do this thing
}
```

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

### Logic - Switch Statements

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

### Loops - Do While Loops
```js
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
```

### Loops - For Loops

##### For Loops
```js
for (let number = 0; number <= 10; number = number++) {
  console.log(number);
}
```
##### Incrementing a number
```js
let number = 1
number++ // this is now 2
```

##### Looping over data
```js
for (movie of movieData) {
    console.log(movie.title)
}
```

## Chapter Exercises (In Class Work)


- [Movie Data JS File](https://htmlbasicsresources.s3.amazonaws.com/movieData.js)

#### Exercise 1
- `console.log` all movies in 1919

#### Exercise 2
- `console.log` the number of movies in 1919

#### Exercise 3
- If the movie title has the word `Prejudice` in it, console.log `movieTitle - 7/10`
- If the movie title has the word `Pride` in it, console.log `movieTitle - 8/10`
- If the movie title has the word `Pride` and `Prejudice` in it, console.log `movieTitle - 9/10`
- If the movie title has the word `Pride` and `Prejudice` and `Zombies` in it, console.log `movieTitle - 10/10`

(hint: there should be no duplicates in the result, there should be a total of 23 results)
(hint: googling `js string includes` might help)

#### Exercise 4
- If the movie has Benedict Cumberbatch in it, console.log `movieTitle - 8/10`
- If the movie has Robert Downey in it, console.log `movieTitle - 9/10`
- If the movie has Robert Downey and Benedict Cumberbatch in it, console.log `movieTitle - 10/10`

(hint: there should be a total of 61 results)


