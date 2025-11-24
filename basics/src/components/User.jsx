import React from 'react'
import { useContext } from 'react'
import {GlobalContext} from '../context/GlobalContext'


const User = () => {
  const res = useContext(GlobalContext)
  
  return (
    <>
    <h1>This is User Data</h1>
      {res.money}
      <br />
      {res.Adhar}
    </>
  )
}

export default User