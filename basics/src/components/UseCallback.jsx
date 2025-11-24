import React, { useCallback, useState } from 'react'

const UseCallback = () => {
  
  const [count , setCount] = useState(0)

  const increment = useCallback(()=>{
    setCount(prev => prev +1)
  },[])
  
  return (
    <>
      <h1>the Count is : {count}</h1>
      <button onClick={increment} >Increment</button>
    </>
  )
}

export default UseCallback

// useCallback is used to to memoize a whole function instead the value return by the function and it is used to prevent re-creating function in every re-render