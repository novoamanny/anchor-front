import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Hero from "../components/hero";
import heroImage from "../images/heavy-header.jpg";
import ImageText from "../components/imageText";
import LMHTab from "../components/LMHTab";
import Certifications from "../components/certifications";

import ImageOne from "../images/heavy-one.jpg";
import ImageTwo from "../images/heavy-two.jpg";
import ImageThree from "../images/heavy-three.jpg";

const HeavyMetal = ({ location: { pathname } }) => {
  const currentPage = pathname.split("/")[1];

  const tabContent = {
    title: "Big Time Metal Manufacturing Capacity & Capabilities",
    text:
      "No job is too big, no metal too difficult, for Anchor Fabrication to navigate on your behalf. With state-of-the-art equipment and loads of square footage, your custom metal fabrication project will be completed to specifications with quality and efficiency in mind.",
    cta: "Request A Consultation",
  };

  const CONTENT = {
    one: ["Large, welded assembles", "Heavy industrial fabrication"],
    two: [
      "Engineering",
      "Laser Cutting",
      "Plasma Cutting",
      "Forming",
      "Machining",
      "Welding (more robotic welders)",
      "Coating",
      "Assembly",
    ],
    three: [
      "Material Handling",
      "Truck & Trailers (transportation)",
      "Recreational",
      "Defense",
      "Railroad",
      "Construction",
      "Oil & Gas",
    ],
  };

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "heavy-page",
        }}
      />
      <SEO title="Heavy Metal Fabrication" />
      <Hero
        title="Heavy Metal Fabrication"
        image={heroImage}
        page={currentPage}
        heroFix={'hero-fix'}
      />

      <LMHTab
        title={tabContent.title}
        text={tabContent.text}
        cta={tabContent.cta}
      />

      <ImageText
        title={"Anchor’s Heavy Metal Fabrication Specialties"}
        content={CONTENT.one}
        isMarkdown={false}
        textPosition="left"
        image={ImageOne}
        fillColor="blue"
        page={currentPage}
        section={0}
        LMHContain="LMH-contain"
      />

      <ImageText
        title={"Anchor’s Heavy Metal Fabrication Capabilities"}
        content={CONTENT.two}
        isMarkdown={false}
        textPosition="right"
        image={ImageTwo}
        fillColor="tan"
        page={currentPage}
        section={1}
        LMHContain="LMH-contain"
      />

      <ImageText
        title={"Industries Anchor Has Served With Heavy Metal Fabrication"}
        content={CONTENT.three}
        isMarkdown={false}
        textPosition="left"
        image={ImageThree}
        fillColor="blue"
        page={currentPage}
        section={2}
      />
      <Certifications />
    </Layout>
  );
};

export default HeavyMetal;
