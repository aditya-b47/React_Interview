import React from 'react'
import useFetch from '../Hooks/useFetch'

const Fetch = () => {

 let {data , load , err} = useFetch('https://dummyjson.com/products')


  return (<>
    {load ? (<div>Loading...</div>) : (<div>{data.limit}</div>)}
  </>
  )
}

export default Fetch