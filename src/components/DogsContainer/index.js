import React from 'react';
import PropTypes from 'prop-types';
import './DogsContainer.css';

const DogsContainer = (props) => {
  const allDogs = [
  {},
  {},
  {}
  ];

  let dogs;

  if (props.category === 'All Dogs') {
    dogs = allDogs.map(dog => {
      return (
        <article></article>
      )
    });
  } else {
    const theDog = allDogs.find(dog => {
      return props.category === dog.title;
    });

    dogs = <article></article>;
  }

  return (
    <section>
      {dogs}
    </section>
  )
}

DogsContainer.propTypes = {
  category: PropTypes.string.isRequired
};

export default DogsContainer;