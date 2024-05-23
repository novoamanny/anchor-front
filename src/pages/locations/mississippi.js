import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import ImageText from "../../components/imageText";
import FullImageText from "../../components/fullImageText";
import LocationsTab from "../../components/locationsTab";

// Images
import heroImage from "../../images/Locations-hero.png";
import ITImage from "../../images/map-mississippi.png";
import fullImage from "../../images/Locations-full.jpg";

const Mississippi = ({ location: { pathname } }) => {
  const currentPage = pathname.split("/")[1] + "-" + pathname.split("/")[2];
  const tabContent =
    "Anchor’s Mississippi facilities focus primarily on mid-gauge metal fabrication and projects requiring impact press capability.";
  const ITContent = [
    {
      text: <li><a style={{textDecoration: 'underline'}}href='/services/plasma-cutting'>Plasma Cutting</a></li>,
      url: "/services/plasma-cutting",
    },
    {
      text: <li><a style={{textDecoration: 'underline'}}href='/services/Forming'>Precision Forming</a></li>,
      url: "/services/Forming",
    },
    {
      text: <li>Milling</li>,
      url: "/services",
    },
    {
      text: <li>Heat Treating</li>,
      url: "/services",
    },
    {
      text: <li>GSE Fabrication and Repair</li>,
      url: "/services",
    },
    {
      text: <li>Impact Fabrication</li>,
      url: "/services",
    },
    {
      text: <li>Clean Line</li>,
      url: "/services",
    },
    {
      text: <li><a style={{textDecoration: 'underline'}}href='/services/Welding'>Welding</a></li>,
      url: "/services/Welding",
    },
    {
      text: <li>Saw Cutting</li>,
      url: "/services",
    },
    {
      text: <li>Stamping</li>,
      url: "/services",
    },
    {
      text: <li>Painting</li>,
      url: "/services",
    },
  ];
  const FIContent =
    "While the various Anchor locations may focus on specific areas, we truly are one company where every custom metal fabrication dream is made possible. Facility capabilities overlap so we can make adjustments based on capacity for any given product. Our locations work closely together to ensure the entire production process is efficient for our clients. Talk to someone on our team about what it might look like to use multiple locations for a single project.";
  return (
    <Layout>
      <SEO titile="Mississippi" />
      <Hero
        title="Anchor Fabrication Mississippi"
        page={currentPage}
        image={heroImage}
      />
      <LocationsTab text={tabContent} title="Mississippi" page={currentPage} />
      <ImageText
        title={"Mississippi Metal Fabrication Services"}
        content={ITContent}
        isMarkdown={false}
        textPosition="left"
        minHeight="500px"
        fillColor="blue"
        page={currentPage}
        image={ITImage}
        section={0}
        imageContainLocations={'location-image-contain'}
      />
      <FullImageText
        content={FIContent}
        isMarkdown={true}
        ctaUrl="/schedule-tour"
        ctaText="Schedule a tour"
        page={currentPage}
        image={fullImage}
        section={0}
      />
    </Layout>
  );
};

export default Mississippi;
