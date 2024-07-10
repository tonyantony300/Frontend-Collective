---

title: Level 2
description: Intermediate code snippets

---


### Palindrome Check Function

```js
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The function `isPalindrome` checks if a string is the same when read forwards and backwards. It does this by splitting the string into an array of characters, reversing that array, and joining it back into a string to compare with the original.
</div>
</details>

---

### Return Even Numbers in an Array

```js
function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The function `filterEvenNumbers` returns a new array containing only the even numbers from the input array. It uses the `filter` method to check if each number is even.
</div>
</details>

---


### Add Element to Array

```js
function addElem(array, el) {
  return [...array, el];
}
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The `addElem` function adds an element to an array without mutating the original array by using the spread operator.
</div>
</details>

---

### Concatenate Two Arrays

```js
function concat(arr1, arr2) {
  return [...arr1, ...arr2];
}
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The `concat` function concatenates two arrays using the spread operator, creating a new array with elements from both input arrays.
</div>
</details>

---

### Check if Name is in Array of Objects

```js
function checkName(name, arr) {
  return arr.some((obj) => obj.name === name);
}
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The `checkName` function checks if a given name exists in an array of objects. It uses the `some` method to see if any object in the array has a `name` property that matches the given name.
</div>
</details>

---

### Return Unique Elements - Method 1

```js
let unique = (arr) => {
  return [...new Set(arr)];
};
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The `unique` function returns an array with only unique elements by creating a Set from the input array and then spreading it back into a new array.
</div>
</details>


### Return Unique Elements - Method 2

```js
function uniqueFinder(target) {
  return target.reduce((cumul, el) => {
    return cumul.includes(el) ? cumul : [...cumul, el];
  }, []);
}
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The `uniqueFinder` function returns an array with only unique elements by using the `reduce` method to accumulate unique elements.
</div>
</details>

---


### Predict Output Example - 1

```js
let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter += i;
}
console.log(counter);
console.log(i);
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The `counter` variable will be 55, as it sums the numbers from 1 to 10. The variable `i` will be 11, as it increments after the last iteration of the loop.
</div>
</details>

---

### Predict Output Example - 2

```js
const object1 = {
  a: 10,
  b: 20,
  c: function () {
    console.log(this.a + this.b);
  },
};
const func = object1.c;
func();
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The `func` variable will not work as expected because it loses the context of `this`. The `this` value inside `func` will not refer to `object1`, causing it to print `NaN`. Using `bind` to retain the context will fix the issue.

`object1.c()` will work, if assiged to another varable func, this value of this will change OR

`const func = object1.c.bind(object1); func();` will work perfectly.
</div>
</details>

---

### Factorial Function

```js
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The `factorial` function calculates the factorial of a number recursively. If the number is 0 or 1, it returns 1. Otherwise, it multiplies the number by the factorial of the number minus one.
</div>
</details>

---



### Fibonacci Generator

```js
let a = 0;
let b = 1;

function createFibonacciGenerator() {
  return function () {
    const result = a;
    const temp = a + b;
    a = b;
    b = temp;
    return result;
  };
}

const caller = createFibonacciGenerator()

caller();
caller();
caller();
```
// Modify this so that, when passed an index get that fibnacci value

```js
let a = 0;
let b = 1;
let fibnacciSeries = []

function getFibnacciAt(index) {
    
    for(let i = 0 ; i <= index; i++){
        
        let result = a ;
        let temp = a + b;
        a = b ;
        b = temp;
        fibnacciSeries = [...fibnacciSeries, result]
    }
    
    console.log(fibnacciSeries[index])
    
}

getFibnacciAt(25);
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The `createFibonacciGenerator` function returns a function that generates Fibonacci numbers. Each call to the returned function produces the next number in the Fibonacci sequence.
</div>
</details>

---


### Sort Array of Objects by Author's Last Name

```js
const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

let sorted = books.sort((book1, book2) => {
  let author1 = book1.author.split(" ")[1];
  let author2 = book2.author.split(" ")[1];
  return author1 > author2 ? -1 : 1;
});
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

The `sorted` variable holds an array of books sorted by the author's last name. It splits each author's name and compares the last names to determine the order.

The expression author1 > author2 ? -1 : 1 checks if author1 is greater than author2. If true, it returns -1, indicating that author1 should come before author2. Otherwise, it returns 1, indicating that author2 should come before author1.

Sorting Order:

The comparison function is called for pairs of elements in the array to determine their order.
This particular comparison sorts the array in descending order because it uses -1 for author1 > author2.
To sort in ascending order, you can modify the comparison function:

```js
let sorted = books.sort((book1, book2) => {
  let author1 = book1.author.split(" ")[1];
  let author2 = book2.author.split(" ")[1];
  return author1 < author2 ? -1 : 1;
});
```
This will sort the array based on the authors' last names in ascending order.
</div>
</details>

---


### Custom function

Write the some function and isEven and isPrime functions according to the following conditions

```
console.log(some([2,4,6], 3, isEven)) // should print true
console.log(some([2,3,4], 3, isEven)) // should print false
console.log(some([2,3,11], 4, isPrime)) // should print false
console.log(some([2,3,5,9], 3, isPrime)) // should print true


some(array, n, conditionFunction) -> returns true Or False
array - Input array
n - The function should check if n elements of the conditionFunction satisfy
```


<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>Explanation:</p>

  ```js
function some(array, n, conditionFunction) {
  let mapped = array.map((i) => conditionFunction(i));
  return mapped.filter((i) => i === true).length >= n;
}

function isEven(int) {
  return int % 2 === 0;
}

function isPrime(int) {
  for (let i = 2, s = Math.sqrt(int); i <= s; i++) {
    if (int % i === 0) return false;
  }
  return int > 1;
}
```
</div>
</details>

---
