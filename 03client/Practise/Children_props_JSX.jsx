import React from 'react'

const Children_props_JSX = (props) => { 
    console.log(props.children);
  return (
    <div>
      <p>"Age is :" { props.children[2]}</p>
    </div>
  )
}   

export default Children_props_JSX
