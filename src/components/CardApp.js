import React from 'react'

const Card = [{
  name: 'Jesus Manuel',
  lastName: 'Velasquez Arias',
  program: 'ADSI',
},
{
  name: 'Api Rick and Morty',
  lastName: 'Api Pokemon',
  program: 'Api Star Wars',
}]


const CardApp = () => {
   
  return (
    <div className='Card'>
    {Card.map((card) => (
      <card>
        <p>{card.name}</p>
        <p>{card.lastName}</p>
        <p>{card.program}</p>
      </card>
    ))}
    </div>
  )
}

export default CardApp