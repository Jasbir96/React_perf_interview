## Different stages in LifeCycle of a react component
* creation -> mount 
* updation -> updation
* Deletion -> unmount

## How react render  your application on dom [mounting]

* **JSX transpilation** : JSX is converted into JS code and it is done by your `babel`.

`Input`:
```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

`Ouput`
```js
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function App() {
  return /*#__PURE__*/_jsx("div", {
    className: "App",
    children: /*#__PURE__*/_jsxs("header", {
      className: "App-header",
      children: [/*#__PURE__*/_jsx("img", {
        src: logo,
        className: "App-logo",
        alt: "logo"
      }), /*#__PURE__*/_jsxs("p", {
        children: ["Edit ", /*#__PURE__*/_jsx("code", {
          children: "src/App.js"
        }), " and save to reload."]
      }), /*#__PURE__*/_jsx("a", {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Learn React"
      })]
    })
  });
}
```
*  **VDOM dom creation** : It a in memory repersentation of dom is created, `react.createElement` is used to create this virtually

```js
const vdom ={
    type: 'div',

    props: {
        class: "container",
        children: [
            {
                type: 'h1', 
                props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: (props) => ({
                                type: "button", props:
                                    { children: props.counter + "Clicks" }
                            }),
                            props: { counter: 1 }
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}
``` 
* **Component mounting**: if the React elements represent components, React instantiates the component classes or functional components. This initializes the component's state, props, and other internal data, preparing them for rendering

```js
const vdom ={
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1', props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: "button",
                            children : "1 Clicks"
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}
```
*  **Render step occurs**: React takes the created React elements and renders them into the actual browser DOM. It traverses the virtual element tree and generates corresponding DOM nodes, creating the visual representation of the UI on the webpage.

*  **DOM Update**: React updates the browser DOM to reflect the rendered  components. It adds the generated DOM nodes to the appropriate places in the document structure, creating the initial UI layout

* **Event Handling**: React sets up event listeners on the relevant DOM elements to handle user interactions, such as clicks or input changes. This ensures that the specified event handlers are executed when triggered, allowing for interactivity within the UI.

## Take Aways 
* JSX was developed just as a syntax sugar
* VDOM -> a js object that represent the UI

## How react effciently update the UI -> 
* **State Change**:Imagine a button in your React application. When a user clicks it, the component's state changes, triggering a cascade of updates. This change could be anything from updating a counter to toggling a component's visibility.

* **New Virtual DOM** : React doesn't directly manipulate the real DOM in the browser. Instead, it creates a new VDOM. This virtual DOM is a lightweight blueprint reflecting the current state of your UI, including all the changes triggered by the state update.

* **Diffing**: React employs a clever `diffing algorithm`. This algorithm compares the old virtual DOM (before the state change) with the new virtual DOM (after the change). It meticulously analyzes each element, attribute, and text node to `identify the minimal set of changes` needed to bring the real DOM in sync with the updated state

* ***Batching**: React doesn't perform DOM updates one by one. Instead, it batches multiple changes together. This is like grouping edits into a single transaction before applying them. Batching avoids unnecessary DOM reflows and repainting, which can be expensive and slow down the browser.

* **Reconciliation**:Once the batch is ready, React performs the actual reconciliation. It takes the minimal changes identified in the diffing step and applies them to the real DOM in the browser. This involves updating text content, adding or removing elements, and modifying attributes, but only for the affected parts

### TakeAway
####  Bottle Neck : UI updates are very costly 
* **Advantage of VDOM** :  we can have a rough version of actual dom that can be reconstructed quickly and do quick changes in it as with the help of diffing algorithm 
* **Advantage of Diffing Algo**:  we can identfiy minimal set of changes that are required in actual DOM.
* **Batching**: reduce the ferquency of DOM update

Architecture : fiber architecture



## peformance features expose to dev 

* React provide different :  `caching mechanisms`
  * `component level caching` -> `React.memo` you can preventre-render of a componnet if the props are not changed.
  * `cache some solution `-> `useMemo` : you can prevent cacluclation / execution of a function if the dependency has not changes

  * `cache a reference  to a function`-> `usecallback` to cache  a function that can be used to prevent ot to be recreated on every re-render

  ## Disadvantage of over-using it : you will be using extra memory to store these cached thing and extra processing willl be required