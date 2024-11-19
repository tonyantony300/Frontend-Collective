---
title: Level 4
description: Closure, Debounce, Throttling
---

### Closure

- **Code**: Defines `outerFunction` which returns `innerFunction`.
- **Behavior**: `innerFunction` accesses `test` from `outerFunction`'s scope, demonstrating closure.
- **Use Case**: 
  - **Encapsulation**: Hide variables.
  - **Maintaining state**: Preserve state across function calls.
  - **Callbacks**: Use with event handlers, timers.

```js
function outerFunction(){
    const test = "This is a messgae from the outer context"
    
    function innerFunction(){
      console.log(test)  
    }
    
    return innerFunction
}

const closure = outerFunction();

closure();

```

### Debounce

- **Code**: `debounce` function wraps another function `func`, delaying its execution until after a specified delay.
- **Behavior**: On successive calls, resets the delay timer.
- **Use Case**:
  - **Input validation**: Avoid frequent API calls on user input.
  - **Search bar**: Wait for user to stop typing before searching.
  - **Resize events**: Optimize window resize handlers.



```js
const debounce = (func, delay = 300) => {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
     timerId = setTimeout(() => {
        func.apply(this, args)
     }, wait)
}
}

const saveInput = (name) =>{
   console.log('Save input', name) 
}

const processChange = debounce(saveInput, 2000)


processChange("Foo");
processChange("Foo");
processChange("Foo");
processChange("Foo");

```

### Extending Debounce function

- **Behavior**: Debounce with a cancel() method to cancel delayed invocations and a flush() method to immediately invoke them.


```js
export default function debounce(func, wait) {
  let timerId;

  function debounced(...args) {
    const context = this;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  }

  debounced.cancel = function () {
    clearTimeout(timerId);
    timerId = null;
  };

  debounced.flush = function (...args) {
    if (timerId) {
      clearTimeout(timerId);
      func.apply(this, args); 
      timerId = null;
    }
  };

  return debounced;
}

const saveInput = (name) => {
  console.log('Save input', name);
};

const debouncedFunction = debounce(saveInput, 1000);

// Regular debounce behavior
debouncedFunction("Foo");

// Cancel the pending invocation
debouncedFunction.cancel();

// Immediately invoke the debounced function
debouncedFunction.flush("Bar");
```



### Throttling Function

- **Code**: `throttle` function limits the execution of `func` to once every `wait` milliseconds.
- **Behavior**: Ensures `func` executes at most once in the defined time interval.
- **Use Case**:
  - **Scroll events**: Improve performance by reducing handler invocations.
  - **Button clicks**: Prevent multiple submissions.
  - **API rate limiting**: Control the rate of API calls.


```js
function throttle(func, wait) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastCall >= wait) {
      lastCall = now;
      return func.apply(this, args);
    }
  };
}

// Example usage:
const log = (message) => {
  console.log(message, new Date().toLocaleTimeString());
};

const throttledLog = throttle(log, 2000);

setInterval(() => {
  throttledLog('Logged at');
}, 500);
```

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The `throttle` function takes in a function `func` and a wait time `wait` in milliseconds. It sets up a variable `lastCall` to keep track of the last time the function was called.

The returned function is the throttled version of `func`. It captures the current time using `new Date().getTime()` and checks if the difference between the current time and the last call time is greater than or equal to the wait time. If it is, it updates `lastCall` to the current time and invokes `func` with the provided arguments.

In the example usage, we define a `log` function that logs a message with the current time. We then create a throttled version of `log` with a 2000ms wait time. We use `setInterval` to call the throttled function every 500ms, but due to throttling, `log` will only be invoked every 2000ms.
</div>
</details>



### **Comparison**

| Feature            | Debounce                               | Throttle                               |
|---------------------|----------------------------------------|----------------------------------------|
| **Execution timing**| After the event stops                 | At regular intervals                   |
| **Usage goal**      | Limit executions **at the end** of rapid events | Limit executions to **once per interval** |
| **Best for**        | User input (e.g., typing, resizing)    | Continuous actions (e.g., scrolling, dragging) |

---


## Polyfills

A polyfill is a code snippet (in terms of JavaScript web architecture) used for modern world functionalities on older browsers that do not implement it natively.

Simply put, a polyfill is a custom implementation of native JavaScript functions. Sort of a create your own .map() or .filter() method.

### polyfill for Map

```js
let data = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};
const mapLog = data.myMap((el) => el * 2);
console.log(mapLog);
```

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The `myMap` method takes in a callback that gets executed inside the `myMap` body. We basically have a native for loop inside the `myMap` body, which iterates over the this.length. This is nothing but the length of the array through which the `myMap` function is called.

Since the syntax of `map()` is `arr.map(currentElement, index, array)`, and the `myMap()` function takes into account exactly that.

Also since `map()` returns a new array, we create an empty array and push the results into it. In the end we return it.
</div>
</details>


### polyfill for Filter

```js
let data = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
const filterLog = data.myFilter((el) => el < 4);
console.log(filterLog);
```

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

`.filter()` is very similar to `.map()` in terms of implementation. But since filter filters out the results based on a boolean value, we have an additional `if()` condition to filter out results and conditionally push inside the array.
</div>
</details>



### Polyfill for Reduce

```js
let data = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};

const reduceLog = data.myReduce((acc, el) => acc + el, 0);
console.log(reduceLog);
```

<details>
<summary>Explanation</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The `myReduce` method takes in a callback function and an optional initial value. Inside the `myReduce` body, we set up an accumulator variable which will hold the result of the reduction. If an initial value is provided, we use it to set the accumulator, otherwise we default to the first element of the array. 

We also determine the starting index for the loop based on whether the initial value is provided (start from 0) or not (start from 1).

We then iterate over the array starting from the determined index, updating the accumulator with the result of the callback function at each iteration. The callback function receives the current accumulator value, the current element, the current index, and the array itself as arguments.

In the end, we return the accumulated value.
</div>
</details>