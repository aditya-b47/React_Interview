import React, { useReducer } from 'react'

const Reducer = () => {
  const reducerFunc = (state,action)=>{
    switch (action.type) {
      case "increment":
        return {count : state.count+1}
      case "decrement":
        return {count : state.count-1}
      case "reset" :
        return{count : state.count = 0}
    }
  }
  
  const initialState = {count : 0}
  const [state , dispatch] = useReducer(reducerFunc , initialState)
  
  return (
   <>
   <h1>Count = {state.count}</h1>
   <button onClick={()=>dispatch({type:"increment"})}>+</button>
   <br />
   <button onClick={()=>dispatch({type:"decrement"})}>-</button>
   <br />
   <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
   </>
  )
}

export default Reducer