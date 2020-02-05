# Handling Events

- [Download Starter Files Here](https://htmlbasicsresources.s3.amazonaws.com/eventsAndAnimation.zip)


## Quick Discussion on Javascript Linters
The professional thing to do is not to depend on your memory, but instead depend on tools that will remember best practices for you. There are 2 popular kinds of tools that developers depend on: Linters (to insure your code is following agreed upon best practices), and test runners (to validate your code does what you say it will do).

The most popular Javascript Linters are:
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)

Both are very good. Prettier is less configurable, and aims to handle style only. If you want to define things such as `dont use var`, then ESLint is a great option. You can define what rules you want your linter to enforce in 2 ways:
- set your default configuration in VSCode preferences
- define your configuration per project in a configuration file (you can find prettier documentation for config [here](https://prettier.io/docs/en/configuration.html).

If you want to read more about Prettier's motivation, click [here](https://prettier.io/docs/en/why-prettier.html)

- Demonstrate with 01_prettier

#### ESLint resources
- [Lots of ESLint Resources](https://github.com/dustinspecker/awesome-eslint)
- [Standard Style](https://github.com/standard/eslint-config-standard)
- [Google's Style](https://github.com/google/eslint-config-google)
- [Facebook's Style](https://www.npmjs.com/package/eslint-config-fbjs)
- [Airbnb's Style](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

## Click Event
```js
const button = document.querySelector('#button')
button.addEventListener('click', function(event) {
  // do something
})
```

- Demonstrate with 02_eventListensters Project


## Key Events
```js
 window.addEventListener("keydown", event => {
    if (event.key == "v") {
      document.body.style.background = "violet";
    }
  });
  window.addEventListener("keyup", event => {
    if (event.key == "v") {
      document.body.style.background = "";
    }
  });
```

## Scroll Event Example
```html
<style>
    #progress {
        border-bottom: 2px solid blue;
        width: 0;
        position: fixed;
        top: 0;
        left: 0;
    }
</style>
<div id="progress"></div>
<script>
    // Create some content
    const veryLongString = "supercalifragilisticexpialidocious ".repeat(1000)
    const lotsOfHtmlText = document.createTextNode(veryLongString)
    document.body.appendChild(lotsOfHtmlText)

    const bar = document.querySelector("#progress")
    window.addEventListener("scroll", function()  {
        // 1. get maximum scroll value
        const max = document.body.scrollHeight - innerHeight
        // 2. get the current scroll position
        const currentPosition = window.pageYOffset
        // 3. set the status bar width
        bar.style.width = `${(currentPosition / max) * 100}%`
    })
</script>
```
- Demonstrate with 03_scrollEventExample project

### Launch Missiles Exercise
In this exercise we want to get the following DOM elements and put them in variables:
- launch missiles button
- stop missiles button
- switch

When we click the launch button we want to set the css class name of the switch to: `switch success`.
When we click the stop button we want to set the css class name of the switch to: `switch canceled`.




### Good Resources
- [List of events to use](https://developer.mozilla.org/en-US/docs/Web/Events)
- [addEventListener MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [removeEventListener MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
