# Higher Order Functions


- [Working Files](https://htmlbasicsresources.s3.amazonaws.com/higher-order-functions.zip)

## Data for demonstrations
```js
const scores = [7, 4, 5, 6, 2, 1, 3, 5, 6, 7]
const stocks = [
    { symbol: 'XFX', price: 240, volume: 2333 },
    { symbol: 'TNZ', price: 332, volume: 234 },
    { symbol: 'JXL', price: 120, volume: 5345 }
]
```


Demo Starting Point
```js
const scores = [7, 4, 5, 6, 2, 1, 3, 5, 6, 7]


// SOLUTION 1
const percentages = []
for (let index = 0; index < scores.length; index++) {
    const percent = (scores[index] / 7) * 100
    percentages.push(percent)
}

console.log(percentages)

```

#### forEach
-   demonstrate to use forEach
- work thru exercises


forEach Soltion
```js
// arrow function
const addTitle = x => {
    addLine(x.title)
}

// oneline arrow function
const addTitleShort = x => addLine(x.title)

movieData.forEach(function(x) {
    addLine(x.title)
})


```

#### map

Starting Point
```js
// Example 1
const scores = [7, 4, 5, 6, 2, 1, 3, 5, 6, 7]

const percentages = []
scores.forEach(x => {
    const percent = (x / 7) * 100
    percentages.push(percent)
})
console.log(percentages)

// Example 2
const stocks = [
    { symbol: 'XFX', price: 240, volume: 2333 },
    { symbol: 'TNZ', price: 332, volume: 234 },
    { symbol: 'JXL', price: 120, volume: 5345 }
]

const symbols = []
stocks.forEach(x => {
    symbols.push(x.symbol)
})
console.log(symbols)
```

NOTES
```js
const scores = [7, 4, 5, 6, 2, 1, 3, 5, 6, 7]

const addedScores = scores.map(function(x) {
    return x + 2
})
// original array stays the same
scores.forEach(function(x) {
    console.log(x)
})

console.log('-----')
// map creates a brand new array
addedScores.forEach(function(x) {
    console.log(x)
})
```

#### filter
Starting Point
```js
const stocks = [
    { symbol: 'XFX', price: 240, volume: 2333 },
    { symbol: 'TNZ', price: 332, volume: 234 },
    { symbol: 'JXL', price: 120, volume: 5345 }
]

const getSymbol = x => x.symbol
const getPrice = x => x.price
const logResult = x => console.log(x)

stocks
    .map(getPrice)
    .forEach(logResult)
```


#### chaining
-   how all these functions can be chained

