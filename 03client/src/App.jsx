import React from "react";
import { useState } from "react";
// import "./App.css";

import Props from "../Practise/Props";
import Children_props_JSX from "../Practise/Children_props_JSX";
import Events from "../Practise/Events";
import StateLifting from "../Practise/StateLifting";
import UseState from "../Practise/UseState";
import ConditionalRendering from "../Practise/ConditionalRendering/ConditionalRendering";
import Key from "../Practise/Key/KEy";
import List from "../Practise/List";

// import { UserContext } from "../Practise/Context/UserContext";
import Parent from "../Practise/Context/Comp/Parent";
import GrandChild from "../Practise/Context/Comp/GrandChild";
import Form from "../Practise/Form/Form";
import App3 from "../Practise/Router/App3";

function App() {
  // const [value, setValue] = useState("");
  // const getData = (data) => {
  //   console.log(data);
  //   setValue(data);
  // };
  const array = [7, 7, 7, 3];
  const username = "Jaydeep";

  // console.log(array);
  return (
    <React.Fragment>

      {/* <StateLifting liftClick={getData} /> */}
      {/* <UseState/> */}
      {/* <ConditionalRendering/> */}
      {/* <Key/>   */}
      {/* <List /> */} 
      {/* <Form/> */}
      <App3/> 

    </React.Fragment>

    // <UserContext.Provider value={{ array, username }}>
    //   <Parent />
    //   <GrandChild />
    // </UserContext.Provider>
  );
}

export default App;

// // {/* <Children_props_JSX>{fname} {studentAge} {'this is string'} </Children_props_JSX> */}
// /* <Events />  */
// import React from "react";

// import Student from "../Practise/StateLifting";
// function Teacher() {
//   const receiveAssignment = (assignment) => {
//     console.log("Received:", assignment);
//   };

//   return <Student submit={receiveAssignment} />;
// }

// export default Teacher;
