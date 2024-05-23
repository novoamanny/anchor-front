import React from "react";
import "../../styles/Homepage/certList.css";

const CertList = ({ certs }) => {
  return (
    <section className="certifications">
      <div className="top-row">
        {certs.Images.map((cert, index) => {
          if (index === 0) {
            return (
              <div className="cert-image-container-book">
                <img
                  src={`${process.env.GATSBY_API_URL}${cert.url}`}
                  alt={cert.alternativeText}
                />
              </div>
            );
          }
        })}

        <div className="top-row-text">
          <h1>Partnering with a Contract Manufacturer?</h1>
          <h3>This Quick guide Can Help You Choose the Best.</h3>
          <a className="cta-button" href="download-e-guide">
            Download It Now
          </a>
        </div>
      </div>
      <div className="certification-row">
        <div className="certification-row-text">
          <h2>{certs.Heading}</h2>
        </div>
        <div className="List">
          {certs.Images.map((cert, index) => {
            if (index > 0) {
              return (
                <div className="cert-image-container">
                  <img
                    src={`${process.env.GATSBY_API_URL}${cert.url}`}
                    alt={cert.alternativeText}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default CertList;
