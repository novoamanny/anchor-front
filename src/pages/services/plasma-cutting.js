import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import ServicesHeaderImg from "../../images/hero-plasma.jpg";
import ImageText from "../../components/imageText";
import ImageTextImage from "../../images/welder-light.jpg";
import ImageTextImage2 from "../../images/Bevel.jpg";
import ImageTextImage3 from "../../images/Bigger.jpg";
// import ImageTextImage3 from "../../images/sparks-dark.jpg";
// import FullImageText from '../../components/fullImageText';

// import FullImage from '../../images/about-welder.jpg';

const PlasmaCutting = ({ location: { pathname } }) => {
  const ITContent = [
    {
      Heading: "Metal Cutting Services with Absolute Part Accuracy",
      Description:
        "Reserved for more robust metal cuts, Anchor's plasma cutting services provide rapid, high-scale, and cost-effective cutting for a variety of materials up to 2 inches thick, holding tolerances within .030 of an inch. Through VA/VE, our metal cutting services are optimized to reduce material waste and ensure absolute part accuracy.",
      cta: "Request A Consultation",
    },
    {
      Heading: "Bevel's Advocate",
      Description:
        "Our plasma cutting allows for beveling up to 2 inches thick, providing preparation for weld joints, enhancing aesthetics, or used as an alternative to machining. Our plasma department removes any downstream processes and unnecessary labor, saving you time and money. Custom metal fabrication requires adaptation to OEM design, and that means maintaining the ability to apply bevels when needed.",
    },
    {
      Heading: "Bigger, Better, Faster, Stronger",
      Description:
        "Given the sheer size of our tables (13 ft. x 60 ft.), Anchor can cut practically any size part you can imagine. In fact, you won't likely find plasma cutting with such high capacity anywhere else. In many cases, this means eliminating the need for additional welding. Our table size gives us the opportunity to work on several projects simultaneously. When combined with our downdraft exhaust system, we create parts with marked efficiency and timeliness.",
    },
  ];
  // const FIContent = 'Custom metal fabrication depends on reliable engineering communication to establish processes that set up OEM partners for success. Any design collaborations made by the engineering department to your parts are documented in detail for accurate reproduction. Once a fabrication plan is established, preliminary articles are presented for inspection and approval, ensuring that we accurately resupply your parts with every order. '

  // services-plasma-cutting
  const currentPage = pathname.split("/")[1] + "-" + pathname.split("/")[2];

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "services-single-page",
        }}
      />
      <SEO title="Plasma Cutting" />
      <Hero
        title="Plasma Cutting"
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
              image={index === 1 ? ImageTextImage2 : ImageTextImage3}
              ctaText={index === 2 && "Schedule A Tour"}
              ctaUrl={"/schedule-tour"}
            />
          );
        }
      })}
      {/* <FullImageText
                title={'Precise Part Reproduction'}
                content={FIContent}
                isMarkdown={true}
                ctaUrl="#"
                ctaText="Schedule a tour"
                page={currentPage}
                section={0}
                image={FullImage}
            /> */}
    </Layout>
  );
};

export default PlasmaCutting;
