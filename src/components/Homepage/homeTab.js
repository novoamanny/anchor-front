import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import '../../styles/Homepage/homeTab.css';

const homeTab = ({ tab, index }) => {
  return (
    <div className={`type-tab-${index}`}>
      <div className='tab-image-container'>
        <GatsbyImage
          image={tab.Thumbnail.childImageSharp.gatsbyImageData}
          alt=''
        />
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

export default homeTab;
