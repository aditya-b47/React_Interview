import React from 'react'
import useToggle from '../Hooks/useToggle'

const Toggle = () => {
  const [isOpen , toggleOpen] = useToggle()
  return <button onClick={toggleOpen} className='text-2xl bg-amber-400'>{isOpen ? 'close' : "Open"}</button>
}

export default Toggle