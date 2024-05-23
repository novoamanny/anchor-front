import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import ImageText from "../../components/imageText";
import FullImageText from "../../components/fullImageText";
import LocationsTab from "../../components/locationsTab";

// Images
import heroImage from "../../images/Locations-hero.png";
import ITImage from "../../images/map.png";
import fullImage from "../../images/Locations-full.jpg";

const FortWorth = ({ location: { pathname } }) => {
  const currentPage = pathname.split("/")[1] + "-" + pathname.split("/")[2];
  const tabContent =
    "Our Fort Worth, Texas facilities focus primarily on heavy gauge metal and large welded components and assemblies. We have welding expertise as well as tool design and prototype capabilities.";
  const ITContent = [
    {
      text: <li><a style={{textDecoration: 'underline'}}href='/services/laser-cutting'>Laser</a> and <a style={{textDecoration: 'underline'}}href='/services/plasma-cutting'>Plasma</a> Cutting</li>,
      url: "/services/laser-cutting",
    },
    {
      text:<li><a style={{textDecoration: 'underline'}}href='/services/Forming'>Precision and Industrial Forming</a></li>,
      url: "/services",
    },
    {
      text: <li><a style={{textDecoration: 'underline'}}href='/services/Machining'>Machining</a> and Milling</li>,
      url: "/services/Machining",
    },
    {
      text: <li><a style={{textDecoration: 'underline'}}href='/services/Welding'>Manual Weld</a></li>,
      url: "/services/Welding",
    },
    {
      text: <li><a style={{textDecoration: 'underline'}}href='/services/Welding'>Robotic Weld</a></li>,
      url: "/services/Welding",
    },
    {
      text: <li><a style={{textDecoration: 'underline'}}href='/services/Coating'>Wet and Powder Coating</a></li>,
      url: "/services/Coating",
    },
    {
      text: <li><a style={{textDecoration: 'underline'}}href='/services/Assembly'>Assembly</a></li>,
      url: "/services/Assembly",
    },
    {
      text: <li>Punching</li>,
      url: "/services",
    },
    {
      text: <li>Bending</li>,
      url: "/services",
    },
  ];
  const FIContent =
    "While the various Anchor locations may focus on specific areas, we truly are one company where every custom metal fabrication dream is made possible. Facility capabilities overlap so we can make adjustments based on capacity for any given product. Our locations work closely together to ensure the entire production process is efficient for our clients. Talk to someone on our team about what it might look like to use multiple locations for a single project.";
  return (
    <Layout>
      <SEO titile="Forth-Worth" />
      <Hero
        title="Anchor Fabrication Fort Worth"
        page={currentPage}
        image={heroImage}
      />
      <LocationsTab
        text={tabContent}
        title="Fort Worth, Texas"
        page={currentPage}
      />
      <ImageText
        title={"Texas Metal Fabrication Services"}
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

export default FortWorth;
