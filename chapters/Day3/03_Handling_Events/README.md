# Handling Events

Click Event
```js
const button = document.querySelector('#button')
button.addEventListener('click', function(event) {
  // do something
})
```

Key Events
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

Scroll Event Example
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

### Launch Missles Example Completed
```html
!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <style>
            .switch {
                background: grey;
                height: 100px;
                width: 100px;
                transition: 0.2s;
                display: inline-block;
                margin: 10px;
            }

            .success {
                background: green;
                transform: translateX(100px);
            }

            .canceled {
                background: black;
            }
        </style>
    </head>

    <body>
        <div id="switch" class="switch"></div>
        <div class="switch"></div>
        <button id="launch-missles">Launch</button>
        <button id="stop-missles">Stop!!!</button>
    </body>
    <script>
        const launchButton = document.querySelector('#launch-missles')
        const stopButton = document.querySelector('#stop-missles')

        const switchToggle = document.querySelector('#switch')
        launchButton.addEventListener('click', function() {
            console.log('LAUNCHED!')
            switchToggle.className = 'switch success'
        })

        stopButton.addEventListener('click', function() {
            console.log('STOP!')
            switchToggle.className = 'switch canceled'
        })
    </script>
</html>

```

# CSS Animations


