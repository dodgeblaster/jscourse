# Handling Events

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
    top: 0; left: 0;
  }
</style>
<div id="progress"></div>
<script>
  // Create some content
  document.body.appendChild(document.createTextNode(
    "supercalifragilisticexpialidocious ".repeat(1000)));

  let bar = document.querySelector("#progress");
  window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    bar.style.width = `${(pageYOffset / max) * 100}%`;
  });
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

