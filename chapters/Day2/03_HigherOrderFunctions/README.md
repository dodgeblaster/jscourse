# Higher Order Functions

## Basic Intro (Demonstration)

-   Why do we need higher order functions?

## Chapter concepts overview (Demonstration)

#### function composition
```js
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);

```

-   how do we make specific functions out of general functions
-   greaterThan, greaterThan10

#### forEach
-   demonstrate to use forEach
- work thru exercises

#### filter
-   demonstrate to use filter
- work thru exercises

#### map
-   demonstrate to use map
- work thru exercises

#### reduce
-   demonstrate to use reduce
- work thru exercises

#### chaining
-   how all these functions can be chained

