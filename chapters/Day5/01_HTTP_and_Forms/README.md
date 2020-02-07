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
## HTTP Methods
- [MDN Docs on HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

There are many ways to hit a single endpoint. When we visit a site in a browser we are making a 'GET' request. We can also make other kinds of requests on the same endpoint:
```js
GET     - get something
POST    - create something
PUT     - update something
DELETE  - remove something
```

Like HTTP codes, these are conventions that are a good idea to follow, but it is possible for the creators of a server to completely ignore these rules if they wanted to. 

## Posting with Fetch
HTTP Forms traditionally work by submitting form results to a different page on the surver. This means the page either reloads
or navigates to a new page. Reloading or switch pages is fine for static non interactive sites, but for things like chat 
or anything that requires the user to stay on the same page, we need to submit form data a different way.

For this, we send data behind in the scenes in our javascript using fetch.

```js
const url = 'https://00tuquls16.execute-api.us-east-1.amazonaws.com/dev/comment'

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

Why doesnt 400 and 500 errors automatically go to the catch function?
- [MDN Answer](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Checking_that_the_fetch_was_successful)
```js
const getUrl = 'https://00tuquls16.execute-api.us-east-1.amazonaws.com/dev/comment'

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
Make a similar POST call with the `fetch` function as is done in the example above, but instead target the following endpoint:
```bash
https://00tuquls16.execute-api.us-east-1.amazonaws.com/dev/tweet
```
Posting to this endpoint requires that your data looks like this:
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
    <form>
        <label for='name'>Name</label>
        <input id='name' name='name'>
        <button type='submit' id='submit'>Submit</button>
        <div id='form-status'></div>
    </form>
</body>
<script type="text/javascript" src='./app.js'></script>
</html>

```
JS
```js
const name = document.querySelector('#name')
const submitButton = document.querySelector('#submit')

function sendComment(name) {
    const getUrl = 'https://00tuquls16.execute-api.us-east-1.amazonaws.com/dev/comment'
    return fetch(getUrl, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: 'john@example.com',
            comment: 'comment...'
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

submitButton.addEventListener('click', x => {
    x.preventDefault() // we must prevent default, so we dont try to either reload this page or go to a different page
    sendComment(name.value)
})
```

## Exercise #2
- Using the form code above, add an `email` and `comment` input to the html. Update the js so it takes the values from `email` and `comment` and submits it to the server (this will involve updating the function parameters). You should see all 3 input values `console.log`'d after it has successfully posted.
- Add submitting text into the `form-status` div while the post is being submitted so users know something is happening, remove it once the post is done.

## Validation
When someone has filled out input fields to submit to a server, where should we validate it, on the frontend or on the server? The answer is both, and you do it for different reasons.
You validate on your server for security reasons. As long as your server validates input, you are safe. So why also validate on the front end? For a good user experience. You want to give your user feedback as soon as possible.

#### Sidenote:
- [Input CSS Inspiration](https://tympanus.net/Development/TextInputEffects/)
- [Status Notification Inspiration](https://tympanus.net/Development/NotificationStyles/)

Here is an example form for filling out a blog post:

HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <form>
        <label for='title'>Title</label>
        <input type="text" name="title" id='title'>
        <br/>

        <label for='author'>Author</label>
        <input type="text" name="author" id='author'>
        <br/>

        <label for='body'>Body</label>
        <textarea name="body" id='body'></textarea>
        <br/>

        <button type='submit' id='submit'>Submit</button>
        <div id='form-status'></div>
    </form>

</body>
<script type="text/javascript" src='./app.js'></script>
</html>
```

JS
```js
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const body = document.querySelector('#body')
const sub = document.querySelector('#submit')

const saveBlogPost = (blog) => {
    const getUrl = 'https://00tuquls16.execute-api.us-east-1.amazonaws.com/dev/blog'
    return fetch(getUrl, {
        method: 'POST',
        body: JSON.stringify({
            title: blog.title,
            author: blog.author,
            blogBody: blog.body
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

sub.addEventListener('click', x => {
    x.preventDefault()

    // ... write validation here before saving blog post
    
    saveBlogPost({
        title: title.value,
        author: author.value,
        body: body.value
    })
})
```

What we can do is first do a bit of validation in the submit button event listener. If any of our validation fails, we
can update the styles for that input to have a red border `example: element.style.borderColor = 'red'` and return so the function does not continue to save the blogPost.

Alternatively, you can add a `.error` css class that you define in a css file if things go wrong. You will also want to make sure to style it back to normal if the user later puts valid input into the field. If statements should do the trick here.

## Exercise #3
Add validation to the blogPost example above which will:
- highlight the input border red if its invalid
- display a message in the form status div telling the user which input is not correct
- For this example, invalid means a field that does not have any text

## Exercise #4 (building on exercise #3)
When a user submits any kind of form (a tweet, a post, a comment, or a blog), once its submitted, the form is usually reset. If you were to press enter on your chat input, and your message stayed there even though it successfully went thru, it would be confusing. So we want to make sure we clear everything once the post is successful.

For this exercise, add a cleanup phase once everthing has correctly been submitted, which will:
- set all inputs values to empty strings
- temporarily add success to the form status div, and have it dissappear after 5 seconds (hint: use `setTimeout`)
