import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Parent = () => {
  // const recievedValues = useContext(UserContext); 

//   const value = useContext(UserContext);
 
const {array ,username} = useContext(UserContext); 

  return (
    <div> 

      {/* <h2>Username: {value.username} </h2>
      <h2>Array: {value.array} </h2> */}  
      
      <h2> Username: {username}</h2>
      <h2> Array: {array}</h2>

    </div>
  );
};

export default Parent;
