---
title: Under construction
description: Easy code snippets
---


### Write a program to find element occurrence in an array



Input:
```js
const arr = [1, 1, 2, 3, 1, 4];
```
Output:
```js
// 👉 {1: 3, 2: 1, 3: 1, 4: 1}
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

```js
const arr = [1, 1, 2, 3, 1, 4];
const count = {};

for (const element of arr) {
    if (count[element]) {
        count[element] += 1;
    } else {
        count[element] = 1;
    }
}

console.log(count); // 👉 {1: 3, 2: 1, 3: 1, 4: 1}
```

The code iterates through the array and uses an object `count` to keep track of the occurrences of each element. The final output is `{1: 3, 2: 1, 3: 1, 4: 1}`, indicating how many times each number appears in the array.

</div>
</details>

---

### Write a program to remove duplicate items from an array



Input:
```js
const arr = [1, 2, 3, 4, 1, 2];
```
Output:
```js
// 👉 [1, 2, 3, 4]
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

```js
const arr = [1, 2, 3, 4, 1, 2];
const b = [];


const arr = [1, 2, 3, 4, 1, 2];
arr.filter((dup) => {
    if (b.indexOf(dup) === -1) {
        b.push(dup);
    }
});



console.log("removed array value", b); // 👉 [1, 2, 3, 4]
```

or just do

```js
console.log([...new Set(arr)]) // 👉 [1, 2, 3, 4]
```



The code iterates through the array and pushes each element into the new array `b` only if it is not already present in `b`. This removes duplicate elements and results in `[1, 2, 3, 4]`.

</div>
</details>

---

### Flatten a nested array to a specified depth.

Write a function that takes two arguments: a nested array and a number representing the depth to flatten. The function should return a new array that is flattened up to the specified depth.


```js
flatten([1, [2], [3, 4]], 1) -> [1, 2, 3, 4]
flatten([1, [2, [3, 4]]], 1) -> [1, 2, [3, 4]]
flatten([1, [2, [3, 4]]], 2) -> [1, 2, 3, 4]
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

```js
function flatten(array, depth = 1) {
  if (depth < 1) return [...array]; // If depth is less than 1, return a shallow copy.

  let result = [];
  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      // If the item is an array, recursively flatten it with reduced depth and spread the result.
      result = [...result, ...flatten(item, depth - 1)];
    } else {
      // Otherwise, spread the non-array item into the result.
      result = [...result, item];
    }
  }
  return result;
}

// Examples:
console.log(flatten([1, [2], [3, 4]], 1)); // [1, 2, 3, 4]
console.log(flatten([1, [2, [3, 4]]], 1)); // [1, 2, [3, 4]]
console.log(flatten([1, [2, [3, 4]]], 2)); // [1, 2, 3, 4]

```

explanation

</div>
</details>

---



### Write a program for the following output using arrow function



Input:
```js
call(2)(4)(6)
```
Output:
```js
// 👉 48
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

```js
const call = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
} 

//Above can also be written as a one liner

const call = (a) => (b) => (c) => a * b * c;

console.log("output with arrow function", call(2)(4)(6)); // 👉 48
```

The arrow function syntax achieves the same result as the normal function, where `call(2)(4)(6)` multiplies the three numbers together, resulting in `48`.

</div>
</details>

---

### Write a program to return resolve if value is less than 7 using Promise



Input:
```js
fun(5)
```
Output:
```js
// 👉 "number is given 5"
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

```js
function fun(a) {
    let myPromise = new Promise((myResolve, myReject) => {
        if (a < 7) {
            myResolve(`number is given ${a}`);
        } else {
            myReject("Error");
        }
    });

    myPromise.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
}

fun(5); // 👉 "number is given 5"
```
OR this way also possible

```js

const fun = (value) => {
    return new Promise((resolve, reject) => {
        if(value < 5 ){
           resolve('Number less than 5') 
        } else {
            reject('Error')
        }
    })
}
    fun(3).then((success) => console.log(success)).catch((second) => console.log(second))
    
```


</div>
</details>

---


### Explain `await` key word in Javascript




<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The `await` keyword in JavaScript is used to pause the execution of an asynchronous function until a Promise is resolved or rejected. It can only be used inside an `async` function.

##### Key Points:
1. **Asynchronous Functions**: 
   - `await` is used within functions declared with the `async` keyword.
   - An `async` function always returns a Promise.

2. **Pausing Execution**:
   - When `await` is used with a Promise, it pauses the execution of the `async` function until the Promise is settled (either resolved or rejected).

3. **Simplifying Promise Handling**:
   - `await` makes asynchronous code look and behave more like synchronous code, reducing the complexity of chaining `then()` methods.

##### Example:

Without `await`:
```javascript
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}

fetchData().then(data => {
    console.log(data);
});
```

With `await`:
```javascript
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data);
}

getData();
```

##### Error Handling:
You can use `try...catch` blocks to handle errors when using `await`.

Example:
```javascript
async function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error fetching data");
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchDataWithError();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData();
```


</div>
</details>

---



### Write an async function using promises in JavaScript




<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

```js
// This function fetches data from a given URL and returns a promise.
async function fetchData(url){
    
    try {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error(`HTTP Error status ${response.status}`)
    }
    const data = await response.json()
    return data
    } catch {
        console.log('there is some problem with fetch operation');
    }
}


const url = "https://dummyjson.com/test"
fetchData(url).then(resp => console.log(resp)).catch(err => console.log(`Error fetching data ${err}`))


</div>
</details>

---



### Write an asynchronous function using the Promise object instead of `await`.




<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

```js
// This function fetches data from a given URL and returns a promise.
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Fetch data from the URL
    fetch(url)
      .then(response => {
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Resolve the promise with the parsed data
        resolve(data);
      })
      .catch(error => {
        // Reject the promise if there's an error
        reject(`There was a problem with the fetch operation: ${error.message}`);
      });
  });
}

// Example usage:
const url = 'https://api.example.com/data';

fetchData(url)
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that were not caught in fetchData
    console.error('Error fetching data:', error);
  });


```


</div>
</details>

---



### Write a program to multiply two numbers without using the multiply sign in JavaScript

**Input:**
```js
const a = 5;
const b = 3;
```

**Expected Output:**
```js
// 👉 15
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

```js
function multiply(a, b) {
    let answer = a;
    for (let i = 0; i < b - 1; i++) {
        answer += a;
    }
    return answer;
}

console.log(multiply(5, 3));  // 👉 15
```
</div>
</details>

---

### Write a program to sort an array in ascending order



**Input:**
```js
const arr = [3, 2, 5, 4, 1, 0];
```

**Expected Output:**
```js
// 👉 [0, 1, 2, 3, 4, 5]
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

```js
const arr = [3, 2, 5, 4, 1, 0];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("Elements of array sorted in ascending order:", arr);  // 👉 [0, 1, 2, 3, 4, 5]

```

or

```js
const arr = [3, 2, 5, 4, 1, 0];
const result = arr.sort((a,b) => a - b)
console.log(result)

```
</div>
</details>


