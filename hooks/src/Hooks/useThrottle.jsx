// import
//function - (lastTime)
//useCallback((...args)=>{
// callback(...args)
//  },[])
// logic (Date.now()-lastime >= delay)

import React, { useCallback, useRef } from "react";

const useThrottle = (callback, delay) => {  
  const lastTime = useRef(Date.now());
  return useCallback(
    (...args) => {
      if (Date.now() - lastTime.current >= delay) {
        callback(...args);
        lastTime.current = Date.now()
      }
    },
    [callback, delay]
  );
};

export default useThrottle;
