---
title: Javascript questions
description: This should be comprehensive
---


## Array methods


### The .map() method

The .map() methods iterates over an array, computes whatever logic you write inside the map body, and returns a **NEW array.** Can be used for chaining other methods because of the return.

```js
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let names = arr.map((el) => el.name)
console.log(names)
// Output: [ 'Manu', 'Quincy', 'Abbey' ]
```

### The .forEach() method

ForEach is similar to .map() but it DOES NOT return an array. Cannot be used for chaining

```js
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

arr.forEach((el) => el.age+= 10);
console.log(arr);

// Output: 
// [
//   { id: 1, age: 22, name: 'Manu' },
//   { id: 2, age: 34, name: 'Quincy' },
//   { id: 3, age: 32, name: 'Abbey' }
// ]

```

### The .filter() method

The filter method, as the name suggests, helps in filtering out the values inside of an array based on a Boolean condition.

If the boolean condition is true, the result will be returned and added in the final array. If not, it will be skipped. Filter also returns an array, just like the .map() method. *Can be chained*



```js
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let tooYoung = arr.filter((item) => item.age <= 14);
console.log(tooYoung);

// Output: [ { id: 1, age: 12, name: 'Manu' } ]
```
### The .reduce() method

In simple terms, the .reduce() method takes into account a previous value , current value and an accumulator.

The return type of the .reduce() method is always a single value. **It is useful when you want to process all the values of the array and want to derive some accumulated result.**

```js
// Calculates the total age of all the three persons.
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let totalAge = arr.reduce((acc, currentObj) => acc + currentObj.age, 0)
console.log(totalAge)

// Output: 57
```

Here, the currentObj is the object that is being iterated over. Also, the acc value stores the result and is outputted finally into the totalAge array.
