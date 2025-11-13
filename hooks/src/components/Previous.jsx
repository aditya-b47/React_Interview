import React, { useState } from 'react'
import usePrevious from '../Hooks/usePrevious'

const Previous = () => {
  const [count , setCount ] = useState(false)
  const previous = usePrevious(count)

  return(
    <>
      <h1>Count : {count}</h1>
      <h2>Previous : {previous}</h2>

      <button onClick={()=>setCount(count+1)}>Increase</button>
    
    </>
  )
}

export default Previous