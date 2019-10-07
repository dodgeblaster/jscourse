# Functions

## Basic Intro (Demonstration)

#### What are functions and why should we use them?

-   Demonstrate a function
-   talk about inputs and return values
-   talk about how they help package up code and reuse it. (like css classes)
-   Functions help us name code and give it meaning

## Chapter concepts overview (Demonstration)

#### 3 ways to write functions

```
const square = function(x) {
  return x * x;
}

function square(x) {
  return x * x;
}

const square = x => x * x

```

#### Scope

-   when using const and let, scope is defined by blocks
-   Demonstration on how variable is not recognized outside of scope

#### Explain the call stack

-   Demonstration of call stack with function calls
-   Demonstrate debugger

#### Closures

-   Demonstration of closures with explanation that closures are simply frozen environments, or remembered environments
-   Code demonstration

#### Side effects

-   Explanation of the importance of differentiating between pure functions and functions with side effects
-   Explanation of how pure functions can be simpler
-   Explanation of why keeping the number of side effect functions as low as possible is preferable
-   Advice: having lots of functions with lots of side effects is like having strings of yarn going everywhere, which makes your code more complex and harder to understand

## Chapter Exercises (In Class Work)

-   Minimum (from book)
-   BeanCounting (from book)
