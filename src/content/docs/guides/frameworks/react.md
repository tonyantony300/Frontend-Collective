---
title: React
description: This should be comprehensive
---


[Every React concept Explained in 12 Mints](https://www.youtube.com/watch?v=wIyHSOugGGw)


[Commonly asked questions to evaluate React expertise](https://iq.js.org/react)

### Can you explain the concept of state and props in React.js and how they differ from each other?

State is data that a component can change and use to re-render itself. Props are data passed from a parent component to a child component that the child can't change. State is managed inside the component, while props come from outside. State is for internal data, and props are for external data.


### Understanding State Updates and useEffect Behavior


```js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [state, setState] = useState(0);

  console.log('Render:', state);

  useEffect(() => {
    setState((prevState) => prevState + 1);
  }, []);

  useEffect(() => {
    console.log('Inside Effect:', state);
    setTimeout(() => {
      console.log('Timeout:', state);
    }, 100);
  }, []);

  return null;
}

ReactDOM.render(<App />, document.getElementById('root'));

```

<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">

```plaintext
Render: 0
Inside Effect: 0
Render: 1
Timeout: 0
```



</div>
</details>

---


#####  How can you modify the code to ensure the setTimeout callback always logs the updated state value?


```javascript
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [state, setState] = useState(0);
  const stateRef = useRef(state);

  // Update the ref whenever state changes
  useEffect(() => {
    stateRef.current = state;
  }, [state]);


  useEffect(() => {
    console.log('Inside Effect:', state);
    setTimeout(() => {
      console.log('Timeout:', stateRef.current); // Use the latest value from the ref
    }, 100);
  }, []);

useEffect(() => {
    setState((prevState) => prevState + 1);
  }, []);

  return null;
}

ReactDOM.render(<App />, document.getElementById('root'));

```


<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">


```plaintext
Inside Effect 0
TimeOut: 1
```



</div>
</details>

---


```plaintext

* Can you explain a novice the difference between state and props?
* 
* When will you use state, context, and external state manager?
* 
* How do you decide when to split a component into subcomponents?
* 
* How do you handle API and what techniques you'll use when you've call APIs upfront vs when it's called based on user action?
* 
* What goes in hooks for you? (Intentional open ended question)
* 
* Why props is needed to be immutable?
* 
* What is the difference between controlled and uncontrolled component?
* 
* How can you implement Error Boundary in function component?
* 
* Familiarity with optimizing inputs (especially, inputs that transfer data to child components - how to reduce child re-renders).
* 
* Understanding when a component re-renders, and what are the ways to reduce re-rendering.
* 
* How to avoid memory leaks when working with asynchronous code (especially timeouts).
* 
* How useEffect works - in-depth, when it triggers, how it performs the equality check, which dependencies can be omitted, and why (this is often related to in-depth knowledge of react hooks such as useState).
* 
* Which fields (including hooks, and functions) change their memory reference once a component re-renders, and how to keep the initial reference using React core mechanisms.
* 
* Understanding throttling and debouncing. How could you implement debouncing using React hooks, and a callback approach? Differences between these two approaches? How could you utilize one of them to optimize code?

```