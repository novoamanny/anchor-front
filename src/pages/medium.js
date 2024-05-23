import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Hero from "../components/hero";
import heroImage from "../images/medium-header.jpg";
import ImageText from "../components/imageText";
import LMHTab from "../components/LMHTab";
import Certifications from "../components/certifications";

import ImageOne from "../images/med-one.jpg";
import ImageTwo from "../images/med-two.jpg";
import ImageThree from "../images/med-three.jpg";

const MediumMetal = ({ location: { pathname } }) => {
  const currentPage = pathname.split("/")[1];

  const tabContent = {
    title: "OEM Metal Fabrication Solutions",
    text:
      "As an OEM, you shouldn't be limited by your manufacturing needs. Anchor has you covered. Our custom metal fabrication services cover mid-gauge production like steel fabrication and aluminum fabrication, too. Really, we can handle all but the heaviest industrial fabrication. Working with a metal fabricator like Anchor Fabrication means having the full range of capabilities.",
    cta: "Request A Consultation",
  };

  const CONTENT = {
    one: ["Steel", "Aluminum"],
    two: ["Laser Cutting", "Machining", "Welding (CWB welders)", "Assembly"],
    three: ["Agriculture", "Construction", "Transportation"],
  };

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "medium-page",
        }}
      />
      <SEO title="Medium Metal Fabrication" />
      <Hero
        title="Medium Metal Fabrication"
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
        title={"Anchor’s Medium Metal Fabrication Specialties"}
        content={CONTENT.one}
        isMarkdown={false}
        textPosition="left"
        image={ImageOne}
        fillColor="tan"
        page={currentPage}
        section={0}
      />

      <ImageText
        title={"Anchor’s Medium Metal Fabrication Capabilities"}
        content={CONTENT.two}
        isMarkdown={false}
        textPosition="right"
        image={ImageTwo}
        fillColor="blue"
        page={currentPage}
        section={1}
      />

      <ImageText
        title={"Industries Anchor Has Served With Medium Metal Fabrication"}
        content={CONTENT.three}
        isMarkdown={false}
        textPosition="left"
        image={ImageThree}
        fillColor="tan"
        page={currentPage}
        section={2}
      />
      <Certifications />
    </Layout>
  );
};

export default MediumMetal;
