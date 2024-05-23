import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import Hero from "../components/hero";
import AboutHeaderImg from "../images/about-header.jpg";
import CompanyHistory from "../components/About/companyHistory";
import Tab from "../components/About/tab";
import TeamIntro from "../components/About/teamIntro";
import TeamMemebers from "../components/About/teamMembers";
import ImageText from "../components/imageText";
import FullImageText from "../components/fullImageText";
import ReactMarkdown from "react-markdown";
import heroImage from "../images/about-header.jpg";
import fullImage from "../images/about-welder.jpg";
import ImageTextImage from "../images/services-page-image.jpg";
const About = ({ location: { pathname } }) => {
  const data = useStaticQuery(query);
  // hero content
  const pageTitle = data?.allStrapiAbout?.edges?.[0]?.node?.PageTitle ?? null;
  const pageSubTitle =
    data?.allStrapiAbout?.edges?.[0]?.node?.PageSubTitle ?? null;
  // facilities content
  const facilitiesTitle =
    data?.allStrapiAbout?.edges?.[0]?.node?.FacilitiesTitle ?? null;
  const facilitiesSubTitle =
    data?.allStrapiAbout?.edges?.[0]?.node?.FacilitiesSubTitle ?? null;
  const facilitiesContent =
    data?.allStrapiAbout?.edges?.[0]?.node?.FacilitiesContent ?? null;
  // history content
  const historyTitle =
    data?.allStrapiAbout?.edges?.[0]?.node?.HistoryTitle ?? null;
  const historyContent =
    data?.allStrapiAbout?.edges?.[0]?.node?.HistoryContent ?? null;
  // team content
  const teamTitle = data?.allStrapiAbout?.edges?.[0]?.node?.TeamTitle ?? null;
  const teamSubTitle =
    data?.allStrapiAbout?.edges?.[0]?.node?.TeamSubTitle ?? null;
  const teamContent =
    data?.allStrapiAbout?.edges?.[0]?.node?.TeamContent ?? null;
  const teamMembers = data?.allStrapiTeamMember?.edges ?? [];
  // values content
  const valuesTitle =
    data?.allStrapiAbout?.edges?.[0]?.node?.ValuesTitle ?? null;
  const valuesSubTitle =
    data?.allStrapiAbout?.edges?.[0]?.node?.ValuesSubTitle ?? null;
  const valuesContent =
    data?.allStrapiAbout?.edges?.[0]?.node?.ValuesContent ?? null;

  // TODO: Update this with proper image for the hero

  // Checks for current page. About/Resources
  const currentPage = pathname.split("/")[1];

  return (
    <Layout>
      <SEO title="About" />
      <div className="about">
        {/* src/styles/hero.css */}
        <Hero
          page={currentPage}
          title={pageTitle}
          copy={pageSubTitle}
          image={AboutHeaderImg}
        />

        <CompanyHistory
          historyContent={historyContent}
          historyTitle={historyTitle}
        />

        <Tab />

        {/* need to work on responsive for this component. Image Text */}
        <ImageText
          title={facilitiesTitle}
          subtitle={facilitiesSubTitle}
          content={facilitiesContent}
          isMarkdown={true}
          textPosition="left"
          ctaUrl="/schedule-tour"
          ctaText="Schedule a tour"
          fillColor="blue"
          page={currentPage}
          image={ImageTextImage}
          section={0}
    
        />

        <FullImageText
          title={valuesTitle}
          subtitle={valuesSubTitle}
          content={valuesContent}
          isMarkdown={true}
          // ctaUrl="#"
          // ctaText="Schedule a tour"
          page={currentPage}
          image={fullImage}
          section={0}
        />

        <TeamIntro
          teamTitle={teamTitle}
          teamSubTitle={teamSubTitle}
          teamContent={teamContent}
        />

        <TeamMemebers teamMembers={teamMembers} />
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiTeamMember {
      edges {
        node {
          Name
          Biography
          Title
          TeamMemberPhoto {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    allStrapiAbout {
      edges {
        node {
          FacilitiesContent
          FacilitiesSubTitle
          FacilitiesTitle
          HistoryContent
          HistoryTitle
          TeamContent
          PageTitle
          PageSubTitle
          TeamSubTitle
          TeamTitle
          ValuesContent
          ValuesSubTitle
          ValuesTitle
        }
      }
    }
  }
`;

export default About;
