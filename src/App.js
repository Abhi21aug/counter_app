import React from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = React.useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <div className="mainDiv">
      <div className="secondDiv">
        <h1>Counter App</h1>
        <button onClick={decrement}>-</button>
        <span className="spanStyle">{counter}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default App;
