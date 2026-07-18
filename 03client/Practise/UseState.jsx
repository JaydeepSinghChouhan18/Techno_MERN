import React, { useState } from "react";

const UseState = () => {
  const [value, setValue] = useState(0);
  const initiaValue = 0; 
  
  return (
    <React.Fragment>
      <p>Counter : {value} </p>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setValue(initiaValue);
        }}
      >
        Reset
      </button>
    </React.Fragment>
  );
};

export default UseState;
