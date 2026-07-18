import React from "react";

const JSXExpression = () => {
  const sumTwoDigits = (a, b) => {
    return a + b;
  };

  const name = "Jaydeep";

  let students = {
    Name: "jaydeep",
    Id: 101,
    Roll_no: 2001,
    Course: "BTech",
  };

  let array = [1, 2, 3, 4, 5];
  return (
    <div>
      {sumTwoDigits(10, 20)}
      <br />
      {Math.random()}
      {name}
      <br />
      {"Jaydeep"}
      <br />

      {students.Roll_no} 

      <br/>  
       {array[1]} 
       
    </div> 

  );
};

export default JSXExpression;
