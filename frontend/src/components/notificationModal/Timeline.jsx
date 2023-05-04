import React from 'react'

const Timeline = ({data}) => {
  
  
  return (
    <li className="date__list--item">
        <div className="date">{data.timeline}</div>
         <span className="circle-mark"></span>
    </li>
  )
}

export default Timeline