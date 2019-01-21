import React from 'react';
import PropTypes from 'prop-types';
import './DogsContainer.css';

const DogsContainer = (props) => {
  let dogs;

  if (props.category === '') {
    dogs = props.dogs.map(dog => {
      return (
        <article></article>
      )
    });
  } else {
    const theDog = props.dogs.find(dog => {
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
  dogs: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired
};

export default DogsContainer;