---
title: Chapter 3
description: This should be comprehensive
---



### Predict

```js
function bar() {
  return foo;
  foo = 10;
  function foo() {}
  var foo = "11";
}
alert(typeof bar());
```

After hoisting, the function looks like this:

function bar() {
  // Hoisting:
  function foo() {}  // Function declaration hoisted first
  var foo;           // Variable declaration hoisted after the function (no initialization)

  // Actual execution starts here:
  return foo;   // `foo` is still the hoisted function
  foo = 10;     // This line is never reached due to `return`
  foo = "11";   // Dead code (never executed)
}

---

### Why is `foo` a Function at `return foo`?
1. **Function Declaration Hoisting**:
   - `function foo()` is hoisted **above the `return` statement** and initializes `foo` as a function.

2. **`var foo` Declaration**:
   - The `var foo` declaration is hoisted **after** the function, but it doesn't overwrite the function. At this point, `foo` still refers to the function.

3. **`return foo` Executes Before Any Assignments**:
   - The `return foo` statement is executed **before** any reassignment like `foo = 10` or `foo = "11"`.  
   - Thus, `foo` still refers to the hoisted function.

4. **Dead Code**:
   - Lines after the `return foo` are **not executed** because `return` ends the function execution.

---



### Predict 2
```js
for (var i = 0; i < 4; i++) { 
  setTimeout(() => { 
    console.log(i); 
  }, i * 1000); 
} 
```
Outputs 

4
4
4
4

why ? 

This is a classic JavaScript closure and scope issue. Let me explain why you're seeing four "4"s instead of 0, 1, 2, 3:

The issue occurs because `var` has function scope, and the value of `i` is shared across all the timeouts. By the time the callbacks actually execute, the loop has already completed and `i` has reached 4. All four callbacks then reference the same `i`, which is now 4.

Here are three ways to fix this:

1. Using `let` instead of `var` (recommended modern solution):
```javascript
for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
```

2. Using an IIFE (Immediately Invoked Function Expression) to create a new scope:
```javascript
for (var i = 0; i < 4; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

3. Passing the value as a parameter to setTimeout:
```javascript
for (var i = 0; i < 4; i++) {
  setTimeout(console.log, i * 1000, i);
}
```

The key difference is that `let` creates a new binding for each loop iteration, while `var` creates a single binding for the entire function scope. When using `let`, each callback function gets its own copy of `i`, preserved from the iteration in which it was created.


## DOM related Javascript questions

- Describe event bubbling.
- Describe event capturing.
- What is the difference between an “attribute” and a “property”?
- Explain the same-origin policy with regards to JavaScript.
- What is the difference between event.target and event.currentTarget?
- What is the difference between event.preventDefault() and event.stopPropagation()?
- What is the DOM?
- How do you select elements with Vanilla JavaScript?
- Explain event delegation in JavaScript.
- what is the purpose of the addEventListener method?
- How do you create and remove elements in the DOM?
- Explain the concept of event propagation.
- How can you prevent the default behaviour of an event?
- What is the purpose of the data- attribute in HTML?
- Describe the difference between innerHTML and textContent.
- How do you handle asynchronous code in JavaScript?


## Micelleneous


- What language constructions do you use for iterating over object properties and array items?
- What are the pros and cons of extending built-in JavaScript objects?
- What is the difference between == and ===?
- Why is it called a Ternary operator, what does the word “Ternary” indicate?
- What is strict mode? What are some of the advantages/disadvantages of using it?
- What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
- What tools and techniques do you use debugging JavaScript code?
- Explain the difference between mutable and immutable objects.
    - What is an example of an immutable object in JavaScript?
    - What are the pros and cons of immutability?
    - How can you achieve immutability in your own code?
- Explain the difference between synchronous and asynchronous functions.
- What is event loop?
    - What is the difference between call stack and task queue?
- What are the differences between variables created using let, var or const?
    - Can you change a property of an object defined via const? How you can change this behavior?
- What are the differences between ES6 class and ES5 function constructors?
- Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?
- What advantage is there for using the arrow syntax for a method in a constructor?
- What is the definition of a higher-order function?
- Can you give an example for destructuring an object or an array?
- Can you give an example of generating a string with ES6 Template Literals?
- Can you give an example of a curry function and why this syntax offers an advantage?
- What are the benefits of using spread syntax and how is it different from rest syntax?
- How can you share code between files?
- Why you might want to create static class members?
- What is the difference between while and do-while loops in JavaScript?
- What is a promise? Where and how would you use promise?
- Discuss how you might use Object Oriented Programming principles when coding with JavaScript.


## TOP - 30 Indian  Trivia Questions 

### 1-10: Basics of JavaScript
1. What is JavaScript?
2. Explain the difference between let, const, and var.
3. How does hoisting work in JavaScript?
4. Describe the concept of closures.
5. Explain the event loop in JavaScript.
6. What is the difference between == and ===?
7. How do you check the type of a variable in JavaScript?
8. What is the use of the this keyword in JavaScript?
9. Explain the difference between function declaration and function expression.
10. How does the setTimeout function work?
### 11-20: Functions and Scope
11. What is a callback function?
12. Explain the concept of a pure function.
13. Describe the differences between function.call, function.apply, and function.bind.
14. What is the purpose of the arguments object in a funct
15. How do you create a closure in JavaScript?
16. What is the use of the bind method?
17. What is the difference between a shallow copy and a deep сору?
18. How does the call stack work in JavaScript?
19. Explain the concept of function currying.
20. How can you avoid callback hell in JavaScript?
### 21-30: Objects and Prototypes
21. What is prototypal inheritance?
22. How do you create an object in JavaScript?
23. What is the purpose of the prototype property in Javas
24. Explain the difference between Object.create and the constructor pattern.25. How do you add a property to an object in JavaScript?
26. What is the hasOwnProperty method used for?
27. How can you prevent modification of object properties in JavaScript?
28. Describe the use of the new keyword.
29. Explain the concept of Object Destructuring in JavaScript.
30. What is the difference between null and undefined?