import React, { useRef } from 'react'

const UncontrolledForms = () => {
  
  let inputRef = useRef()
  let passwordRef = useRef()
  let HandleSubmit = () =>{
    e.preventDefault()
    let name = inputRef.current.value
    let pass = passwordRef.current.value
  }
  
  return (
    <>
      <form >
        <div>
          <input type="text " ref={inputRef} />
        </div>
        <div>
          <input type="text" ref={passwordRef} />
        </div>
        <button>Submit</button>
      </form>    
    </>
  )
}

export default UncontrolledForms