// import React from "react";

// const StateLifting = ({liftClick}) => {
// //   console.log(value);

//   const name = "Jaydeep Singh Chauhan , Thikana Karjiya(Mewad)";

//   return (
//     <div>
//       Lifting State Up
//       <button onClick={() => liftClick(name) }>Send Data</button>
//     </div>
//   );
// };

// export default StateLifting ;

import React from "react";
function Student({ submit }) {
  const assignment = "React Project";

  return <button onClick={() => submit(assignment)}>Submit</button>;
} 

export default Student;   

 
