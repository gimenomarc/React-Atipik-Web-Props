import React from 'react';
import '../styles/pizza.css'

function Pizza(props) {
  return (
    <div className='container-pizza'>
      <img 
        className='img-pizza'
        src={require(`../img/pizza-${props.imagen}.png`)}
        alt='Pizza foto' />
      <div className='container-text'>
        <h1 className='title-pizza'>${props.name}</h1>
        <p className='description-pizza'>${props.description}</p>
        <p className='price-pizza'>${props.price}</p>
      </div>
    </div>
  )
}

export default Pizza;