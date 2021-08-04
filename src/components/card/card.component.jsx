import React from 'react'
import './card.css';

const Card = (props) => {
    console.log(props)
    const {borderRadius=false, size='lg', name, profile, workedAt} = props 
    return (
        <div className={`main-wrapper ${size} ${borderRadius?'border-radius':''}`}>
            <div className="profile-image">
                <div className="skill-image"/>
                <span className="tooltiptext">
                    <p>{name}</p>
                    <p>{profile}</p>
                    <p>Previously @{workedAt}</p>
            </span>
            </div>
            
        </div>
    )
}

export default Card
