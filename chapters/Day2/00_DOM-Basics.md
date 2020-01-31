# The DOM Basics

- [starter projects](https://htmlbasicsresources.s3.amazonaws.com/js-day2-dom.zip)


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
<p class='title'>text inside paragraph tag</p>
`
