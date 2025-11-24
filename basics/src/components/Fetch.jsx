import React, { useEffect, useState } from 'react'

const Fetch = () => {

  const [data , setData] = useState([])
  
  useEffect(()=>{

    const fetch_Api = async()=>{
      const api = await fetch('https://jsonplaceholder.typicode.com/users')
      const res = await api.json()
      console.log(res)
      setData(res)
    }

    fetch_Api()

  },[])

  return (
    <>
    <h1>Fetching Data... </h1>
    {data.map((a)=><div key={a.id}>
      <li>{a.username}</li>
      <li>{a.email}</li>
    </div>)}
    </>
  )
}

export default Fetch