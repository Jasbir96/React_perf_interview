import logo from './logo.svg';
import { useState } from "react";

import './App.css';
function App() {
  const [count, setCOunt] = useState(0);
  const [value, setvalue] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setvalue("hello");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleClick}>
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

export default App;
