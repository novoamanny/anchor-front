import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import ServicesHeaderImg from "../../images/welding-hero.jpg";
import ImageText from "../../components/imageText";
import ImageTextImage from "../../images/Custom.jpg";
import ImageTextImage2 from "../../images/Robotic.jpg";
import ImageTextImage3 from "../../images/Final.jpg";
import ImageTextImage4 from "../../images/sparks-dark.jpg";
import FullImageText from "../../components/fullImageText";
// import Certifications from '../../components/certifications';

import FullImage from "../../images/sparks-dark.jpg";
const Welding = ({ location: { pathname } }) => {
  const ITContent = [
    {
      Heading: "Custom Metal Fabrication And Industrial Welding",
      Description:
        "Anchor’s welding department is highly specialized, allowing our team to quickly tackle projects of any size or scope. Not every metal fabricator employs certified weld inspectors (CWls), but we have made this investment. Combined with precise manufacturing design, we can customize welds that best suit each individual project. No other department receives as much volume as our welding manufacturing services, so we ensure our MIG, TIG and robotic welding bases are always running at full capacity.",
      cta: "Request A Consultation",
    },
    {
      Heading: "Robotic Welding",
      Description:
        "Anchor has invested in several robotic welding machines, allowing for even greater capacity and increased capability to meet our clients’ needs. With both TIG and MIG welding, Anchor delivers consistently aesthetic and functional welds.",
    },
    {
      Heading: "Final Weld Inspection",
      Description:
        "Under the watchful eyes of our certified weld inspectors, you can be sure our welding quality always meets American Weld Society Standards. Our welders strictly adhere to in-house procedures and specifications, so clients can expect absolute consistency.",
      cta: "Schedule A Tour",
    },
  ];
  const FIContent = {
    Heading: "Welding Certifications Listing",
    Description: [
      <li>AWS D1.1, D1.2, D1.3 Certifications</li>,
      <li>Ground Combat Vehicle Code</li>,
      <li>AAR M-1003 Certified</li>,
      <li>CWB – Canadian Weld Bureau</li>,
    ],
    cta: "Schedule A Tour",
  };

  // services-Forming
  const currentPage = pathname.split("/")[1] + "-" + pathname.split("/")[2];

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "services-single-page",
        }}
      />
      <SEO title="Welding" />
      <Hero title="Welding" image={ServicesHeaderImg} page={currentPage} />
      {ITContent.map((item, index) => {
        if (index < 2) {
          return (
            <ImageText
              title={item.Heading}
              content={item.Description}
              isMarkdown={true}
              textPosition={index === 0 ? "left" : "right"}
              minHeight="30vw"
              fillColor={index === 1 ? "tan" : "white"}
              page={currentPage}
              section={index}
              image={index === 0 ? ImageTextImage : ImageTextImage2}
              ctaText={index === 0 && "Request A Consultation"}
              ctaUrl="/contact/#request-a-consultation"
            />
          );
        } else {
          return (
            <ImageText
              title={item.Heading}
              content={item.Description}
              isMarkdown={index < 3 && true}
              textPosition={index === 1 || index === 3 ? "right" : "left"}
              minHeight="30vw"
              fillColor={index === 3 ? "tan" : "blue"}
              page={currentPage}
              section={index}
              image={index === 2 ? ImageTextImage3 : ImageTextImage4}
              ctaText={index === 2 && "Schedule A Tour"}
              ctaUrl="/schedule-tour"
            />
          );
        }
      })}

      <FullImageText
        title={FIContent.Heading}
        content={FIContent.Description}
        isMarkdown={false}
        page={currentPage}
        section={0}
        image={FullImage}
      />
    </Layout>
  );
};

export default Welding;
