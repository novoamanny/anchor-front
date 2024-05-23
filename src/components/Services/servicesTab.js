import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import '../../styles/Services/servicesTab.css';

const ServicesTab = ({ tab, index, contact }) => {
  return (
    <div className={`services-tab-${index} service-tab ${contact && `contact-tab contact-tab-${index}`}`}>
      <div className='tab-image-container services'>
        <img src={tab.url}/>
      </div>
      <div className='text'>
        <h2>{tab.Heading}</h2>
        <p>{tab.Description}</p>
      </div>
      {/* Conditionally Render Buttons if both Text & URL fields are filled */}
      {tab.ButtonText && tab.ButtonURL && (
        <a className='cta-button' href={tab.ButtonURL}>
          {tab.ButtonText}
        </a>
      )};
    </div>
  );
};

export default ServicesTab;