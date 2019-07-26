import React from 'react'
import styled from 'styled-components';

const Card = styled.div `
  width: 350px;
  height: 120px;
  border: 1px solid #000;
  `
export default function EpisodeCard (props) {
  // image={image}
  
  return (
    <Card>
      <p>{props.episode.name}</p>
      <p>{props.episode.air_date}</p>
      <p>{props.episode.episode}</p>
      <p>{props.episode.character}</p>
    </Card>
  )
}