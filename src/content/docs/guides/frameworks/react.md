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


###  How can you modify the code to ensure the setTimeout callback always logs the updated state value?


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


### Predict output 3


```javascript
import * as React from "react";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { screen, fireEvent } from "@testing-library/dom";

function App() {
  const [state, setState] = useState(0)
  console.log(1)
  
  useEffect(() => {
    console.log(2)
  }, [state])

  Promise.resolve().then(() => console.log(3))

  setTimeout(() => console.log(4), 0)

  const onClick = () => {
    console.log(5)
    setState(num => num + 1)
    console.log(6)
  }
  return <div>
    <button onClick={onClick}>click me</button>
  </div>
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)

setTimeout(() => fireEvent.click(screen.getByText('click me')), 100)

```


<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">


```plaintext
1
2
3
4
5
6
1
2
3
4
```

</div>
</details>

---




### Predict output 4


```javascript
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [show, setShow] = useState(true);
  return <div>{show && <Child unmount={() => setShow(false)} />}</div>;
}

function Child({ unmount }) {
  const isMounted = useIsMounted();
  useEffect(() => {
    console.log(isMounted);
    Promise.resolve(true).then(() => {
      console.log(isMounted);
    });
    unmount();
  }, []);

  return null;
}

function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  return isMounted.current;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

```


<details>
<summary> Answer </summary>
<div style="background-color: rgba(100, 108, 255, 0.16); padding: 10px; margin-bottom: 10px; color: #fff; font-size: 14px; font-weight: 500;">


```plaintext
false
false
```

Effects run after rendering


Synchronous operations:

The useEffect callback runs
First console.log executes (synchronously)
Promise.resolve is created and its .then callback is queued to the microtask queue
unmount() (setShow(false)) is called synchronously
React processes this state update immediately in the same synchronous execution
Component unmounts, running cleanup effects


Microtask queue:

After the synchronous code finishes, the microtask (.then callback) executes
By this time, the component is already unmounted

The key insight is that even though useEffect itself is asynchronous, once React starts running effects, it follows a specific order:

Parent effects before child effects (if effects in custom hooks)
All effect cleanups run before all new effects
Effects run in the order they were defined


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