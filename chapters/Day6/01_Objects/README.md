# Objects and Classes

It is important to try and write clean code. Part of what it means to write clean code is to organize and structure your
code in a way that makes the meaning clear. There are many ways of doing this. Up until now we have been focusing on
functions as a way to organize our code and ideas.

Another way to organize your ideas is by grouping multiple things into an object, like a dog:

```js
const dog = {
  legs: 4,
  color: 'brown'
}
```

Currently, as we look at our dog example, this represents a data structure. We are not limited by only putting data
into an obect, we can also put functions:

```js
const dog = {
  legs: 4,
  color: 'brown',
  bark: function() {
      console.log('Bark!')
  }
}
```

Currently this is just a group of things bundled up together in an object. If all of these things are linked together,
it would be nice to have an easy way to reference itself. Well it turns out we can! With the `this` keyword. Example:

```js
const dog = {
  legs: 4,
  color: 'brown',
  bark: function() {
      console.log('Bark! I am ' + this.color)
  }
}
```

In the above example, we our using `this` in the bark function to refer to the object this function belongs to. `this` in
this context means dog.


## How to use `this`

When used in the way we saw above, `this` can help simplify our programs. Lets look at an example:
```js
const dog = {
    color: 'red',
    legs: 4,
    favoriteToy: 'ball',
    bark() {
        console.log('I am ', this.color)
    },
    play() {
        console.log('chasing ', this.favoriteToy)
    },

    getNewToy(toy) {
        this.favoriteToy = toy
    }
}

dog.play()
dog.getNewToy('frisbee')
dog.play()
```

In this example, we see how we only use methods (functions that are on an object) to interact with its 'state'. You will
also notice that all the methods access its 'state' or data by referring to itself with `this`. This is a nice usecase for it.

### Tricky Situation 1
When methods which use `this` are only used in the context of the object, `this` will always refer to the object. But if you 
use that method outside of an object, it will change what `this` means.

```js
window.state = {
    location: 'global'
}

function myAction() {
    console.log(this.state.location)
}

const obj = {
    state: {
        location: 'obj',
        score: 0
    },

    myAction
}

obj.myAction()
myAction()
```

### Tricky Situation 2

```js
const dog = {
    favoriteToy: 'frisbee',
    play: function() {
        console.log('chasing ' + this.favoriteToy)
    }
}

const cat = {
    favoriteToy: 'bell',
    play: function(action) {
          console.log(this.favoriteToy)
    }
}

cat.play() // will work
function doAction(action) {
    action()
}

doAction(cat.play) // will not work
```

### Advice for using `this`
I find if you are passing functions around and calling them in contexts other than the original object they were
defined in, using `this` can be confusing. If you are going to always call a function in the objects context, then `this` will 
work out great.

## Exercise #1
Create an invoice object that has the following:

- description: a string
- total: a number
- setDescription: a function that updates description using this and 1 input
- getDescription: a function that console.logs description using this
- setTotal: a function that updates total using this and 1 input
- getTotal: a function that console.lots total using this

test out your object methods by setting and getting both values, example:
```js
invoice.setTotal(6)
invoice.getTotal()
```

## Prototypes
Everything in javascript is an object. And all objects have a prototype, or an object they inherit from. Lets look at the prototype for:

```js
const obj = {}
const word = 'hello'
const score = 123
const myList = []
```

We can create our own base objects, and create further objects off of our base object:
```js
const Dog = {
    bark: () => console.log('Bark!!'),
    play: () => console.log('Chasing ball!')
}

const germanSheppard = Object.create(Dog)
// IN CONSOLE: check prototype
germanSheppard.bark()
// IN CONSOLE: check Object.getPrototypeOf(GermanSheppard)
```
This is great because now all new dogs we make will have bark and play as methods automatically because their
base class is Dog. 

We can create a constructor function (a function that creates new objects) like so:
```js
function Dog(type) {
  this.type = type;
}
Dog.prototype.speak = () => console.log('Bark!!')
Dog.prototype.play = () => console.log('Chasing ball!!')

let germanSheppard = new Dog("German Sheppard")
germanSheppard.bark()
```
Making the function capitalized is a convention which tells us this is a function that creates a new instance of an object.
In our case above, we are creating a new dog.

## Exercise #2 (building off of Excerise #1)
Take the invoice object you made in exercise #1 and make a constructor function which will create new invoices. Test the
invoice by calling:
```js
invoice.setTotal(6)
invoice.getTotal()
```
