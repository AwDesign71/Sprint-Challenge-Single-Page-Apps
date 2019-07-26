import React from 'react'

export default function CharacterCard ({props}) {
  return (
            <div>
           <span></span>
           <img src={props} alt='Images' />
          <h3>{props}</h3>
          </div>
    )
}
