# The DOM Basics

- [Download Starter Projects](https://htmlbasicsresources.s3.amazonaws.com/js-day2-dom.zip)


# What is the DOM?
- Document Object Model - i.e. a map of our HTML document
- Defines the logical structure of an HTML document and how it is accessed and manipulated
- Anything found in an HTML or XML document can be accessed, changed, deleted, or added by a programmer using the DOM

![dom](https://www.teaching-materials.org/jsweb/images/domtree.png)


Finding DOM nodes by query selector:
```js
document.querySelector(cssQuery)
document.querySelectorAll(cssQuery)

// Example
const firstHobby = document.querySelector('ul li.hobby')
const alsoHobbies = document.querySelectorAll('ul li.hobby')
```

## There is a window object in the browser environment
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window)
```js
window.document
```

## 2 ways to add things to the DOM

#### innerText
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
```js
const placeIWantToPutText = document.querySelector('#content')
placeIWantToPutText.innerText = `text inside paragraph tag`
```

#### innerHTML (easy way to add lots of html all at once)
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

```js
const placeIWantToPutText = document.querySelector('#content')
placeIWantToPutText.innerHTML = `
  <p class='title'>
    text inside paragraph tag
  </p>
`
```

Template laterals (making a string using back ticks) allows us to seperate our string onto different lines
## Demo innerText with starter project 1

## Demo innerHTML with starter project 2
- Discuss html css and js are written together and how html and css work inside a js file

## Exercise 1
This exercise is the 3rd project in the starter projects for this section.
After being prompted for hours for all days, the values for Mon - Fri and the total in the correct spot in the HTML

## Exercise 2
This exercise is the 4th project in the starter proejcts for this section.

Step 1:

Loop through all the data and add a player div element to the html that looks like the following:
```html
<div class="player">
    <p>John</p>
    <p>40pts</p>
</div>
```
(hint: using back ticks to define the string allows us to break the string up onto different lines. It also allows us to add variables into the string a lot easier)

Step 2:

Once you are able to list all players as player divs in the html, add a `average` css class if their points is below 70, and add a `good` css class if their points are above 70.
