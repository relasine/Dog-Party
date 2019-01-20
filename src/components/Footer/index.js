import React from 'react';
import './Footer.css';

import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';

const Footer = () => {
  const linkData = [
  {name: 'Twitter', icon: twitter, link: "https://twitter.com/search?q=dogs&src=typd"},
  {name: 'Instagram', icon: instagram, link: "https://www.instagram.com/dogsofinstagram/"},
  {name: 'Facebook', icon: facebook, link: "https://www.facebook.com/BlackDogAnimalRescue/"},
  {name: 'LinkedIn', icon: linkedin, link: "https://www.linkedin.com/company/support-dogs/"}
  ];

  const socialLinks = linkData.map(link => {
    return (
      <a href={link.link} 
         target='_blank' 
         rel='noopener noreferrer'
         key={link.name + link.link}>
        <img src={link.icon} alt={`${link.name} logo`} />
      </a>
    )

  });

  return (
    <footer className='Footer'>
      <h3>Learn About Dogs Online</h3>
      <div className='social-links'>{socialLinks}</div>
    </footer>
  )
}

export default Footer;