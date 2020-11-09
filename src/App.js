import React, { useState } from "react";
import "./App.css";
import Bucket from "./components/Bucket";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      {/* <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        +
      </button> */}
      <Bucket />
    </div>
  );
}

export default App;
