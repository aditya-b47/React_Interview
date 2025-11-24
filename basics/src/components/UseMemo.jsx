import React, { useMemo, useState } from 'react'

const UseMemo = () => {

  const [count , setCount] = useState(0)
  const doubleCount = useMemo(()=>{
    return count * 2;
    
  },[count])

  const increment =()=>{
    setCount(count+1);
  }
  return (
    <>
    <h1>Count is : {count}</h1>
    <h2>Double Count is : {doubleCount}</h2>
    <button onClick={increment}>+</button>
    </>
  )
}

export default UseMemo

// useMemo is a react hook which is used to memoize the result of a computation so it does't get recalculated on every render only change when its dependencies changes.