import React from 'react'
import axios from "axios" ; 

const ApiFetching = () => { 

    const getData = () => { 
            const response = await axios.get("https://jsonplaceholder.typicode.com/users"); 
             console.log(response);
    }
  return (
    <div>
      
    </div>
  )
}

export default ApiFetching
