import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function PersonajesDetail() {

  const{id}=useParams();
  const[character,setCharacter]=useState([]);

  useEffect(()=>{
    getdetail();
  },[])

  const getdetail = async() => {
    const detail = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
    const data = await detail.json()
    setCharacter(data)
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <div className='detail-character'>
        <div>
          <img src={character.image}/>
        </div>
        <div className='details'>
          <h5>Status</h5>
          <p>{character.status}</p>
          <h5>Specie</h5>
          <p>{character.species}</p>
          <h5>Type</h5>
          <p>{character.type}</p>
          <h5>Gender</h5>
          <p>{character.gender}</p>
          <h5>Created</h5>
          <p>{character.created}</p>
          <h5>Location</h5>
          <p>{character.location.name}</p>
          <h5>Origin</h5>
          <p>{character.origin.name}</p>
          <button onClick={()=>window.history.back(-1)} className="btn btn-success">Return</button>
        </div>
      </div>
    </div>
  )
}

export default PersonajesDetail