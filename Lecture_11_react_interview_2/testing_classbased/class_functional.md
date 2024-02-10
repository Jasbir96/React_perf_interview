## class based componet
* initial state is defined inside constructor
*  you this is only available  inside the life cycle methods
* this.setState to update the the state 

## Stages of a react  component
* mounting : creation
* updation 
* unmount : deletion 

### Life cycle methods -> class based component
* `constructor` :use to intialize your state  

* `render` : render the output
* `componentdidMount` :  runs only once after first render
    *   Class Component :`componentDidMount()`
    *   functional `useEffect(cb, [])`

* `componentdidupdate`: run after the update
    * functional componet: `useEffect(cb, [dep1,dep2])`
    * class based component`componentDidMount`+ `componentDidUpdate`

* `componenWillUnmount`: run after deletion 
    * Class Component : componenetWillUnmount
    * functional component : cleanup function of useEffect


### How functional are difff from classbased components
* Lifecycle methods -> are only accessible in classbased components

* class based compoent had a lot of overeahed of this and more boiler plate code that lead to heavier bundle size 
