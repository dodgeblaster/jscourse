# HTTP and Forms
HTTP Forms traditionally work by submitting form results to a different page on the surver. This means the page either reloads
or navigates to a new page. Reloading or switch pages is fine for static non interactive sites, but for things like chat 
or anything that requires the user to stay on the same page, we need to submit form data a different way.

For this, we send data behind in the scenes in our javascript using fetch.

```js
const url = 'https://now-server.orangeman.now.sh/api/form1'

const apiData = {
    method: 'POST',
    body: JSON.stringify({
        name: 'gary',
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
