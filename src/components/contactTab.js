import React from "react";

import "../styles/Contact/contactTab.css";

const ContactTab = () => {
  const TabContent = {
    title: "Reach Out To Anchor's Metal Fabrication Experts",
    text:
      "With over one million square feet of space across the Southern United States, Anchor Fabrication is positioned to make it easy to have your light, medium, and heavy metal fabrication projects completed under “one roof”. Visit one of our locations to see our processes for yourself.",
  };

  return (
    <div className="ContactTab">
      <div className="left">
        <h2>{TabContent.title}</h2>
      </div>
      <div className="right">
        <p>{TabContent.text}</p>
        <div className="contact-links">
          <a className="cta-button" href="/schedule-tour">
            Schedule A Tour
          </a>
          <a className="cta-button" href="tel:1.800.635.0386">
            Give Us A Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
