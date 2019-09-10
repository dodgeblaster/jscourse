# Data Structures

## Basic Intro (Demonstration)

-   why are basic types not enough, why do we need complex data structures?
-   how do I represent a sait course with a simple type?
    -   teacher
    -   classroom
    -   startingDate
    -   endingDate
-   How do I represent all of this in one single value?
-   You cant, (string isnt a good option), thats why we have objects, to group values (including functions) together

## Read Chapter (In Class Reading)

-   Read chapter in 30 minutes

## Chapter concepts overview (Demonstration)

#### How to make an array

-   How to make an array
-   arrays can have any value, can have different types in the same array (although not recommended)

#### Object Mutability

-   updating arrays
-   updating values on an object

#### Array methods

-   shift
-   unshift
-   push
-   indexOf
-   slice
-   splice
-   concat

#### Spreading an Array

-   how to spread an array
-   easy way to create a new array with a new value

#### Desctructuring

-   how get values out of object

#### JSON

-   why is a JSON a thing? because usually u dont want to save an object and all its memory references and locations, just the raw data

## Chapter Exercises

-   make a range function (from book)
-   make a function called: add10Points(listOfPlayers, player)
    it will take an array of players like this:

```
[
    {
        name: 'John',
        points: 10
    },
     {
        name: 'Jane',
        points: 10
    }
]
```

and a players name, and returns a new array with the points added
