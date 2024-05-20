---
title: Chapter One
description: Easy code snippets
---

### String coercion

What is the value of foo?

```js
var foo = 10 + '20';
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p> The string '1020'</p>
Explantation: 

Type coercion means that when the operands of an operator are different types, one of them will be converted to an "equivalent" value of the other operand's type. For instance, if you do:

```js
boolean == integer
```
the boolean operand will be converted to an integer: false becomes 0, true becomes 1. Then the two values are compared.

However, if you use the non-converting comparison operator ===, no such conversion occurs. When the operands are of different types, this operator returns false, and only compares the values when they're of the same type.
</div>
</details>


### Floating point precision 

What will be the output of the code below?

```js
console.log(0.1 + 0.2 == 0.3);
```

<details>
<summary> Answer  </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff ; font-size: 14px; font-weight: 500;">
<p> False 

Explanation: Floating-point numbers (like 0.1 and 0.2) cannot always be represented with perfect accuracy in a binary system. When 0.1 and 0.2 are added together in JavaScript, the result is not exactly 0.3, but slightly more than that (approximately 0.30000000000000004). Therefore, when this sum is compared to 0.3 using the == or === operator, the result is false because the numbers are not exactly equal due to this small precision error.</p>
</div>
</details>

### Currying

How would you make this work? 

```js
add(2, 5); // 7
add(2)(5); // 7
```


<details>
<summary>Answer </summary>

<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff ; font-size: 14px; font-weight: 500;">


```js
function add(x,y){
   if(y !== undefined){
       return x + y
   }
   return (y) => {
       return x + y
   }
}
add(2)(5);
add(2,5)
```

Explanation: you can create a function that checks the number of arguments provided and behaves accordingly. This pattern is often referred to as "currying" or partially applying a function.

</div>
</details>


### String Manipulation

What value is returned from the following statement?

```js
"i'm a lasagna hog".split("").reverse().join("");
```


<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p> 'goh angasal a m\'i'</p>
Explanation: 

This line of JavaScript code takes the string "i'm a lasagna hog", splits it into an array of characters, reverses that array, and then joins the characters back into a string. The `split("")` method splits the string into an array of individual characters. `reverse()` reverses the order of the array's elements. Finally, `join("")` merges the elements of the array back into a single string, resulting in the reversed version of the original string.
</div>
</details>

### Logical Assignment

What is the value of window.foo?

```js
(window.foo || (window.foo = "bar"));
```


<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p> "bar"</p>
Explanation: 

This expression uses the logical OR operator to assign a value to `window.foo` if it does not already have one. If `window.foo` is undefined, falsy, or not declared, it will be set to "bar". After this operation, `window.foo` will definitely contain "bar".
</div>
</details>

### Scope and Closures

What is the outcome of the two alerts below?

```js
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```


<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p> The first alert shows "Hello World", the second results in an error.</p>
Explanation: 

The first function is an immediately invoked function expression (IIFE) that has its own scope. Inside this function, `bar` is declared and concatenated with `foo` which is accessible due to its higher (global) scope, resulting in the alert "Hello World". The second `alert(foo + bar)` tries to access `bar`, which is not defined in the global scope (it's only defined within the IIFE), hence it will throw a reference error saying that `bar` is not defined.
</div>
</details>

### Array Length

What is the value of foo.length?

```js
var foo = [];
foo.push(1);
foo.push(2);
```


<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p> 2 </p>
Explanation: 

The variable `foo` is initialized as an empty array. The `push` method is used to add elements to the array. `foo.push(1)` adds the number 1 to the array, and `foo.push(2)` adds the number 2. After these operations, the array `foo` contains two elements, thus `foo.length` returns 2.
</div>
</details>


### Object Reference and Assignment

What is the value of foo.x?

```js
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>The value of <code>foo.x</code> is <code>undefined</code>.</p>
Explanation: 

This type of expression is evaluated from left to right. Initially, `foo` references an object `{n: 1}`. When `foo.x = foo = {n: 2};` is executed, the original object referenced by `foo` (now also referenced by `bar`) gets a new property `x` assigned to it. Immediately afterward, `foo` is reassigned to a new object `{n: 2}`, which does not have the `x` property. Thus, `foo.x` is `undefined`, but `bar.x` would be `{n: 2}`.

[Further Read](https://stackoverflow.com/questions/32342809/javascript-code-trick-whats-the-value-of-foo-x)
</div>
</details>

### Event Loop Order

What does the following code print?

```js
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff ; font-size: 14px; font-weight: 500;">
<p> The output is:

```
one
four
three
two
```
</p>
Explanation: The code demonstrates JavaScript's event loop and task queues. `console.log('one');` and `console.log('four');` are executed immediately as part of the synchronous code. Although `setTimeout` has a delay of 0 ms, it places its callback (to log 'two') into the Web APIs and it is moved to the task queue after the current script completes. The `Promise.resolve()` places its callback (to log 'three') into the microtask queue, which is processed immediately after the current script but before any tasks from the task queue (like our setTimeout callback).
</div>
</details>

### Promise Execution Differences

What is the difference between these four promises?

```js
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff ; font-size: 14px; font-weight: 500;">
<p>The differences are related to how and when `doSomethingElse` is executed and whether its result is passed down the promise chain:</p>
<ul>
<li>The first example returns the result of `doSomethingElse()`, chaining the promises correctly. Whatever `doSomethingElse()` returns (a value or promise) will be awaited before resolving the outer promise.</li>
<li>The second example calls `doSomethingElse()` without returning its result, so the outer promise resolves independently of the completion of `doSomethingElse()`.</li>
<li>The third example is incorrect because `doSomethingElse()` is executed immediately when the promise chain is defined, not after `doSomething()` resolves.</li>
<li>The fourth example correctly chains the promises by passing `doSomethingElse` as a function reference to be called after `doSomething()` resolves.</li>
</ul>
</div>
</details>

### Scope and Variable Declaration

What will the code below output to the console and why?

```js
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>The output is:

```
a defined? false
b defined? true
```
</p>
Explanation: Inside the immediately-invoked function expression (IIFE), `a` is declared with `var`, making it local to the function scope and undefined outside of it. However, `b` is assigned without being declared with `var`, `let`, or `const`, implicitly creating a global variable. Thus, outside

</details>