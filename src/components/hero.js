import React from 'react';
import '../styles/hero.css';

const hero = ({ page, title, copy, image, heroFix }) => {
  const defaultImage = '/static/welder-10c6fd8e455b16b421a344183758d5c3.jpg';
  const backgroundImage = image ?? defaultImage;

  



  return (
    <section id={page === 'PMQ' && page} className={`hero ${page}-hero ${heroFix}`} style={{ 
        backgroundImage: `url(${backgroundImage})`       
      }}>
      <div className={`content ${page} ${heroFix}`}>
        <h2>{ title }</h2>
        <p>{ copy }</p>
      </div>
    </section>
  );
};

export default hero;
