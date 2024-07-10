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

### Make this work

**Task:** Make this work:
```js
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>

To make this work, you can create a function `duplicate` that concatenates the array with itself using the `concat` method.

```js
function duplicate(arr) {
    return arr.concat(arr);
}

// Example usage
console.log(duplicate([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
```
</p>
</div>
</details>

### FizzBuzz

**Task:** Create a for loop that iterates up to 100 while outputting “fizz” at multiples of 3, “buzz” at multiples of 5 and “fizzbuzz” at multiples of 3 and 5

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>

You can achieve this with the following for loop:

```js
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
}
```
</p>
</div>
</details>

### Logical Operators

**Task:** What will be returned by each of these?
```js
console.log("hello" || "world");
console.log("foo" && "bar");
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>

1. `console.log("hello" || "world")` returns `"hello"`.

   Explanation: The `||` (logical OR) operator returns the first truthy value it encounters. Since `"hello"` is a truthy value, it is returned.

2. `console.log("foo" && "bar")` returns `"bar"`.

   Explanation: The `&&` (logical AND) operator returns the first falsy value it encounters, or the last value if all are truthy. Both `"foo"` and `"bar"` are truthy, so the last value, `"bar"`, is returned.
</p>
</div>
</details>

### Immediately Invoked Function Expression (IIFE)

**Task:** Write an immediately invoked function expression (IIFE)

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>

An immediately invoked function expression (IIFE) can be written as follows:

```js
(function() {
    console.log('This is an IIFE');
})();
```

This will log "This is an IIFE" immediately upon execution.
</p>
</div>
</details>

### Function Returns

**Question:** Consider the two functions below. Will they both return the same thing? Why or why not?

```js
function foo1() {
  return {
      bar: "hello"
  };
}

function foo2() {
  return
  {
      bar: "hello"
  };
}
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p>

The two functions will not return the same thing.

Explanation:

In `foo1`, the object `{ bar: "hello" }` is returned correctly.

```js
function foo1() {
  return {
      bar: "hello"
  };
}
```

In `foo2`, due to the placement of the newline after `return`, JavaScript's automatic semicolon insertion inserts a semicolon immediately after `return`. This means `foo2` effectively returns `undefined`.

```js
function foo2() {
  return;
  {
      bar: "hello"
  };
}
```

To correct `foo2` so it returns the same object as `foo1`, the opening curly brace should be on the same line as `return`.

```js
function foo2() {
  return {
      bar: "hello"
  };
}
```
</p>
</div>
</details>


[Refer to learn about quality comparators, strict and abstract equality ](https://javascript.plainenglish.io/how-does-abstract-equality-comparison-work-591eed983666)


### prediction 0

what will be the output of this code?

```js
console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

```

```js

Promise.resolve().then(() => console.log(1));

setTimeout(() => console.log(2), 10);

queueMicrotask(() => {
  console.log(3);
  queueMicrotask(() => console.log(4));
});

console.log(5);

```


<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Understanding the execution order of tasks and microtasks in JavaScript is crucial for handling asynchronous operations. Here's an explanation with examples.

 Event Loop, Task Queue, and Microtask Queue

In JavaScript, the event loop is responsible for handling asynchronous operations. It manages two main queues: the **Task Queue** (or **Macro Task Queue**) and the **Microtask Queue**.

1. **Task Queue (Macro Task Queue):** This queue handles tasks such as `setTimeout`, `setInterval`, and other asynchronous tasks. These are processed after the current execution stack is empty.
2. **Microtask Queue:** This queue handles tasks such as `Promise` callbacks and `queueMicrotask`. These are processed immediately after the current execution stack is empty but before any tasks from the Task Queue.

 Example 1

```javascript
console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
```

**Execution Explanation:**

1. **Synchronous Code:** 
   - `console.log('Start');` is executed immediately.
   - `setTimeout(() => { console.log('setTimeout'); }, 0);` is scheduled in the Task Queue.
   - `Promise.resolve().then(() => { console.log('Promise'); });` is scheduled in the Microtask Queue.
   - `console.log('End');` is executed immediately.

2. **Microtasks Execution:** 
   - Microtasks in the Microtask Queue are processed next. So, `console.log('Promise');` is executed.

3. **Tasks Execution:**
   - Finally, tasks in the Task Queue are processed. So, `console.log('setTimeout');` is executed.

**Output Order:**
```
Start
End
Promise
setTimeout
```


```javascript
Promise.resolve().then(() => console.log(1));

setTimeout(() => console.log(2), 10);

queueMicrotask(() => {
  console.log(3);
  queueMicrotask(() => console.log(4));
});

console.log(5);
```

**Execution Explanation:**

1. **Synchronous Code:**
   - `Promise.resolve().then(() => console.log(1));` is scheduled in the Microtask Queue.
   - `setTimeout(() => console.log(2), 10);` is scheduled in the Task Queue.
   - `queueMicrotask(() => { console.log(3); queueMicrotask(() => console.log(4)); });` is scheduled in the Microtask Queue.
   - `console.log(5);` is executed immediately.

2. **Microtasks Execution:**
   - Microtasks in the Microtask Queue are processed next.
     - First, `console.log(1);` is executed.
     - Next, `console.log(3);` is executed and a new microtask `queueMicrotask(() => console.log(4));` is added to the Microtask Queue.
     - Then, `console.log(4);` is executed.

3. **Tasks Execution:**
   - Finally, tasks in the Task Queue are processed after the specified delay. So, `console.log(2);` is executed after approximately 10ms.

**Output Order:**
```
5
1
3
4
2
```


- Synchronous code is executed first.
- Microtasks (e.g., `Promise` callbacks, `queueMicrotask`) are executed after the current execution stack is empty but before any tasks from the Task Queue.
- Tasks (e.g., `setTimeout`, `setInterval`) are executed after all microtasks are processed and the current execution stack is empty.

Understanding this order is essential for debugging asynchronous JavaScript code and ensuring predictable behavior in your applications.

</div>
</details>


### prediction 0.5

What will get logged?


```js
new Promise ((resolve) => {
    console.log(1)
    resolve(2)
}).then(result => console.log(result))
console.log(3)
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
```
1
3
2
```
Explanation - .then part is put in micro tasks queue, not immediatley executed.

</div>
</details>

### prediction 1

Do you know what will be the output of this code?

```js
console.log(018 - 015);
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

This will actually result in `5` but this is pretty strange, isn't it?

Please note, that this example will only work in lax mode, and not in strict mode, and we will come to the explanation soon enough.

In earlier versions of JavaScript, a leading 0 on a number marked an octal number.

Octal numbers are numbers with a base of 8 (instead 10 like with decimal numbers).

This means that numbers from 0 to 7 are valid digits.

In our case, `018` can't actually be a octal number, can it?

Well it can't and the runtime knows this, which is why it treats `018` as `18` although the right side contains a perfectly valid octal number `015` which is `13` in decimal.

And the runtime will perform the calculation exactly like this, which results in:

```
18 - 13 -> 5
```

</div>
</details>


### prediction 2

Do you know what will be the output of this code?

```js
console.log(1 +  "2" + "2");
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The result is `"122"`, but why is that?

The plus operator is defined for numbers and for strings and the expression is evaluated from left to right.

The interesting thing about the algorithm behind it is, that it checks whether a string is present.

If we take a look at how the runtime handles the expression, it will start with the first part as follows:

```
1 + "2"
```

And as the right side contains a string, a concatenation will be made, which results in n intermediary result of

```
1 + "2" -> "12"
```

Only after that, the last part is evaluated as follows:

```
"12" + "2" -> "122"
```

</div>
</details>




### prediction 3

Do you know what will be the output of this code?

```js
console.log(false == '0');
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The answer is true.

In this situation, the abstract equality comparison algorithm is used, which is also called the type-coercing equality check.
What it does is converting the values as long as possible, until they match in type and can be compared strictly.

In this case, the following steps are performed:

```
// 1st step
false == '0'

// 2nd step
Number(false) == '0' -> 0 == '0'

// 3rd step
0 == '0' -> 0 == Number('0')

// 4th step
0 == 0 -> 0 === 0 -> true

```
</div>
</details>



### prediction 4

Do you know what will be the output of this code?

```js
const numbers = [33, 2, 8]; 
numbers.sort();
console.log(numbers[1])

```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

This returns `33`, but why is that?

JavaScript is a dynamically typed language, which means that all standard library functionality must, at some point, decide how to work for most, if not all, use-cases.

Always keep in mind that the following array is valid:

```
const array = ["1", true, 55, 1.421, "foo", {}];
```

Array.prototype.sort now needs to make a decision on how to handle such scenarios, and the solution is pretty straight-forward:

Convert all values to their string representation (because every value in JavaScript can always be converted to a string!), and then sort them in lexicographic order.

Which basically makes sort see the array as this:

```
const intermediate = ["33", "2", "8"];
```

And in lexicographic order, no matter how many characters a string has, comparison starts at position 0, and "3" comes before "8".

And in the end, the result is this:

```
["2", "33", "8"];
```

</div>
</details>




### prediction 5

Do you know what will be the output of this code?

```js
console.log(typeof typeof 1);
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

This actually returns "string".

This expression is evaluated from right to left.

The first sub-expression evaluated actually is typeof 1 which will return "number".

Only after that the next sub-expression is evaluated which now is typeof "number" which returns "string".

</div>
</details>



### prediction 6

Do you know what will be the output of this code?

```js
console.log(typeof NaN);
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

typeof NaN actually returns "number", but why is that?

You can actually thank the IEEE Standard for Floating-Point Arithmetic (IEEE 754), which is the specification most programming languages base their implementation of floating point numbers on.

Imagine it this way:

Let's use TypeScript here as an example to bring statical typing to JavaScript and imagine the following scenario:

const result: number = parseFloat(inputArgument);

The code is pretty straight-forward. We want a number, and we have to parse an input argument for that.

But what if parseFloat actually cannot parse a float?

What if we forgot to validate the input and are now passing 'Does this work?' to parseFloat?

And this is where NaN comes into the game.

NaN simply states: "This is not a number", but in a type-safe way, so you always get a result of type number .


</div>
</details>



### prediction 7

Do you know what will be the output of this code?

```js
const isTrue = true == [];
const isFalse = true == ![];

console.log(isTrue + isFalse);
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Let's break this up:
The comparison performed is the abstract comparison operation,
which uses type coercion under the hood, when necessary.

As the first parameter is a boolean, the following rule applies:
"If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y."
And in the next round, the next rule applies,
"If Type(y) is Boolean, return the result of the comparison x == ToNumber(y)."

Which then boils down to:
Number(true) == Number([])
=> 1 == 0

```
const isTrue = true == []; // => false
```

Here, two booleans are present.
The right side gets converted through the unary negation, and then negated.
An empty array is truthy, converting and negating it yields false.
true == false

```
const isFalse = true == ![]; // => false
```

This now evaluates to: false + false
which is coered to:
Number(false) + Number(false)
=> 0 + 0

```
console.log(isTrue + isFalse); // => prints 0
```

</div>
</details>



### prediction 8

Do you know what will be the output of this code?

```js
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The answer is "banana".

What actually happens here is the following:

The plus operator is defined for numbers and strings and as soon as a string is present on either the left or right side, a string concatenation is perfomed.

If we follow the execution path, this is what happens:

```
// 1st step 
'b' + 'a' -> 'ba' 
// 2nd step 
'ba' + + 'a' // wait a second!
```

There are two plus operators in this expression. But one of those is actually a prefix-operator, and not a classical plus.
What it does is converting the right-side argument to a number, but converting 'a' to a number will actually yield NaN!
Let's continue with following the execution path:

```
// 1st step 
'b' + 'a' -> 'ba' 
// 2nd step 
'ba' + + 'a' -> 'ba' + NaN -> 'baNaN'
// 3rd step 
'baNaN' + 'a' -> 'baNaNa'
// 4th step 
'baNaNa'.toLowerCase() -> 'banana'
```

</div>
</details>



### prediction 9

Do you know what will be the output of this code?

```js
let array = [1, 2, 3];
array[6] = 9;
console.log(array[5]);
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The answer is undefined.

This quiz starts with an array of length 3, containing 3 numbers.

By not using Array.prototype.push and then assigning a value to a position in the array, that is out of the bounds of the original array, the array is extended automatically by the runtime while also increasing the length property.

But this leads to the interesting behavior, that a lot of holes are created within the array.

After the expression array[6] = 9; the array looks as follows:

```
//  0  1  2     3           4          5      6     <- indices 
   [1, 2, 3, undefined, undefined, undefined, 9]

```

And this is why, when accessing array[5] undefined is returned.

</div>
</details>


### prediction 10

Do you know what will be the output of this code?

```js
console.log(String.raw`HelloTwitter\nworld`);
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

What String.raw actually does is taking a template literal, processing all substitutions (${variable}, e.g.), but ignoring well-known escape-sequences.

**The following will be printed above: HelloTwitter\nworld**

\n is a well-known escape-sequence, like \t is, e.g.

Those will simply be ignored and put into the resulting string, as they are.

Here an example of how String.raw works when you also include substitutions:

const varOne = "Hey";
const varTwo = "there";
const str = String.raw`${varOne}\t\n${varTwo}` // => "Hey\t\nthere"

</div>
</details>


### prediction 11

What will be output of that code?
```js
const firstname = fun();
let name = ‘vivek’
function fun(){
Return `my is ${name} malviya`
}
console.log(firstname);
```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

The output will be a `ReferenceError` because the function `fun` tries to access the variable `name` before it's declared. In JavaScript, variable declarations using `let` and `const` are not hoisted to the top of their enclosing block. Therefore, when `fun` is called, `name` is still in the temporal dead zone.

```js
var firstname = fun();
var name = ‘vivek’
function fun(){
return `my is ${name} malviya`
}
console.log(firstname); // => my is undefined malviya
```


1. **Function Hoisting**:
   - Function declarations are fully hoisted. This means the entire function is moved to the top of its scope, allowing the function to be called before its declaration in the code.
   
   ```js
   function fun() {
       return `my is ${name} malviya`;
   }
   ```

2. **Variable Hoisting**:
   - Variables declared with `let` and `const` are hoisted to the top of their block, but not initialized. This means they exist in a "temporal dead zone" from the start of the block until the declaration is encountered. Accessing them in this zone results in a `ReferenceError`.

   ```js
   let name = 'vivek';
   ```


</div>
</details>

### prediction 12

What will be the output of this program?

Input:
```js
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
```


<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Output:
```js
// 👉 0 1 2 3 4
// 👉 5 5 5 5 5
```
For the first loop using `let`, the output will be `0 1 2 3 4`, as `let` creates a new scope for each iteration. For the second loop using `var`, the output will be `5 5 5 5 5`, as `var` does not create a new scope for each iteration and the value of `i` is shared.

</div>
</details>





### prediction 13

What will be the output of this program?

Input:
```js
var num = 4;
function outer() {
 var num = 2;
 function inner() {
   num++;
   var num = 3;
   console.log("num", num);
}
inner(); }
outer();
function sayHi() {
 return (() => 0)();
}
```


<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Output:
```js
// 👉 num 3

```

### Code Analysis

1. **Global Scope**:
   - `var num = 4;` declares and initializes a global variable `num` with the value `4`.

2. **`outer` Function**:
   - Inside `outer`, a new local variable `num` is declared and initialized with the value `2`.
   - The `inner` function is defined within `outer`. It has its own scope.

3. **`inner` Function**:
   - When `inner` is called, the first statement is `num++`.
     - However, due to JavaScript's variable hoisting, the local variable `num` within `inner` is hoisted to the top of the function scope but remains uninitialized (i.e., `undefined`) until the point of its initialization (`var num = 3`).
     - Thus, the `num++` operation increments the `undefined` value, which results in `NaN` (Not a Number).
   - Next, `var num = 3;` initializes the local variable `num` within `inner` to `3`.
   - `console.log("num", num);` logs the value of this local `num`, which is `3`.

4. **Execution**:
   - `outer();` is called, which in turn calls `inner();`.
   - The `inner` function logs the value of its local `num` after it has been incremented and initialized to `3`.

### Additional Function: `sayHi`
   - This function `sayHi` is not called anywhere in the program, so its definition doesn't affect the output.

### Output:
   - The output of the program comes from the `console.log("num", num);` statement inside the `inner` function.
   - Despite the `num++` operation, due to hoisting and scoping rules in JavaScript, the output will be `3`.



</div>
</details>






### prediction 14

What will be the output of this program?

Input:
```js
const a = {};
const b = { key: 'b' }; 
const c = { key: 'c' }; 
a[b] = 123;
a[c] = 456;
console.log(a[c]);
```


<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

Output:
```js
// 👉 456
```
Object keys are automatically converted into strings.
We are trying to set an ***object as a key*** to object a, with the value of 123.
However, when we stringify an object, it becomes "[object Object]".
So what we are saying here, is that a["[object Object]"] = 123. Then,
we can try to do the same again.
c is another object that we are implicitly stringifying.
So then, a["[object Object]"] = 456. Then, we log a[b],
which is actually a["[object Object]"].
We just set that to 456, so it returns 456. 
</div>
</details>
