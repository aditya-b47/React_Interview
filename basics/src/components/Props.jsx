import React from 'react'

const Props = ({name , age , city}) => {
  return (
    <>
      <h1>My Name is = {name} </h1>
      <h2>My age is = {age} </h2>
      <h3>My city is = {city} </h3>
    </>
  )
}



export default Props

// props are used to transfer data between components and it only contains read only attributes .
// props is an inbuilt object 
// 