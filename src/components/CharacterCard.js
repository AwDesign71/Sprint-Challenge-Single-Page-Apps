import React from 'react'
export default function CharacterCard (props) {
  return (
            <div>
           <span></span>
           <img src={props.character.image} alt='Images' />
          <h3>{props.character.name}</h3>
          </div>
    )
}
