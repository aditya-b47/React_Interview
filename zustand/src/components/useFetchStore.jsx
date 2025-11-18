import React from 'react'
import { create } from 'zustand'

const useFetchStore =create((set,get) => ({
  product :[],
  loading : false,
  err : null,

   fetchProducts :async (url)=>{
    set({loading : true , err : null})
    try {
      const res = await fetch(url)
      const data = await res.json()
      set({product : data.products , loading : false})
    } catch (error) {
      set({err : error.message , loading : false})
    }
  }
    

}))

export default useFetchStore