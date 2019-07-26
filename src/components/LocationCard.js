import React from 'react'
import styled from 'styled-components';
const Card = styled.div `
 width: 350px;
 height: 120px;
 border: 1px solid #000;
`

export default function LocationCard (props) {
  // image={image}
  return (
    <Card>
      <p>{props.location.name}</p>
      <p>{props.location.type}</p>
      <p>{props.location.dimension}</p>

    </Card>
  )
}
