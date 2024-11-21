import React, { useState } from 'react'
import './Filter.css'
import {links} from '../../assets/logo/Img-link.js'
const Filter = () => {

  const [selectfilter,setselectfilter]=useState()
  return (
    <div className='filter-div'>
      {links.map((item,i)=>(
        <div className={`links-box ${i ==selectfilter && "selected-box"}`} key={i} 
        onClick={()=>{console.log("selecting key",i);
         selectfilter(i);}}>
          <img src={item.imgsrc} alt="" className='links-img' />
          <p className={`links-label ${i ==selectfilter && "selected-box"}`}> {item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Filter