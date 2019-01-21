import React from 'react';
import './DogCard.css';
import PropTypes from 'prop-types';

const DogCard = ({ dog }) => {
  const dogSection = dog.title.split(' ')[0];

  return (
    <article className='DogCard'>
      <h2>{dog.title}</h2>
      <img className='dog-card-dog' src={dog.image} alt='A dog portrait' />
      <p>{dog.text}</p>
      <h3>{dogSection}</h3>
    </article>
  )
}

DogCard.propTypes = {
  dog: PropTypes.objectOf(PropTypes.string).isRequired
}

export default DogCard;