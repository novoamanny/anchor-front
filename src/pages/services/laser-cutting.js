import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import ServicesHeaderImg from "../../images/Services/service-single-header.jpg";
import ImageText from "../../components/imageText";
import ImageTextImage from "../../images/about-header.jpg";
import ImageTextImage2 from "../../images/Tolerating.jpg";
// import ImageTextImage3 from "../../images/sparks-dark.jpg";
// import FullImageText from "../../components/fullImageText";

// import FullImage from "../../images/about-welder.jpg";
import heroImage from "../../images/Header.jpg";
const LaserCutting = ({ location: { pathname } }) => {
  const ITContent = [
    {
      Heading: "Precision Metal Cutting",
      Description:
        "Laser cutting is often the starting point for any custom sheet metal fabrication process, so your steel fabricator should have the capacity necessary to complete large-scale projects. With state-of-the-art lasers, Anchor Fabrication maintains significant capacity that rivals any custom metal fabricator in the country. Without the need for cleaning or preparing materials before and after cutting, Anchor's laser services enable precision metal cutting that reduces fit time for welds and ensures consistency in part quality. \n A custom metal laser cutting operation must not only cut metal precisely, but also reduce waste such as scrap and drop. For this reason, we are especially mindful of the kind of inventory we purchase and generally invest in inventory that is milled at the exact strength/size required for a project. This is lean manufacturing at its finest.",
      cta: "Request A Consultation",
    },
    {
      Heading: "Tolerating Only the Tightest Tolerances",
      Description:
        "Anchor's laser cutting department can hold tolerances up to +/-.005 of an inch. Not only will your part be completed quickly, but your tolerance expectations will also be met with confidence. Using VA/VE, we also inform OEMs if their parts are over or under-toleranced. This allows us to optimize costs while delivering parts that don't compromise on quality. As a final step in our process, we rely heavily on our risk management team to make certain we meet our products' tolerance targets, among other quality standards.",
    },
  ];
  // const FIContent = 'Custom metal fabrication depends on reliable engineering communication to establish processes that set up OEM partners for success. Any design collaborations made by the engineering department to your parts are documented in detail for accurate reproduction. Once a fabrication plan is established, preliminary articles are presented for inspection and approval, ensuring that we accurately resupply your parts with every order. '
  const Desc2 = <p>Anchor's laser cutting department can hold tolerances up to +/-.005 of an inch. Not only will your part be completed quickly, but your tolerance expectations will also be met with confidence. Using VA/VE, we also inform OEMs if their parts are over or under-toleranced. This allows us to optimize costs while delivering parts that don't compromise on quality. As a final step in our process, we rely heavily on our risk management team to make certain we meet our products' tolerance targets, among other <a>quality standards</a>.</p>
  // services-laser-cutting
  const currentPage = pathname.split("/")[1] + "-" + pathname.split("/")[2];

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "services-single-page",
        }}
      />
      <SEO title="Laser Cutting" />
      <Hero title="Laser Cutting" image={heroImage} page={currentPage} />
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
              content={Desc2}
              isMarkdown={false}
              textPosition={index === 1 ? "right" : "left"}
              minHeight="30vw"
              fillColor={index === 1 ? "tan" : "blue"}
              page={currentPage}
              section={index}
              image={ImageTextImage2}
              ctaText={"Schedule A Tour"}
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

export default LaserCutting;
