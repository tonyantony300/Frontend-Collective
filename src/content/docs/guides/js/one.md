---
title: Javascript questions
description: This should be comprehensive
---


### Type Utility 1

In this question, we will implement the following utility functions to determine the types of primitive values.

- isBoolean(value): Return true if value is a boolean, false otherwise.
- isNumber(value): Return true if value is a number, false otherwise. Note that NaN is considered a number.
- isNull(value): Return true if value is null, false otherwise.
- isString(value): Return true if value is a String, else false.
- isSymbol(value): Return true if value is a Symbol primitive, else false.
- isUndefined(value): Return true if value is undefined, else false.

```js
 function isBoolean(value) {
  return value === true || value === false;
}

 function isNumber(value) {
  return typeof value === 'number';
}

 function isNull(value) {
  return value === null;
}

 function isString(value) {
  return typeof value === 'string';
}

 function isSymbol(value) {
  return typeof value === 'symbol';
}

 function isUndefined(value) {
  return value === undefined;
}

```



### Type Utility 2

we will implement the following utility functions to determine the types of non-primitive values.

- isArray(value): Return true if value is an array, false otherwise.
- isFunction(value): Return true if value is a function, false otherwise.
- isObject(value): Return true if value is an object (e.g. arrays, functions, objects, etc, but not including null and undefined), false otherwise.
- isPlainObject(value): Return true if value is a plain object, false otherwise (for arrays, functions, etc).
- A plain object, or what is commonly known as a Plain Old JavaScript Object (POJO) is any object whose prototype is Object.prototype or an object created via Object.create(null).

```js
 function isArray(value) {
  return Array.isArray(value)
}

 function isFunction(value) {
 if(value == null) return false
 return typeof value === "function"
}

 function isObject(value) {
  if(value == null) return false
  return typeof value === "object" || typeof value === "function"
}

 function isPlainObject(value) {
  if(value == null) return false
  return  Object.getPrototypeOf(value) === null || Object.getPrototypeOf(value) === Object.prototype 
}

```


### Flatten

 const arr = [1,[2, 3,[4,5,6],[7]]]


```js
 function flatten(arr){
     let result = []
    for(let item of arr){
        if(Array.isArray(item)) {
         result = [...result, ...flatten(item)]
        } else {
         result = [...result, item]
        }
    }
    return result
 }


// or 

function flatten(value){
  while (value.some(Array.isArray)) {
    value = [].concat(...value);
  }
  return value;
}

// or

function flatten(value) {
  return value.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    [],
  );
}

 
```


### MinBy

Implement a function minBy(array, iteratee) that finds the element inside array with the minimum value after going through iteratee.

#### Arguments

array (Array): The array to iterate over.
iteratee (Function): The iteratee invoked per element, which is a function that accepts one argument: (value).
Returns

(*): Returns the minimum value.

#### Examples

- minBy([2, 3, 1, 4], (num) => num); // => 1

- minBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 1 }

The function should ignore elements where iteratee produces null or undefined.

- minBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => undefined


```js
 function minBy(array, iteratee) {
  let result, computed;
  for(let item of array){
    const curr = iteratee(item);
    if(curr != null && (computed === undefined || curr < computed)){
      computed = curr;
      result = item
    }
  }
  return result
}
```


### Cycle

Implement a function that takes one or more values and returns a function that cycles through those values each time it is called.

const helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"

```js
function cycle(...values) {
   let idx = -1;
  return  () => {
    idx = (idx + 1) % values.length;
    return values[idx];
  };
}
```


### countBy


Implement a function countBy(array, iteratee) that creates an object composed of keys generated from the results of running each element of array through iteratee. The corresponding value of each key is the number of times the key was returned by iteratee.

countBy(array, iteratee);
Arguments

array (Array): The array to iterate over.
iteratee (Function): The iteratee function to transform elements. The function is invoked with one argument: (value).
Returns

(Object): Returns the composed aggregate object.

Examples

countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
// => { '3': 2, '5': 1 }
The function should return when array is empty and treat null / undefined keys after going through iteratee as it is.

countBy([], (o) => o); // => {}

countBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => { undefined: 2 }


```js
function countBy(array, iteratee) {
  let result = Object.create(null)
  for(let item of array){
      const curr = iteratee(item)
      result[curr] ??= 0
      result[curr] += 1
  }
  return result
}
```


### Promisify

// Example function with callback as last argument
// The callback has the signature `(err, value) => any`
function foo(url, options, callback) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

const promisifiedFoo = promisify(foo);
const data = await promisifiedFoo('example.com', { foo: 1 });


```js
function promisify(func) {
  return function (...args){
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (error, value) => {
        if(error){
          reject(error)
        } else {
          resolve(value)
        }
      })
    })
  }
}
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



### 


<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">



</div>
</details>

