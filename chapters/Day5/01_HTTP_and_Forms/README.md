# HTTP and Forms

## What is JSON
When we make an object in javascript, values can reference variables which are located in places other than our object. Example:

```js

const dogColor = 'brown'

const dog = {
    legs: 4,
    color: dogColor
}

```

In this example, the color in the dog object is referencing something defined somewhere else. It has a reference to it. Objects can have references to things all over the place. 

But when it comes time to take an object and send it over a network, (example, frontend taking an object, and sending it to a server', we dont want all the complicated connections. We just want to send the literal value of the object. So instead, we send a big string that looks like this:

```js
const jsonString = `{
  "legs": "4",
  "color": "brown"
}`

```

This is much simpler to send over a network, its just a big string. Once its sent over the network to a server, its up to the server to `parse` that back into an object. There are functions that make an object a JSON string, and functions that can convert it from a string back into an object. Here is an example:

```js
const dog {
    legs: 4,
    color: 'brown'
}

const dogConvertedIntoJSON = JSON.stringify(dog)
// ... send that over the network
// once its somewhere else, they can turn it back into a string:

const dogTurnedBackIntoObject = JSON.parse(dogConvertedIntoJSON)
```


## Posting with Fetch
HTTP Forms traditionally work by submitting form results to a different page on the surver. This means the page either reloads
or navigates to a new page. Reloading or switch pages is fine for static non interactive sites, but for things like chat 
or anything that requires the user to stay on the same page, we need to submit form data a different way.

For this, we send data behind in the scenes in our javascript using fetch.

```js
const url = 'https://now-server.orangeman.now.sh/api/form1'

const apiData = {
    method: 'POST',
    body: JSON.stringify({
        name: 'john',
        email: 'john@eaxmple.com',
        comment:'my comment' 
    })
}
fetch(url, apiData)
    .then(x =>  x.json())
    .then(x => {
      console.log(x)
    })

```

Notice how we get a 400 status code returned to us if name or comment is not included in the body. This means
the server is being responsible and is not accepting anything that is missing neccessary data.

```js
const getUrl = 'https://now-server.orangeman.now.sh/api/form1'

const apiData = {
    method: 'POST',
    body: JSON.stringify({
        name: 'john',
        comment:'my comment' 
    })
}

fetch(getUrl, apiData)
    .then(x => x.json())
    .then(x => {
        if (x.error) {
            throw x.error
        }
         
        console.log(x)
    })
    .catch(err => {
        console.log(err)
    })
```



## Exercise #1
Make a similar POST call with fetch as above, but instead hit the following url:
```bash
https://now-server.orangeman.now.sh/api/tweet
```
Posting to this endpoint requires that your data looks like the following:
```js
const data = {
    twitterHandle: 'string',
    tweet: 'string'
}

```

On success, console.log the result

## Using Inputs to fill out data and send to a server
HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <div id='form-status'></div>
    <form>
        <label for='name'>Name</label>
        <input id='name' name='name'>
        <button type='submit' id='submit'>Submit</button>
    </form>
</body>
<script type="text/javascript" src='./app.js'></script>
</html>

```
JS
```js
function sendComment(comment) {
    const getUrl = 'https://now-server.orangeman.now.sh/api/form1'
    return fetch(getUrl, {
        method: 'POST',
        body: JSON.stringify({
            name: 'john',
            email: 'john@example.com',
            comment: comment
        })
    })
    .then(x => x.json())
    .then(x => {
        if (x.error) {
            throw x.error
        }
         
        console.log(x)
        
    })
    .catch(err => {
        console.log(err)
    })
}

const name = document.querySelector('#name')
const sub = document.querySelector('#submit')

sub.addEventListener('click', x => {
    x.preventDefault() // we must prevent default, so we dont try to either reload this page or go to a different page
    sendComment(name.value)
})
```

## Exercise #2
Using the form code above, add an email and comment input to the html, and update the js so it takes the values from email and comment as well and submits it. You should see all 3 input values `console.log`'d after it has successfully posted.
