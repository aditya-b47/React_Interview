import React, { useEffect, useRef } from 'react'

const usePrevious = (value) => {
  const ref = useRef(value);// if i do not write value then it will show undefined in UI
  useEffect(()=>{
    ref.current = value
  },[value])

  return ref.current
}

export default usePrevious