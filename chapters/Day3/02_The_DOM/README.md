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
