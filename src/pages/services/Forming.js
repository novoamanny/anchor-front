import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import ServicesHeaderImg from "../../images/forming-hero.jpg";
import ImageText from "../../components/imageText";
import ImageTextImage from "../../images/Industrial.jpg";
import ImageTextImage2 from "../../images/Press.jpg";

// import FullImageText from '../../components/fullImageText';

// import FullImage from '../../images/about-welder.jpg';

const Forming = ({ location: { pathname } }) => {
  const ITContent = [
    {
      Heading: "Industrial & Precision Materials Forming",
      Description:
        "Forming parts per clients’ specifications is a core competency at Anchor Fabrication. The press brake requests that come through our door are consistently stringent, but we aim to meet them in stride and exceed your expectations. Our investments in metal forming have paid off, and we think you'll agree. Enough tonnage and capacity to handle the most robust projects, combined with lean manufacturing best practices, Anchor’s 150 years of collective experience in the forming department has consistently satisfied clients’ project needs since our inception.",
      cta: "Request A Consultation",
    },
    {
      Heading: "Press Power",
      Description:
        "With multiple press brakes up to 1,000 tons of press capacity, Anchor doesn't shy away from any project. We can form pieces up to 30 feet in length, reducing the need for welding and other downstream services later in the fabrication process. If you need deep and thick plate bending, look no further than Anchor forming.",
      cta: "Schedule a Tour",
    },
  ];
  // const FIContent = 'Custom metal fabrication depends on reliable engineering communication to establish processes that set up OEM partners for success. Any design collaborations made by the engineering department to your parts are documented in detail for accurate reproduction. Once a fabrication plan is established, preliminary articles are presented for inspection and approval, ensuring that we accurately resupply your parts with every order. '

  // services-Forming
  const currentPage = pathname.split("/")[1] + "-" + pathname.split("/")[2];

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "services-single-page",
        }}
      />
      <SEO title="Forming" />
      <Hero
        title="Metal Forming"
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
              ctaText={"Request a Consultation"}
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

export default Forming;
