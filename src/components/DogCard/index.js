import React from 'react';
import './DogCard.css';
import PropTypes from 'prop-types';

const DogCard = ({ dog }) => {
  return (
    <article></article>
  )
}

DogCard.propTypes = {
  dog: PropTypes.objectOf(PropTypes.string).isRequired
}

export default DogCard;