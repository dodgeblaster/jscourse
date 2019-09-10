# Functions

## Basic Intro (Demonstration)
#### What are functions and why should we use them?
- Demonstrate a function
- talk about inputs and return values
- talk about how they help package up code and reuse it. (like css classes)
- Functions help us name code and give it meaning

## Read Chapter (In Class Reading)
- Read chapter in 30 minutes
- Also read about [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

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
- when using const and let, scope is defined by blocks
- demo with example file, how variable is not recognized outside of scope

#### Explain the call stack
- when u have functions, the order code get executes bounces around the function definitions..
- use example file with the debugger

#### Closures
- they are simply frozen environments, or remembered environments
- explain with code

#### Side effects
- explain why its important to differentiate between pure functions and functions with side effects
- pure functions are always simpler
- keeping the number of side effect functions as low as possible is preferable
- having lots of functions with lots of side effects is like having strings of yarn going everywhere, which makes your code more complex and harder to understand

## Chapter Exercises (In Class Work)
- Minimum 
- BeanCounting
