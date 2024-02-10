import logo from './logo.svg';
import './App.css';
// import UseCallbackConcept from "./memoization/UseCallbackConcept"
import Counter from './testing/Counter';
import FunctionalCounter from "./class_functional/FunctionalCounter";
import ClassCounter from "./class_functional/ClassCounter";
import DataListItems from "./hoc/components/DataListItems";
function App() {
  return (
    <div className="App">
      <header className="App-header">



        Learn React

        <div className='memoization'>

          {/* <UseCallbackConcept></UseCallbackConcept> */}
        </div>
        <div className='testing'>

          {/* <Counter></Counter> */}
        </div>

        <div className='class_func'>
          {/* <FunctionalCounter></FunctionalCounter> */}
          {/* <ClassCounter></ClassCounter> */}
        </div>
        <DataListItems></DataListItems>
      </header>


    </div>
  );
}

export default App;

