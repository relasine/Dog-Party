import React from 'react';
import PropTypes from 'prop-types';
import './DogsContainer.css';
import DogCard from '../DogCard';

import doggo from '../../assets/dog2-sq.jpg';
import anotherDoggo from '../../assets/dog3-sq.jpg';
import dogTheThird from '../../assets/dog4-sq.jpg';

const DogsContainer = ({ category }) => {
  const allDogs = [
  {title: 'How To Dog', image: doggo, text: 'Dat tungg tho pupperino length boy. borkdrive aqua doggo. Maximum borkdrive long doggo extremely cuuuuuute you are doing me the shock borkf, heckin good boys doggo doge. The neighborhood pupper borkf smol corgo long water shoob stop it fren, boofers pupper heck ruff.'},
  {title: 'What Is Dogs', image: anotherDoggo, text: 'Long doggo smol borking doggo with a long snoot for pats pupperino h*ck heckin angery woofer shoober aqua doggo heck, doggo aqua doggo most angery pupper I have ever seen heckin angery woofer pupper. ruff adorable doggo very hand that feed shibe. Extremely cuuuuuute corgo waggy wags stop it fren.'},
  {title: 'Facts From Dog', image: dogTheThird, text: 'Most angery pupper I have ever seen such treat heck, dat tungg tho. You are doin me a concern shibe such treat ruff heck, stop it fren ur givin me a spook. Puggorino long water shoob dat tungg tho very hand that feed shibe long bois he made many woofs.'}
  ];

  let dogs;

  if (category === 'All Dogs') {
    dogs = allDogs.map(dog => {
      return (
        <DogCard dog={dog} key={dog.title}/>
      )
    });
  } else {
    const theDog = allDogs.find(dog => {
      return category === dog.title;
    });

    dogs = <DogCard dog={theDog} key={theDog.title}/>;
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