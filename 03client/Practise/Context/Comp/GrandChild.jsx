import React, { useState ,useRef} from "react";
import { UserContext } from "../UserContext";
import { useContext } from "react";

const GrandChild = () => {
    const[name ,setName] = useState()
  const { array, username } = useContext(UserContext); 

  const inputRef =useRef();
  return (
    <div>
      <h1>Username : {username}</h1> 
      {/* <input type="text"  value={name} onChange={(e) => setName(e.target.value)} />  */}
      <input type="text"    ref={InputRef} onChange={(e) => {(inputRef.current.value) }}/>
      
        <p>Name: {name}</p> 
    </div>
  );
};

export default GrandChild;
