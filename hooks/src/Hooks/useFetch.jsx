import React, { use, useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)  // data is null because the data is in object form
  const [load , setLoad] = useState(true)
  const [err , setErr] = useState(null)

  useEffect(()=>{
    setLoad(true) // it is used to reset the previous outdoing of an url that's we reset our setLoad and setErr
    setErr(null)

    async function a(){
      try{
      let res = await fetch(url)
      if(!res.ok){
        throw new Error("damn")
      }
      let data = await res.json()
      setData(data)
      setLoad(false)
    }
    catch(err){
      setErr(err)
      setLoad(false)
    }
  }

  a();

  },[url])

  return {data , load , err}
}

export default useFetch