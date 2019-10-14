# Async Programming

There are 3 ways in which you can do asyn programming in Javascript:
- callbacks
- promises
- async / await

We are going to focus only on promises. Once you are familiar with how async programming works in general using promises,
I encourage you to look into the other 2 methods. Learning all 3 all at once is, in my opinion, a bit insane. So we will 
focus on promises for this course, look into the other methods later on once you are comfortable with promises.

## What is async programming?
Async programming is like a starbucks. Here is how buying something at Starbucks works:
- Go to the cash register
- Tell them my order
- A barista hears my order and starts working on my drink
- I pay the person at the cash register
- then I move over to another line to wait for my drink, while someone else gives their order

Its 2 people doing 2 jobs at the same time. One is handling a customer with their order and payment, the other person
is making the drink while thats happening.

In Javacript, we have our main script, which is like the person at the cash register. Thats the main task. But
in our script we may ask for some data from a server, that is like asking a barista to make a drink. Its a second task
that needs to be done while the first task is running.

## Making a promise in Javascript
There is a built in function in the browser called fetch. Fetch takes the format of a promise. In order to understand fetch, we first need to understand promises, how they work, and how to build them.

In order to demonstrate promises, we will be using setTimeout (which was mentioned in the the events chapter of our book).

A promise looks like this:
```js
const makeExpensiveDrink = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve('heres your coffee')
  }, 2000)
})
```

With this promise now defined, we can call it. It will work exactly like a Starbucks barista, it will start another task
while you are still in the middle of yours. Here is an example of how that might look in code:

```js

console.log('Get customers order')
makeExpensiveDrink()
  .then(function(result) {
    console.log(result)
  })
  
console.log('customer pays for drink')
```

'then' is how we define what we want to do once the promise is done its task. If you return something from the function
inside a then statement, you can add another then, like this:

```js

makeExpensiveDrink()
  .then(function(result) {
    console.log(result)
    retun result.name
  })
  .then(function(name) {
    writeResultToDOM(name)
    retun name
  })
  .then(function(name) {
    saveResultToDB(name)
    retun name
  })

```

The example above is simply demonstrating how you can seperate multiple actions into different 'then's. Alternativly, 
you could simply perform all this logic in one then:

```js
makeExpensiveDrink()
  .then(function(result) {
    console.log(result)
    writeResultToDOM(result.name)
    saveResultToDB(result.name)
  })
```

## window.fetch
The way we do this in javascript is by using the fetch function:

```js
const url = 'https://www.myserver.com/api/cats'
fetch(url)
  .then(x => x.json())
  .then(x => {
    console.log('x')
  })
```
