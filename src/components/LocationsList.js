import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './LocationCard';
export default function LocationsList(props) {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
// TODO: Add AJAX/API Request here - must run in `useEffect`
//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
 axios.get(`https://rickandmortyapi.com/api/location/`)
 .then(res=> {
   setLocations(res.data.results)
   console.log(res.data.results)
 }
  ).catch(err=>{
    console.log(err);
  })
}, [])
   return(
       <div>
       {locations.map(location=><CharacterCard key={location.id} location={location} />)}
       </div>
   );
}
