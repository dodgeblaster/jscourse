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

## Dealing with the annoying fact that query selector does not return a real array
```js
const divs = document.querySelectorAll('div') // currently a NodeList
const divsInProperArray = Array.from(divs)
```

## 2 ways to update text
```js
item.innerText = 'Hello'
item.textContent = 'Hello'
```
- [MDN Docs on Difference between the 2](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText)

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

## Eloquent JS Chapter 5 Exercise Answer
HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <div id='app'></div>
</body>
<script type="text/javascript" src='./app.js'></script>
</html>
```

```js
const data = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
]
// - - - - - - - - - - - - - - - - - - - - - - - - 
// Make DOM Nodes
// - - - - - - - - - - - - - - - - - - - - - - - - 
function makeThDomNode(text) {
    const th = document.createElement('th')
    th.textContent = text
    return th
}

function makeTrDomNode() {
    const tr = document.createElement('tr')
    return tr
}

function makeTdDomNode(text) {
    const td = document.createElement('td')
    td.textContent = text
    return td
}

function makeTableDomNode() {
    const table = document.createElement('table')
    return table
}



// - - - - - - - - - - - - - - - - - - - - - - - - 
// Make Table Rows
// - - - - - - - - - - - - - - - - - - - - - - - - 
function makeTableHeader() {
    const tr = makeTrDomNode()
    const nameTitle = makeThDomNode('name')
    const heightTitle = makeThDomNode('height')
    const placeTitle = makeThDomNode('place')
    tr.appendChild(nameTitle)
    tr.appendChild(heightTitle)
    tr.appendChild(placeTitle)
    return tr
}

function makeTableRow(mountainData) {
    const tr = makeTrDomNode()
    const name = makeTdDomNode(mountainData.name)
    const height = makeTdDomNode(mountainData.height)
    const place = makeTdDomNode(mountainData.place)
    tr.appendChild(name)
    tr.appendChild(height)
    tr.appendChild(place)
    return tr
}



// - - - - - - - - - - - - - - - - - - - - - - - - 
// Make Table
// - - - - - - - - - - - - - - - - - - - - - - - - 
function makeTable(arrayOfMountData){
    const table = makeTableDomNode()
    const tableHeader = makeTableHeader()
    table.appendChild(tableHeader)

    arrayOfMountData.forEach(function(data) {
        const row = makeTableRow(data)
        table.appendChild(row)
    })

    return table
}

const table = makeTable(data)
const app = document.querySelector('#app')
app.appendChild(table)
```

## Exercise starter files
- [Starter files](https://htmlbasicsresources.s3.amazonaws.com/twitter-start.zip)
