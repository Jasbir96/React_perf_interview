import logo from './logo.svg';
import { useState } from "react";

import './App.css';
import State_exp from './use_state_reducer/State_exp';
import Reducer_counter from './use_state_reducer/Reducer_counter';
function App() {

  return (
    <>
      <State_exp>
      </State_exp>
      <Reducer_counter></Reducer_counter>
    </>
  )
}

export default App;
