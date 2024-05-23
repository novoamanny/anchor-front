import React from "react";

import tabImage from "../../images/tab-image.png";

import "../../styles/About/tab.css";

const Tab = () => {
  return (
    <div className={`tab`}>
      <div className="tab-top-row">
        <div className="tab-img">
          <img src={tabImage} />
        </div>
        <div className="tab-text">
          <h2>Compare Metal Fabrication Options</h2>
          <a className="cta-button" href="download-e-guide">
            Download The E-Guide
          </a>
        </div>
      </div>
      <div className="tab-bot-row"></div>
    </div>
  );
};

export default Tab;
