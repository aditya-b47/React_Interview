import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCounterStore = create(persist((set,get) =>({
  count : 0,


  increment : () => set((state)=>({count : state.count+1})),
  decrement : () => set((state)=>({count : state.count-1})),

}),{name : "adi"}))

export default useCounterStore