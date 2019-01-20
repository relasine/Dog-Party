import React from 'react';
import './Footer.css';

import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';

const Footer = () => {
  const socialLinks = [
  {icon: twitter},
  {icon: instagram},
  {icon: facebook},
  {icon: linkedin}
  ];

  return (
    <h3>Learn About Dogs Online</h3>
  )
}

export default Footer;