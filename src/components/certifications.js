import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Certifications = () => {
  const {
    strapiHomePage: {
      CertificationList: { Heading, Images },
    },
  } = useStaticQuery(query);

  return (
    <div className="certification-row">
      <div className="certification-row-text">
        <h2>{Heading}</h2>
      </div>
      <div className="List">
        {Images.map((cert, index) => {
          console.log(cert);
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
  );
};

const query = graphql`
  query {
    strapiHomePage {
      CertificationList {
        Heading
        Images {
          alternativeText
          url
        }
      }
    }
  }
`;

export default Certifications;
