import React, { useEffect, useState } from 'react'
import {searchData} from '../data/data.js'
// data fetch done
// UI for search bar and list // done
//filter logic
// handle change => setvalue

const Search = () => {

  const [filterData , setFilterData] = useState()
  

  useEffect(()=>{
    
  },[searchData])
  


  return (
    <div>
      <input type="text" className='w-70 bg-blue-400 border-2'   />
      <div className='w-70 bg-blue-400'>
        {searchData.map((ele)=>{
         return(<div key={ele.id}>{ele.name}</div>)   
        })}
      </div>
    </div>
  )
}

export default Search