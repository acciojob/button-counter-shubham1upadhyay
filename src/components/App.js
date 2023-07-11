
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const[val, setVal] = useState(0);

  function counter(){
    return setVal(val+1);
  }
  return (
    <div>
        <p>Button clicked <span>{val}</span> times</p>
        <button onClick={counter}></button>
    </div>
  )
}

export default App
