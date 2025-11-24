import React, { useState } from "react";

const State = () => {
 
  const [state , setState] = useState(0)
  const incre = () =>{
      setState(state + 1);
  }
  return(
    <>
      <h1>count : {state}</h1>
      <button onClick={incre}> + </button>
    </>
  )

}

export default State

// State is an object which is used to store data at component level , unlike props state are mutable means its value can be changed,
// whenever the state changes component gets re-render.