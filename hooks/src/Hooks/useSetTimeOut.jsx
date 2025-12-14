// Create a Hooke to easily use setTimout(callback,delay)
// 1. reset the timer when the delay changes
// 2. Do not reset the timer when the delay changes

import React, { useEffect, useRef } from 'react'

const useSetTimeOut = (callback,delay) => {

  const callbackRef = useRef(callback)
  callbackRef.current = callback  // referring to updated callback

  useEffect(()=>{

    const timerOut = setTimeout(callbackRef.current,delay);
    return(()=>{
      clearTimeout(timerOut);
    })

  },[delay])

}

export default useSetTimeOut

// How It Works:
// • useRef for callback: Stores the latest callback without triggering re-renders
// • Timer resets: When you change the delay, the timer restarts
// • Cleanup: Old timers are cleared to prevent memory leaks
// • Fresh values: Callback always has access to current state