import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Hero from "../components/hero";
import heroImage from "../images/worker-holding-metal-sheet.jpg";
import ImageOne from "../images/worker-using-machine-light.jpg";
import ImageTwo from "../images/welder-light.jpg";
import ImageThree from "../images/light-metal-cylinders.jpg";
import ImageText from "../components/imageText";
import LMHTab from "../components/LMHTab";
import Certifications from "../components/certifications";

const LightMetal = ({ location: { pathname } }) => {
  const currentPage = pathname.split("/")[1];
  // const heroImage =
  // "/static/the-anchor-difference-49e0bdc00bb0bf313f4826702038455a.jpg";

  const tabContent = {
    title: "Custom Metal Fabrication With An Aesthetic Requirement",
    text:
      "Some metal manufacturing products require gentler handling. As a true one-stop custom metal fabrication shop, Anchor has taken that into consideration and ensured capabilities to meet even the most aesthetic metal manufacturing need for clients, from conception through assembly.",
    cta: "Request A Consultation",
  };

  const CONTENT = {
    one: [
      "Thin gauge aluminum fabrication",
      "Stainless steel fabrication",
      "Mild steel",
      "Specialty steel components",
    ],
    two: [
      "Engineering",
      "Coating",
      "Assembly",
      "Forming (punching, bending, stamping, etc.)",
      "Welding",
      "Laser Cutting",
    ],
    three: [
      "Renewable Energy",
      "Automotive",
      "Appliances",
      "Class & Tracking",
      "Telecommunications",
      "Electrical Enclosures",
      "Air Moving & Handling Equipment",
      "Power Generation & Transmission",
    ],
  };

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "light-page",
        }}
      />
      <SEO title="Light Metal Fabrication" />
      <Hero
        title="Light Metal Fabrication"
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
        title={"Anchor’s Light Metal Fabrication Specialties"}
        content={CONTENT.one}
        isMarkdown={false}
        textPosition="left"
        image={ImageOne}
        fillColor="blue"
        page={currentPage}
        section={0}
      />

      <ImageText
        title={"Anchor’s Light Metal Fabrication Capabilities"}
        content={CONTENT.two}
        isMarkdown={false}
        textPosition="right"
        image={ImageTwo}
        fillColor="tan"
        page={currentPage}
        section={1}
      />

      <ImageText
        title={"Industries Anchor Has Served With Light Metal Fabrication"}
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

export default LightMetal;
