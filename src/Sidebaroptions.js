import React from 'react'
import './sidebaroption.css'
function Sidebaroptions({Icon,title,number,isActive}) {
    return (
        <div className={`sidebaroptions ${isActive && 'sidebaroptions--active'}`}>
            <Icon></Icon>
            <h4>{title}</h4>
            <p>{number}</p>
        </div>
    )
}

export default Sidebaroptions
