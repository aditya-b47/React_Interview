import React from "react";

const Logger = (WrappedComponent) =>{
  return(props)=>{
    return <WrappedComponent {...props}/>
  }
}

export default Logger