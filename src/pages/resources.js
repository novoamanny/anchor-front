import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Hero from "../components/hero";
import heroImage from "../images/header-resources.jpg";
import ImageOne from "../images/worker-using-machine-light.jpg";
import ImageTwo from "../images/welder-light.jpg";
import ImageThree from "../images/light-metal-cylinders.jpg";
import ImageFour from "../images/News-Image.jpeg";
import ImageText from "../components/imageText";
import FullImageText from "../components/fullImageText";
import Tab from "../components/Resources/tab";
// eslint-disable-next-line no-restricted-globals
const Resources = ({ location: { pathname } }) => {
  const data = useStaticQuery(query);
  // hero content
  const pageTitle = data?.allStrapiResources?.nodes?.[0]?.PageTitle ?? null;
  // secondary title
  const SecondaryTitle =
    data?.allStrapiResources?.nodes?.[0]?.SecondaryTitle ?? null;
  // section 1
  const Section1Title =
    data?.allStrapiResources?.nodes?.[0]?.Section1Title ?? null;
  const Section1Content =
    data?.allStrapiResources?.nodes?.[0]?.Section1Content ?? null;
  // section 2
  const Section2Title =
    data?.allStrapiResources?.nodes?.[0]?.Section2Title ?? null;
  const Section2Content =
    data?.allStrapiResources?.nodes?.[0]?.Section2Content ?? null;
  // section 3
  const Section3Title =
    data?.allStrapiResources?.nodes?.[0]?.Section3Title ?? null;
  const Section3Content =
    data?.allStrapiResources?.nodes?.[0]?.Section3Content ?? null;

  const currentPage = pathname.split("/")[1];

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "resources-page",
        }}
      />
      <SEO title="Resources" />
      <div className="resources">
        <Hero page={currentPage} title={pageTitle} image={heroImage} />
      </div>

      <Tab SecondaryTitle={SecondaryTitle} />

      <ImageText
        title={Section1Title}
        content={Section1Content}
        isMarkdown={true}
        textPosition="left"
        image={ImageOne}
        fillColor="tan"
        ctaUrl="/contact"
        ctaText="Find Forms"
        page={currentPage}
        section={0}
        resourcesContain={'resourcesContain'}
      />

      <ImageText
        title={Section2Title}
        content={Section2Content}
        isMarkdown={true}
        textPosition="right"
        image={ImageTwo}
        fillColor="blue"
        ctaUrl="/resources/Blog"
        ctaText="Read Blogs"
        page={currentPage}
        section={1}
        resourcesContain={'resourcesContain'}
      />

      <ImageText
        title={Section3Title}
        content={Section3Content}
        isMarkdown={true}
        textPosition="left"
        image={ImageThree}
        fillColor="tan"
        ctaUrl="/download-e-guide"
        ctaText="Download E-Guides"
        page={currentPage}
        section={2}
        resourcesContain={'resourcesContain'}
      />

      <ImageText
          title={'Anchor News'}
          content={'Stay informed on all things Anchor Fabrication.'}
        isMarkdown={true}
        textPosition="right"
        image={ImageFour}
        fillColor="blue"
        ctaUrl="/resources/News"
        ctaText="See News"
        page={currentPage}
        section={1}
        resourcesContain={'resourcesContain'}
      />
    </Layout>
  );
};

const query = graphql`
  query {
    allStrapiResources {
      nodes {
        PageTitle
        SecondaryTitle
        Section1Title
        Section1Content
        Section2Title
        Section2Content
        Section3Title
        Section3Content
      }
    }
  }
`;

export default Resources;
