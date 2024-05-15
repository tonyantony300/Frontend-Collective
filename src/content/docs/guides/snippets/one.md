---
title: Level 1
description: Easy code snippets
---

### String coercion
```js
var foo = 10 + '20';
```
What is the value of foo?

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

```js
console.log(0.1 + 0.2 == 0.3);
```
What will be the output of the code above?
<details>
<summary> Answer  </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff ; font-size: 14px; font-weight: 500;">
<p> False 

Explanation: Floating-point numbers (like 0.1 and 0.2) cannot always be represented with perfect accuracy in a binary system. When 0.1 and 0.2 are added together in JavaScript, the result is not exactly 0.3, but slightly more than that (approximately 0.30000000000000004). Therefore, when this sum is compared to 0.3 using the == or === operator, the result is false because the numbers are not exactly equal due to this small precision error.</p>
</div>
</details>

### Currying

```js
add(2, 5); // 7
add(2)(5); // 7
```
How would you make this work? 

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
```js
"i'm a lasagna hog".split("").reverse().join("");
```
What value is returned from the following statement?

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p> 'goh angasal a m\'i'</p>
Explanation: 

This line of JavaScript code takes the string "i'm a lasagna hog", splits it into an array of characters, reverses that array, and then joins the characters back into a string. The `split("")` method splits the string into an array of individual characters. `reverse()` reverses the order of the array's elements. Finally, `join("")` merges the elements of the array back into a single string, resulting in the reversed version of the original string.
</div>
</details>

### Logical Assignment
```js
(window.foo || (window.foo = "bar"));
```
What is the value of window.foo?

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p> "bar"</p>
Explanation: 

This expression uses the logical OR operator to assign a value to `window.foo` if it does not already have one. If `window.foo` is undefined, falsy, or not declared, it will be set to "bar". After this operation, `window.foo` will definitely contain "bar".
</div>
</details>

### Scope and Closures
```js
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```
What is the outcome of the two alerts above?

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p> The first alert shows "Hello World", the second results in an error.</p>
Explanation: 

The first function is an immediately invoked function expression (IIFE) that has its own scope. Inside this function, `bar` is declared and concatenated with `foo` which is accessible due to its higher (global) scope, resulting in the alert "Hello World". The second `alert(foo + bar)` tries to access `bar`, which is not defined in the global scope (it's only defined within the IIFE), hence it will throw a reference error saying that `bar` is not defined.
</div>
</details>

### Array Length
```js
var foo = [];
foo.push(1);
foo.push(2);
```
What is the value of foo.length?

<details>
<summary>Answer</summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">
<p> 2 </p>
Explanation: 

The variable `foo` is initialized as an empty array. The `push` method is used to add elements to the array. `foo.push(1)` adds the number 1 to the array, and `foo.push(2)` adds the number 2. After these operations, the array `foo` contains two elements, thus `foo.length` returns 2.
</div>
</details>