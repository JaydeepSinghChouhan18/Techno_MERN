import React, { useState } from "react"; 
import UseState from "../UseState"; 
import Student from "../StateLifting";
const ConditionalRendering = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsLogin(true);
        }}
      >
        Login
      </button> 

      <button
        onClick={() => {
          setIsLogin(false);
        }}
      >
        Skip
      </button>

      {isLogin && <UseState /> } 
      {/* { isLogin ? <UseState/>:<Student/>} */}

    </>
  );
};

export default ConditionalRendering;
