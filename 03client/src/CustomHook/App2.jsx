import React from 'react'
import CustomHook from './CustomHook' 

const App2 = () => {
    const {data ,handleIncrement} = useCustomHooks() ; 
  return ( 
    <>
       <h1>Custom Hook : { data} </h1> 
       <button onClick={() => { handleIncrement()}}> + </button>
    </>
  )
}

export default App2
