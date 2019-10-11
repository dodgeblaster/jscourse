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


## Mobile Menu Explanation Starter Files
- [starter files](https://htmlbasicsresources.s3.amazonaws.com/event-click-starterfiles.zip)

## Mobile Menu Explanation Completed
HTML
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
            crossorigin="anonymous"
        />
        <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap"
            rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css"
            integrity="sha256-/sdxenK1NDowSNuphgwjv8wSosSNZB0t5koXqd7XqOI="
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="app.css" />
    </head>
    <body>
        <header>
            <nav>
                <div class="wrapper">
                    <div class="logo"></div>
                    <ul id="menu">
                        <div class="close" id="close-button"></div>
                    </ul>
                    <div class="menu" id="menu-button"></div>
                </div>
            </nav>
        </header>

        <div class="hero"></div>
        <section class="main-content"></section>
        <footer></footer>
    </body>
    <script src="./app.js"></script>
</html>
```

CSS
```css
/* - - - - - - - - - - - - - - - - - - - - - - - - 
GENERAL
- - - - - - - - - - - - - - - - - - - - - - - - */
* {
    font-family: 'Source Sans Pro', sans-serif;
    box-sizing: border-box;
}

/* body {
    overflow-x: hidden;
} */

.wrapper {
    max-width: 800px;
    width: 90%;
    margin: 0 auto;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - 
HEADER
- - - - - - - - - - - - - - - - - - - - - - - - */
header {
    height: 80px;
    background: #333;
}

header nav .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
}

header .logo {
    background: url('./assets/logo.svg');
    height: 30px;
    width: 30px;
    background-size: 30px;
}

header .menu {
    background: url('./assets/menu.svg');
    height: 30px;
    width: 30px;
    background-size: 30px;
    display: none;
}

header .close {
    background: url('./assets/close.svg');
    height: 30px;
    width: 30px;
    background-size: 30px;
    display: none;
}

header ul {
    margin: 0;
    padding: 0;
    display: flex;
    width: 400px;
    height: 40px;
    background: blue;
}

@media (max-width: 600px) {
    header ul {
        position: fixed;
        top: 0;
        bottom: 0;
        right: -300px;
        width: 300px;
        height: 100vh;
        transition: transform 0.2s;
        transform: translateX(0px);
    }

    .menu-open {
        transform: translateX(-300px);
    }

    .menu-close {
        transform: translateX(0px);
    }

    header .menu {
        display: block;
    }

    header .close {
        display: block;
    }
}

/* - - - - - - - - - - - - - - - - - - - - - - - - 
HERO
- - - - - - - - - - - - - - - - - - - - - - - - */
.hero {
    background: #555;
    height: 70vh;
    padding-top: 10vh;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - 
MAIN CONTENT
- - - - - - - - - - - - - - - - - - - - - - - - */
.main-content {
    height: 600px;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - 
FOOTER
- - - - - - - - - - - - - - - - - - - - - - - - */
footer {
    height: 300px;
    background: #333;
}
```

JS
```js
const menuButton = document.querySelector('#menu-button')
const closeButton = document.querySelector('#close-button')
const menu = document.querySelector('#menu')

menuButton.addEventListener('click', function() {
    menu.className = 'menu-open'
})

closeButton.addEventListener('click', function() {
    menu.className = 'menu-close'
})

```

