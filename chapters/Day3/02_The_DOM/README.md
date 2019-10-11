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
document.getElementById(id)
```
Finding DOM nodes by tag name:
```js
document.getElementsByTagName(tagName)
```
Finding DOM nodes by class name:
```js
document.getElementsByClassName(className)
```
Finding DOM nodes by query selector:
```js
document.querySelector(cssQuery)
document.querySelectorAll(cssQuery)
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
const hobbiesList = document.getElementById('hobby-list')

// By Tag Name
const hobbies = document.getElementsByTagName('li')

// By Class Name
const alsoHobbies = document.getElementsByClassName('hobby')

// By CSS Query
const firstHobby = document.querySelector('ul li.hobby')
const againAlsoHobbies = document.querySelectorAll('ul li.hobby')
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


## Code along Code
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    

    <div id='header'></div>
      <div class='hero'></div>
      <p></p>
      <p></p>
      <div class='section'>
          <p></p>
          <p></p>
      </div>

</body>
<script type="text/javascript" src='./app.js'></script>
</html>
```

```js
// - - - - - - - - - - - - - - - - - - - - - - 
// UPDATING WHATS ALREADY THERE
// - - - - - - - - - - - - - - - - - - - - - - 

// this returns 1 dom element, because ids refer to only 1 thing
const header = document.getElementById('header')
header.innerHTML = 'header text'
header.textContent = 'header text 2'

// this returns an array because its possible there could be 
// more than one
const hero = document.getElementsByClassName('hero')[0]
hero.innerHTML = 'hero text'
hero.textContent = 'hero text 2'

// set text on array of p's using querySelectorAll
const paragraphs = document.querySelectorAll('.section p')
paragraphs.forEach(x => {
    x.textContent = 'new text'
})

// get 1 thing with query selector
const queriedHeader = document.querySelector('#header')
queriedHeader.textContent = '!!!'


// - - - - - - - - - - - - - - - - - - - - - - 
// ADDING 
// - - - - - - - - - - - - - - - - - - - - - - 
const section = document.querySelector('.section')
const newElement = document.createElement('p')
newElement.textContent = 'added new element'
newElement.className = 'my-new-class'
section.appendChild(newElement)



// - - - - - - - - - - - - - - - - - - - - - - 
// REMOVE  
// - - - - - - - - - - - - - - - - - - - - - - 
const referenceToNewElement = document.querySelector('.my-new-class')
referenceToNewElement.remove()

```

## Demo

index.html
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>

</body>
<script type="text/javascript" src='./app.js'></script>
</html>
```
app.js:
```js
const stocks = [
    { symbol: 'XFX', price: 240, volume: 2333 },
    { symbol: 'TNZ', price: 332, volume: 234 },
    { symbol: 'JXL', price: 120, volume: 5345 }
]

```

# Exercise
- do the mountain exercise
- do the getElementsByTagName exercise
- ** DO NOT do the cat animation exercise **


## Helpful Example

```js
const data = [
    {
        name: 'john',
        score: 3
    },
    {
        name: 'james',
        score: 3
    },
    {
        name: 'jessica',
        score: 3
    }
]

function createTd(text) {
    const td = document.createElement('td')
    td.textContent = text
    return td
}

function createTr() {
  const tr = document.createElement('tr')
    return tr
} 

function createRow(data) {
  const tr = createTr()
  const name = createTd(data.name)
  const score = createTd(data.score)
  tr.appendChild(name)
  tr.appendChild(score)
  return tr
}

function createTable(arrayOfData) {
  const table = document.createElement('table')

  arrayOfData.forEach(function(rowData) {
    const row = createRow(rowData)
    table.appendChild(row)
  })

  return table
}

const generatedTable = createTable(data)
document.body.appendChild(generatedTable)



```

## Netlfix demo starter files
- [Starter files](https://htmlbasicsresources.s3.amazonaws.com/netflix-demo.zip)
