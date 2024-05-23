import { useStaticQuery, graphql } from "gatsby";
import * as React from "react";
import Helmet from "react-helmet";
import ReactMarkdown from "react-markdown";
import HomeSection from "../components/Homepage/homeSection";
import HomeTab from "../components/Homepage/homeTab";
import CertList from "../components/Homepage/certList";
import FullImageText from "../components/fullImageText";
import ImageText from "../components/imageText";
import Layout from "../components/layout";
import SEO from "../components/seo";

import fullImage from "../images/metal-tool-cutting.jpg";
import fullImageTwo from "../images/metal-working-collage.jpg";
import ImageTextImage from "../images/worker-using-table-tool.jpg";

import "./index.css";

const IndexPage = ({ location: { pathname } }) => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "home-page",
        }}
      />
      <SEO
        title="Anchor Fabrication"
        description="From idea inception to finished product, from production engineering to powder coating, from bending to assembly, Anchor has the capacity and the capabilities to handle all your custom metal fabrication needs."
      />
      {/* Map over the first two sections only */}
      {data.strapiHomePage.HomeSection.map((section, index) => {
        if (index < 2) {
          return <HomeSection section={section} index={index} />;
        } else if (index === 2) {
          return (
            <FullImageText
              title={section.Title}
              content={section.Content}
              isMarkdown={true}
              ctaUrl={section.ButtonURL}
              ctaText={section.ButtonText}
              page={"homepage"}
              image={fullImage}
              section={0}
            />
          );
        } else return null;
      })}
      <section className="type-tabs">
        <div className="type-tabs-top">
          <h2>{data.strapiHomePage.PreHomeTabTitle}</h2>
          <ReactMarkdown className='text-link-blue'>{data.strapiHomePage.PreHomeTabContent}</ReactMarkdown>
        </div>
        {data.strapiHomePage.HomeTab.map((tab, index) => {
          return <HomeTab tab={tab} key={tab.id} index={index} />;
        })}
      </section>
      {/* Map over the remaining sections */}
      {data.strapiHomePage.HomeSection.map((section, index) => {
        if (index === 3) {
          return (
            // <section className={`home-section-${index}`}>
            //   <div className='content'>
            //     <h2>{section.Title}</h2>
            //     <h3>{section.Subtitle}</h3>
            //     <p>{section.Content}</p>
            //     <a className='cta-button' href={section.ButtonURL}>
            //       {section.ButtonText}
            //     </a>
            //   </div>
            // </section>
            <ImageText
              title={section.Title}
              content={section.Content}
              isMarkdown={true}
              textPosition="left"
              ctaUrl={section.ButtonURL}
              ctaText={section.ButtonText}
              fillColor="tan"
              page={"homepage"}
              image={ImageTextImage}
              section={index}
              //Contains images, Don't break!
              imageContain={'image-contain'}
              imageContainV2={'image-containV2'}
            />
          );
        } else if (index === 4) {
          // console.log("hello", section);
          return (
            <FullImageText
              title={section.Title}
              content={section.Content}
              isMarkdown={true}
              ctaUrl={section.ButtonURL}
              ctaText={section.ButtonText}
              page={"homepage"}
              image={fullImageTwo}
              section={1}
            />
          );
        } else return null;
      })}
      <CertList certs={data.strapiHomePage.CertificationList} />
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomePage {
      HomeSection {
        ButtonText
        ButtonURL
        Content
        Subtitle
        Title
        id
      }
      HomeTab {
        ButtonText
        ButtonURL
        Description
        Heading
        id
        Thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      PreHomeTabTitle
      PreHomeTabContent
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

export default IndexPage;
