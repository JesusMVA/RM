import React from 'react'
import UsePerson from '../hooks/UsePerson';
import {Link} from 'react-router-dom';

function Characters() {

  const{person,page,prev,next}=UsePerson();

  return (
    <div>
    
      {person.map(data=>(
        <div className='card-character' style={{ width: '18rem' }}>
          <img variant="top" src={data.image}/>
            <p>{data.name}</p>
            <Link className="btn btn-info" to={`/Personajes/${data.id}`}>Details</Link>
        </div>
      ))}<div className='btn-page'>
      <button onClick={prev} className="btn btn-primary">Prev</button>
      <h3>{page}</h3>
      <button onClick={next} className="btn btn-primary">Next</button>
    </div>
   </div>
  )
}

export default Characters