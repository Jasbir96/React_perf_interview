import logo from './logo.svg';
import { useState } from "react";

import './App.css';
import State_exp from './use_state_reducer/State_exp';
import Reducer_counter from './use_state_reducer/Reducer_counter';
import MemoApp from "./react_perf/MemoApp";
import CaclcMemo from './react_perf/CaclcMemo';
function App() {

  return (
    <>
      {/* <div className="state_reducer">

        <State_exp>
        </State_exp>
        <Reducer_counter></Reducer_counter>
      </div> */}
      <div className='perf'>
        {/* <MemoApp></MemoApp> */}
        <CaclcMemo></CaclcMemo>
      </div>
    </>
  )
}

export default App;
