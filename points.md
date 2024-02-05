1. can a react component directly update a redux state-> 
2.  is the flow of data in redux -> unidirectional or bi-directional -> unidirectional


## Principle of Redux
* State is read only
* state is updated only through a pure reducer function 
* single source of truth  -> you can only have one store


## Redux toolkit 
1. Reducers -> are `pure function` that update the state (Redux says)
    Redux toolkit uses a lib -> `immerjs` that helps to do all the update immutability
2. Redux toolkit -> also provide the support of `redux-thunk` (enable async state changes)
 
