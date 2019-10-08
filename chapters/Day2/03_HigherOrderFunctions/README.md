# Higher Order Functions

## Basic Intro (Demonstration)

-   Why do we need higher order functions?

## Chapter concepts overview (Demonstration)

#### function composition
For Loop example
```js
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);

```

Greater Than Example
```js
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
```


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

