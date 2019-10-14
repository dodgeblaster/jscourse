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
inside a `then`, you can add another `then`, like this:

```js

makeExpensiveDrink()
  .then(function(result) {
    console.log(result)
    return result.name
  })
  .then(function(name) {
    writeResultToDOM(name)
    return name
  })
  .then(function(name) {
    saveResultToDB(name)
    return name
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
The fetch function is a promise, meaning if you execute this function, the only way to get the result of it is
by attaching a `then` to it. Here is an example:

```js
const url = 'https://swapi.co/api/people/1'
fetch(url)
  .then(x => x.json())
  .then(x => {
    console.log('x')
  })
```

For good documentation, visit [MDN - Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

The fetch function will return a Response Object, which is explain in detail on MDN [here](https://developer.mozilla.org/en-US/docs/Web/API/Response). An example of a response:

```js
const responseObject = {
  body: ReadableStream, // this needs to be parsed before being able to be read in js. Usually done with the `json' method.
  bodyUsed: false,
  headers: [], 
  ok: true 
  redirected: true
  status: 200
  statusText: ""
  type: "cors"
  url: "https://swapi.co/api/people/1/"
}
```

The most common thing to do with this object is to get the body and pass it along to a second then, which we can see in this example:
```js
const url = 'https://swapi.co/api/people/1'
fetch(url)
  .then(x => x.json())
  .then(x => {
    console.log('x')
  })
```

Once the body is parsed with the json method, we get a nicely formatted object that looks like this:
```js
const result = {
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.co/api/planets/1/",
	"films": [
		"https://swapi.co/api/films/2/",
		"https://swapi.co/api/films/6/",
		"https://swapi.co/api/films/3/",
		"https://swapi.co/api/films/1/",
		"https://swapi.co/api/films/7/"
	],
	"species": [
		"https://swapi.co/api/species/1/"
	],
	"vehicles": [
		"https://swapi.co/api/vehicles/14/",
		"https://swapi.co/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.co/api/starships/12/",
		"https://swapi.co/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.co/api/people/1/"
}

```
## Exercise 1
Use the star wars api to get a planets data by using fetch. Use the Starwars API documentation if you are unsure how to access a planets data. [Starwars API site](https://swapi.co/). `console.log` the following information:
```
Name: Planet Name
Population: Number
Climate: Climate Description
Diameter: Number
```


# 2. What to do when something in your request goes wrong
So many things can go wrong with a network call. 
- we could put in the wrong url
- there could be an issue with a users network
- the user may not have permission to view what they are requesting
- the item the user is requesting could not exist
- there could be an error that happens on the server

Up until now, we have been writing our own javascript, and if there were any problems, it was on us to fix it. Network calls are different in that you are interacting with something you have no control over. You are interacting with someone elses code on a server. If there is an error on their end, you cant do anything about it. Making an api call also involves a user to use a network that you have no control over. They may be on a train which started in a location where they had data, but eventually enters a zone where there is no data.

Because there are so many things that could go wrong, most of which is out of our control, we must handle those errors gracefully. Promises in general, and fetch specically have the another function to chain onto the `then`s called catch. First lets look at what happens when we dont handle the error gracefully:

```js
const url = 'https://swapi.co/api/PURPOSELY-WRONG-REQUEST'

fetch(url).then(x => {
  return x.json()
}).then(x => {
  console.log('success!')
})
```

Now, lets add a catch on the end, to be explicit as to what we will do when things go wrong:
```js
const url = 'https://swapi.co/api/PURPOSELY-WRONG-REQUEST'

fetch(url).then(x => {
  return x.json()
}).then(x => {
  console.log('success!')
}).catch(err => {
  console.log('I am sorry, the starwars data is not available right now :(')
})
```

## Exercise 2
Using the code below, do the following:
- using the valid url to make a successful request, and using the helper function `writeToPage` to display some data on the page
- using the invalidUrl, handle the error and display a message on the page using `writeToPage` letting the user know there was
an issue getting the data.
```js
const writeToPage = text => {
  const el = document.createElement('div')
  el.style = `
    padding: 20px 40px;
    border-radius: 5px;
    background: #222;
    color: white;
    font-family: sans-serif;
    display: inline-block;
  `
  el.textContent = text
  document.body.appendChild(el)
}

const url = 'https://swapi.co/api/people/1'
const invalidUrl = 'https://swapi.co/api/NOT-VALID'

fetch(url).then(x => {
  return x.json()
})
```
