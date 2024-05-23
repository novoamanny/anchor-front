import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import ImageText from "../../components/imageText";

import heroImage from "../../images/eguides-header.jpg";
import assetURL1 from "../../e-guides-assets/The-perfect-partners.pdf";
import assetURL2 from "../../e-guides-assets/ACR_BOFU_the-anchor-difference_FINAL.pdf";
import assetURL3 from "../../e-guides-assets/ACR_Infographic.jpeg";
import assetURL4 from "../../e-guides-assets/7-Primary-Manufacturing-Struggles-of-OEM_FINAL.pdf";
import assetURL5 from "../../e-guides-assets/ACR_DesignEngineerOffer_FINAL.pdf";
import assetURL6 from "../../e-guides-assets/ACR_DesignerDangOfferVideo_FINAL.mp4";
import ImageTextImage from "../../images/image-sec-e-guide.jpg";
const Eguides = ({ location: { pathname } }) => {
  const content =
    "When we say, “Manufacturing Possibility,” we mean you can trust us to understand the nuances of the industry. These resources are food for thought for anyone who’s thinking of outsourcing custom metal fabrication.";
  const eGuideLinks = [
    {
      name: "Choose the Right Metal Fabrication Partner",
      assetURL: assetURL1,
    },
    {
      name: "The Anchor Difference",
      assetURL: assetURL2,
    },
    {
      name: "Compare Your Metal Fabrication Options",
      assetURL: assetURL3,
    },
    {
      name: "7 Primary Manufacturing Struggles of OEMs",
      assetURL: assetURL4,
    },
    {
      name: "What OEM Design Engineers Should Know",
      assetURL: assetURL5,
    },
    {
      name: "The Benefits of Outsourcing Metal Fabrication",
      assetURL: assetURL6,
    },
  ];
  return (
    <Layout>
      <SEO title="E-Guides" />
      <Hero
        title={"E-Guides"}
        page={pathname.split("/")[1] + "-" + pathname.split("/")[2]}
        image={heroImage}
      />
      <ImageText
        title={"Metal Fabrication Resources"}
        image={ImageTextImage}
        subtitleBlog={"Informative Consultation At Your Fingertips"}
        content={content}
        isMarkdown={true}
        textPosition="left"
        minHeight="500px"
        fillColor="white"
        page={pathname.split("/")[1] + "-" + pathname.split("/")[2]}
        section={0}
        eGuideLinks={eGuideLinks}
      />
    </Layout>
  );
};

export default Eguides;
