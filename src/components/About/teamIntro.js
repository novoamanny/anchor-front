import React from 'react';
import ReactMarkdown from 'react-markdown'; 


import '../../styles/About/teamIntro.css';

const TeamIntro = ({teamTitle, teamContent, teamSubTitle}) =>{
    return(
        <section className='team-intro'>
          <h3>
            <span>{`${teamTitle}: `}</span>
            {teamSubTitle}
          </h3>
          <div className='team-intro-text'>
            <ReactMarkdown>
              {teamContent}
            </ReactMarkdown>
          </div>
        </section>
    );
}

export default TeamIntro;