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
 

 ## Context vs Redux
 1. bundle size 
 * context -> part of react (It does not increase the bundle size) -> yes
 * Redux -> 3rd party library (bundle size increases)

2. Devtools
* Redux -> redux dev tool  -> yes
* context -> you don't get any dev tools  

3. `Peformance`
* Redux -> redux only update the components that consume it's useSelector and when it's slice is updated  -> yes 
* context ->  if the value of the context variable changes then the whole sub tree which provider componetnt encloses get's re-rendered (it is bad as a central store)

## Production Application
* context -> auth, themes, localization(high read and very low update)
* Redux -> central state managmenet (it works everywhere)
