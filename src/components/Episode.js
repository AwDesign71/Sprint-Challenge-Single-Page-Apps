import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList(props) {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
     axios.get(`https://rickandmortyapi.com/api/episode/`)
     .then(res=> {
        setEpisodes(res.data.results)
     }
      ).catch(err=>{
        console.log(err);
      })
  }, [])

  return (<section className='character-list grid-view'>

      {episodes.map(episode=><EpisodeCard key={episode.id} episode={episode} />)}
      
    </section>
  )
}
