import React from 'react';
import ReactMarkdown from 'react-markdown';

import TopRowImage from '../../images/company-history-building-sq.jpg';


import '../../styles/About/companyHistory.css';

const CompanyHistory = ({historyContent, historyTitle}) =>{
  
    const CHContent = historyContent.split('\n').filter(text => text != '\n' && text);
   
    const CHText = CHContent.map((text, index) => <li key={index} className={`CHText-${index}`}><ReactMarkdown>{text}</ReactMarkdown></li>)

    const TopRow = CHText.filter((text, index) => index < 2 && text)
    const BotRow = CHText.filter((text, index) => index >= 2 && text)

    console.log(BotRow[0].props)
    return(
        <section className='companyHistory'>
          <div className='CHTop'>
            <div className='CHTLeft text-link-blue'>
            <h3>{historyTitle}</h3>
            {TopRow}
            </div>
           
            <div className='CHImage'>
              <img src={TopRowImage}/>
            </div>
          </div>
       
          <div className='CHBot'>
            {BotRow}
          </div>
            <div className='left-cta'>
              <a className='cta-button' href='/schedule-tour'>Schedule A Tour</a>
            </div>
           
          
        </section>
    );
}


export default CompanyHistory;