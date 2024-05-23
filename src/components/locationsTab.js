import React from 'react';
import '../styles/locationsTab.css';
const LocationsTab = ({page, text, title}) =>{
    return(
        <div className={`locations-tab ${page}-tab`}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
}

export default LocationsTab;