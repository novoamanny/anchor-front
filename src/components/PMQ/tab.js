import React from 'react';

import ReactMarkdown from 'react-markdown';


import '../../styles/PMQ/tab.css';

const Tab = ({qualityControlTitle, qualityControlText, cta, ctaUrl}) =>{
    return(

        <div className="tab-PMQ">
            <div className='text'>
                <h2>{qualityControlTitle}</h2>
              
                
            </div>
        
            <ReactMarkdown className='right'>{qualityControlText}</ReactMarkdown>
            <div className='desktop-cta'>
                <a className='cta-button' href={ctaUrl}>{cta}</a>
                </div>
            <div className='mobile-cta'>
                <a className='cta-button' href={ctaUrl}>{cta}</a>
                </div>
        </div>
    );
}


export default Tab;