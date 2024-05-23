import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import ServicesHeaderImg from "../../images/assembly-hero.jpg";
import ImageText from "../../components/imageText";
import ImageTextImage from "../../images/Handling.jpg";
import ImageTextImage2 from "../../images/Nuts.jpg";
import FullImageText from "../../components/fullImageText";

import FullImage from "../../images/about-welder.jpg";

const Assembly = ({ location: { pathname } }) => {
  const ITContent = [
    {
      Heading: "Reduce Handling Costs with Custom Fabrication",
      Description:
        "Not only will Anchor cut, weld, form, machine and coat your parts, we'll assemble, package, and ship your final finished products. Our recent expansion added more assembly capacity in order to meet the demands of OEMs who would rather invest resources in R&D or product shipment. With this focus, our engineering team will design for assembly. We have the equipment and the capacity to do the heavy lifting for clients that need a turn-key service from their custom metal fabrication partner.",
      cta: "Request A Consultation",
    },
    {
      Heading: "Nuts To Bolts Assembly Production",
      Description:
        "With efficient assembly processes and diligent quality testing, Anchor assemblies are designed to give you consistently accurate final products. Once assembled, we ensure your products are safely packaged and shipped. Our assembly production can involve short- or long-run parts and sub-assemblies such as bolts, washers, handles, shocks, or hinges. Our team can even put decals on the final product to further reduce your handling costs. As a true, one-stop-shop, why not let Anchor take your product from concept to completion?",
      cta: "Schedule A Tour",
    },
  ];

  // services-Forming
  const currentPage = pathname.split("/")[1] + "-" + pathname.split("/")[2];

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "services-single-page",
        }}
      />
      <SEO title="Assembly" />
      <Hero
        title="Manufacturing Assembly"
        image={ServicesHeaderImg}
        page={currentPage}
      />
      {ITContent.map((item, index) => {
        if (index === 0) {
          return (
            <ImageText
              title={item.Heading}
              content={item.Description}
              isMarkdown={false}
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
              content={false}
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
    </Layout>
  );
};

export default Assembly;
