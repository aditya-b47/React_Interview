import React from 'react'
import Props from './components/props'
import State from './components/State'
import Fetch from './components/Fetch'
import GlobalContextApi from './context/GlobalContextApi'
import User from './components/user'
import UseMemo from './components/UseMemo'
// import Logger from './HOC/Logger'
// import Hello from './HOC/Hello'

// const HelloWithLogger = Logger(Hello)


const App = () => {
  
  return (
    <>
      {/* <Props name = 'Aditya' age = '23' city = 'Delhi' />
      <Props name = 'Arunesh' age = '24' city = 'Banglore' />
      <Props name = 'Ninad' age = '25' city = 'Hyderabad' /> */}
      {/* <State/> */}
      {/* <Fetch/> */}
      {/* <GlobalContextApi>
        <User/>
      </GlobalContextApi> */}
      {/* <HelloWithLogger name = "Aditya" /> */}
      <UseMemo /> 
    </>
  )
}

export default App
