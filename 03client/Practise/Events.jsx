import React from "react";

const Events = () => {
  const display = (Parameter) => {
    console.log(Parameter);
  };

  return (
    <div>
      <button onClick={() => display("something something")}>Click</button>
    </div>
  );
}; 

export default Events;
