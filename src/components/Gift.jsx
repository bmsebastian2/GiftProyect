import React from 'react'
import './Gift.css'

const Gift = ({elementGift}) => {
    const {title , id ,url} = elementGift
    return (
        <a href={`#${id}`} className="gift">
                <h4>{title}</h4>
                <img src = {url} alt = {title} /> 
             
        </a>
      
    )
}

export default Gift
