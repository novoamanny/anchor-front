import React from 'react';
import '../styles/LMHTab.css';
const LMHTab = ({title, text, cta}) =>{
    return(
        <div className='LMHTab'>
            <h2>{title}</h2>
            <p>{text}</p>
            <a className='cta-button' href={'/contact/#request-a-consultation'}>
                {cta}
            </a>
        </div>
    );
}


export default LMHTab;