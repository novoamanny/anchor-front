import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import image from "../../images/Services/ANCHOR-7-struggles-v1.png";
import "../../styles/Services/tab.css";

const Tab = () => {
  const {
    strapiHomePage: {
      CertificationList: { Images },
    },
  } = useStaticQuery(query);

  return (
    <div className="services-tab">
      <div className="s-top-row">
        <div className="left">
          <h2>From Initial Concept To Prototype And Beyond</h2>
        </div>
        <div className="right">
          <p>
            With precision engineering, unmatched quality standard, and a
            willingness to tackle complexities others avoid. Anchor Fabrication
            streamlines the metal fabrication manufacturing process by providing
            custom light, medium, and heavy metal fabrication, regardless of the
            complexity of the request. Find all the custom metal fabrication
            services you need in one place.
          </p>
        </div>
      </div>
      <div className="s-bot-row">
        <div className="book-container">
          <img src={image} />
        </div>
        <div className="text">
          <h4>The struggles of OEM's are real. Anchor undertands.</h4>
          <h4>Download 7 Primary Manufacturing Struggles of OEM's</h4>
          <a className="cta-button" href="download-e-guide">
            Download It Now
          </a>
        </div>
      </div>
    </div>
  );
};

const query = graphql`
  query {
    strapiHomePage {
      CertificationList {
        Images {
          alternativeText
          url
        }
      }
    }
  }
`;
export default Tab;
