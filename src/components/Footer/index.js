import React from 'react';
import './Footer.css';

import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';

const Footer = () => {
  const linkData = [
  {icon: twitter, link: "https://twitter.com/search?q=dogs&src=typd"},
  {icon: instagram, link: "https://www.instagram.com/dogsofinstagram/"},
  {icon: facebook, link: "https://www.facebook.com/BlackDogAnimalRescue/"},
  {icon: linkedin, link: "https://www.linkedin.com/company/support-dogs/"}
  ];

  return (
    <h3>Learn About Dogs Online</h3>
  )
}

export default Footer;