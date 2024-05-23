import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import ServicesHeaderImg from "../../images/Services/service-single-header.jpg";
import ImageText from "../../components/imageText";
import ImageTextImage from "../../images/light-one.png";
import ImageTextImage2 from "../../images/metal-threads.jpg";
import ImageTextImage3 from "../../images/sparks-dark.jpg";
import ImageTextImage4 from "../../images/heavy-three.jpg";
import FullImageText from "../../components/fullImageText";

const Engineering = ({ location: { pathname } }) => {
  const ITContent = [
    {
      Heading:
        "Engineering fabrication optimized for consistency and efficiency",
      Description:
        "The Anchor engineering department’s ultimate goal is to design a manufacturing process that drives down the cost and, in many cases, improves the quality and performance of your metal parts. With an exceptionally qualified mechanical engineering and machine programming department, Anchor Fabrication supports our clients with more than 60 years of collective CAD and 3D modeling experience.",
    },
    {
      Heading: "Optimized Production",
      Description:
        "Not only does Anchor help you design the perfect part, but we also work with you to perfect the production process. We sit down with OEM engineering teams from the start of any new project and walk you through our optimized manufacturing process, providing informative consultation along the way. We employ the latest VA/VE methods to optimize your manufacturing process and product design for unmatched efficiencies. Finally, we design for assembly, so any part or product can be created, from the cutting process all the way to final assembly and coating.",
    },
    {
      Heading: "Metal Engineering Prototypes",
      Description:
        "Through Anchor’s expert modeling capabilities, parts can be matched to exact client concepts and specifications. With more than 30,000 parts catalogued, tracked, and referenced, design challenges are quickly identified and morphed into fabrication solutions, saving time and boosting the quality of your parts. We understand that many OEMs don’t have the resources or the capital to produce prototypes on the scale they desire, if they produce them at all. Anchor’s engineering department works hand-in-hand with clients to develop functional prototypes, bringing your visions and plans to life.",
      cta: "Request A Consultation",
    },
  ];
  const FIContent =
    "Custom metal fabrication depends on reliable engineering communication to establish processes that set up OEM partners for success. Any design collaborations made by the engineering department to your parts are documented in detail for accurate reproduction. Once a fabrication plan is established, preliminary articles are presented for inspection and approval, ensuring that we accurately resupply your parts with every order. ";

  // services-Engineering
  const currentPage = pathname.split("/")[1] + "-" + pathname.split("/")[2];

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "services-single-page",
        }}
      />
      <Hero
        title="Metal Fab Engineering"
        image={ServicesHeaderImg}
        page={currentPage}
      />
      {ITContent.map((item, index) => {
        if (index === 0) {
          return (
            <ImageText
              title={item.Heading}
              content={item.Description}
              isMarkdown={true}
              textPosition="left"
              minHeight="30vw"
              fillColor="white"
              page={currentPage}
              section={index}
              image={ImageTextImage}
              ctaText={"Request A Consultation"}
              ctaUrl={"/contact/#request-a-consultation"}
            />
          );
        } else {
          return (
            <ImageText
              title={item.Heading}
              content={item.Description}
              isMarkdown={true}
              textPosition={index === 1 ? "right" : "left"}
              minHeight="30vw"
              fillColor={index === 1 ? "tan" : "blue"}
              page={currentPage}
              section={index}
              image={index === 2 ? ImageTextImage4 : ImageTextImage2}
            />
          );
        }
      })}
      <FullImageText
        title={"Precise Part Reproduction"}
        content={FIContent}
        isMarkdown={true}
        ctaUrl="/schedule-tour"
        ctaText="Schedule a tour"
        page={currentPage}
        section={0}
        image={ImageTextImage3}
      />
    </Layout>
  );
};

export default Engineering;
