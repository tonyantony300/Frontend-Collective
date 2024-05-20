---
title: Level 4
description: Closure, Debounce, Throttling
---

### Closure

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

```js
const debounce = (func, delay = 300) =>{
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() =>{
            func.apply(this,args)
        }, delay)
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

### Throttling


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


### polyfill for Reduce

