# What is the DOM?
- Document Object Model - i.e. a map of our HTML document
- Defines the logical structure of an HTML document and how it is accessed and manipulated
- Anything found in an HTML or XML document can be accessed, changed, deleted, or added by a programmer using the DOM

![dom](https://www.teaching-materials.org/jsweb/images/domtree.png)

## Accessing the DOM
The document object is globally available in your browser.
It allows you to access and manipulate the DOM of the current web page:
- Find the DOM node you want to change using an access method
- Store this DOM node as a variable
- Manipulate the DOM node
  - Change its attributes
  - Modify its styles
  - Give it new inner HTML
  - Append new nodes to it
  
  
  ## DOM Access Methods
Finding DOM nodes by id:
```js
document.getElementById(id);
```
Finding DOM nodes by tag name:
```js
document.getElementsByTagName(tagName);
```
Finding DOM nodes by class name:
```js
document.getElementsByClassName(className);
```
Finding DOM nodes by query selector:
```js
document.querySelector(cssQuery);
document.querySelectorAll(cssQuery);
```

## Selecting Nodes From the DOM
```html
<ul id="hobby-list">
  <li class="hobby">Playing the banjo</li>
  <li class="hobby">Paddleboarding</li>
</ul>
```
```js
// By Id
var hobbiesList = document.getElementById('hobby-list');

// By Tag Name
var hobbies = document.getElementsByTagName('li');

// By Class Name
var alsoHobbies = document.getElementsByClassName('hobby');

// By CSS Query
var firstHobby = document.querySelector('ul li.hobby');
var againAlsoHobbies = document.querySelectorAll('ul li.hobby');
```

## Getting sizes of things
Get the size of an element
```js
const x = document.getElementById('element-id')
const height = x.offsetHeight
const width = x.offsetWidth
```

Get space inside an element (good for divs)
```js
const x = document.getElementById('element-id')
const height = x.clientHeight
const width = x.clientWidth
```

Get lots of position data on an element:
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
```js
const x = document.getElementById('element-id')
const lostOfPositionData = x.getBoundingClientRect()
```

Get the Page vertical scroll position with pageYOffset
```js
const verticalPosition = window.pageYOffset
```
Get the Page horizontal scroll position with pageYOffset
```js
const horizontalPosition = window.pageYOffset
```

## Dealing with the annoying fact that query selector does not return a real array
```js
const divs = document.querySelectorAll('div') // currently a NodeList
const divsInProperArray = Array.from(divs)
```


## 2 ways to add things to the DOM
- innerHTML (easy way to add lots of html all at once)
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
```js

const placeIWantToPutText = document.querySelector('#content')
placeIWantToPutText.innerHTML = `
<p class='title'>text inside paragraph tag</p>
`
```

- appending a child: (more precise and programatic way, also doesnt replace everything, but just adds)
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
```js
const title = document.createElement('p')
title.className = 'title'
title.textContent = 'text inside paragraph tag'
title.style.background = 'purple'

const placeIWantToPutText = document.querySelector('#content')
placeIWantToPutText.appendChild(title)
```

## Update something in an already existing HTML tag
```js
const element = document.querySelector('#weather')
element.innerText = 'Sunny'
element.className = 'weather-status'
```

# Exercise
- do the mountain exercise
- do the getElementsByTagName exercise
- ** DO NOT do the cat animation exercise **
