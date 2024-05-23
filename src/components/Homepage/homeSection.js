import React from 'react';

import '../../styles/Homepage/homeSection.css';

const HomeSection = ({ section, index }) => {
  return (
    <section className={`home-section-${index}`}>
      
      <div className='content'>
        <h2>{section.Title}</h2>
        <h3>{section.Subtitle}</h3>
        <p>{section.Content}</p>
        {/* Conditionally Render Buttons if both Text & URL fields are filled */}
        {section.ButtonText && section.ButtonURL && (
        <a className={index === 1 ? 'cta-button home-section-1-btn' : 'cta-button' } href={section.ButtonURL}>
          {section.ButtonText}
        </a> 
        )}
        {
          index === 1 && (
            <a className={index === 1 ? 'cta-button home-section-1-btn' : 'cta-button' } href={'/contact/#request-a-consultation'}>
              {'Request A Consultation'}
            </a>
          )
        }
      </div>
    </section>
  );
};

export default HomeSection;
