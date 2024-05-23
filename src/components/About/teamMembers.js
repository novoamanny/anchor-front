import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import "../../styles/About/teamMembers.css";

const TeamMembers = ({ teamMembers }) => {
  return (
    <section className="team-members">
      {teamMembers.map((edge, index) => {
        const BGColor = index % 2 === 0 ? "rgba(27,54,93, 0.25)" : "#fff";

        const imgBGColor = index % 2 === 0 ? "orange" : "blue";

        return (
          <div
            className="team-member"
            key={index}
            style={{ backgroundColor: BGColor }}
          >
            <div className="left">
              <div className={`img-container ${imgBGColor}`}>
                <GatsbyImage
                  image={
                    edge.node.TeamMemberPhoto.childImageSharp.gatsbyImageData
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <h3>{edge.node.Name}</h3>
              <h4>{edge.node.Title}</h4>
              <ReactMarkdown>{edge.node.Biography}</ReactMarkdown>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TeamMembers;
