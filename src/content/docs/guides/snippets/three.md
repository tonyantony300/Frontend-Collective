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

The code iterates through the array and pushes each element into the new array `b` only if it is not already present in `b`. This removes duplicate elements and results in `[1, 2, 3, 4]`.

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
const call = (a) => (b) => (c) => a * b * c;

console.log("output with arrow function", call(2)(4)(6)); // 👉 48
```

The arrow function syntax achieves the same result as the normal function, where `call(2)(4)(6)` multiplies the three numbers together, resulting in `48`.

</div>
</details>

---

### Write a program to return resolve if value is less than 5 using Promise



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

The code creates a promise that resolves if the given number is less than 7. It prints "number is given 5" if the number is 5, as the condition is satisfied.

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
</div>
</details>
