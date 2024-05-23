import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import heroImage from "../images/worker-holding-metal-sheet.jpg";
import ReactMarkdown from "react-markdown";

import "../styles/Careers/careers.css";

const Careers = ({ location: { pathname } }) => {
  const data = useStaticQuery(query);
  const JobOpportunities = data?.allStrapiJobOpportunities?.edges ?? [];
  const currentPage = pathname.split("/")[1];
  const [clicked, setClicked] = useState(false);
  const clickHandle = async (index) => {
    if (clicked === index) {
      setClicked(false);
    } else {
      setClicked(index);
    }
  };

  return (
    <Layout>
      <SEO title="Careers" />
      <Hero title={"Careers"} page={currentPage} image={heroImage} />
      <div className="careers-listing">
        {JobOpportunities.map((edge, index) => {
           const links = [
            'https://www.paycomonline.net/v4/ats/web.php/jobs?clientkey=3881D882E4312F2DCB6E0C7CDD68A3EB'
          ]
          return (
            <div
              className={
                clicked === index ? "listing clicked" : "listing closed"
              }
              onClick={() => clickHandle(index)}
            >
              
              
              <div style={{width: '100%'}}>
                <h2>{edge.node.Opportunity}</h2>
              </div>
              {/* Removed, May include at later date.*/}
              {/* <h3>{edge.node.Location}</h3>
              <h3>{edge.node.Category}</h3> */}
              <div
                id={index}
                className={
                  clicked === index ? "listing-clicked" : "listing-closed"
                }
              >
                <ReactMarkdown>{edge.node.Description}</ReactMarkdown>
                <Link
                  to={edge.node.ApplicationURL}
                  target="_blank"
                  className="cta-button"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
// 
const query = graphql`
  query {
    allStrapiJobOpportunities {
      edges {
        node {
          ApplicationURL
          Category
          Description
          Location
          Opportunity
        }
      }
    }
  }
`;

export default Careers;
