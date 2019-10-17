# Error Handling
Error handling is important when we are dealing with IO in our program. Our program internally, of coded well, should work without a whole lots of error handling, but IO or connections to services outside our own is impossible to predict or trust. So we need to validate all IO and catch any errors that may occur.
```js
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
```
Sometimes it is a good idea to define different types of errors. When executing a functiont that is sending data to a server, there could be multiple types of errors that could occur. We may want to respond to a network error differently than a user input error.

```js
class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

try {
  promptDirection()
} catch(err) {
  if (err instanceof InputError) {
      console.log("Not a valid direction. Try again.");
  } else {
      throw err;
  }
}
```
In the example above, we are not just saying there is a general error, we are saying its a user input error. 

## Exercise
Add a try catch in the event handler on submit. 
- If the month is not a valid month name, throw and error
- If the day is not a valid day, throw an error (1 - 31 will do for this exercise, this is actually kindof a hard problem
  due to different months have different days, and leap year...)
- Show some kind of error message
- Show success if everything is valid

HTML
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <form>
        <h1>Make Calander Event</h1>
        <label for='name'>Event Name</label>
        <input type="text" name="name" id='name'>
        <br/>

        <label for='month'>Month</label>
        <input type="text" name="month" id='month'>
        <br/>

        <label for='day'>Day</label>
        <input type="text" name="day" id='day'>
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
const name = document.querySelector('#name')
const month = document.querySelector('#month')
const day = document.querySelector('#day')
const submit = document.querySelector('#submit')

submit.addEventListener('click', x => {
    x.preventDefault()
    // validate input in a try
    document.querySelector('#form-status').innerHTML = 'Event added!' 
    
    // catch errors here and deal with them
})
```
