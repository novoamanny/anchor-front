import React from "react";
import Layout from "../components/layout";
import Helmet from "react-helmet";
import SEO from "../components/seo";
import ReactMarkdown from "react-markdown";

import Hero from "../components/hero";
import ServicesHeaderImg from "../images/Services/services-header.jpg";
import ImageText from "../components/imageText";
import FullImageText from "../components/fullImageText";
import FITImage from "../images/Services/fibg-overlay.jpg";
import SRILogo from "../images/Services/logo-sri-certified.png";
import ITImage from "../images/Services/machine-with-sparks.jpg";
import Tab from "../components/Services/tab";
import ServicesTab from "../components/Services/servicesTab";

// Tab Images
import ImageOne from "../images/Services/Group-1240.png";
import ImageTwo from "../images/Services/Group-1251.png";
import ImageThree from "../images/Services/Group-1252.png";
import ImageFour from "../images/Services/Group-1260.png";
import ImageFive from "../images/Services/Group-1253.png";
import ImageSix from "../images/Services/Group-1254.png";
import ImageSeven from "../images/Services/Group-1258.png";
import ImageEight from "../images/Services/Group-1259.png";
const link = <a>contact our sales team</a>
const FIContent = <p className='text-link-white'>Since 1990, Anchor Fabrication has planned and executed our growth strategies based on two factors: to better serve our clients and to remain dedicated to our core values. As a true, one-stop-shop, from engineering to final delivery, we have aligned our focus with yours to ensure that no matter what type of material, tolerances, quantities, or schedules you bring to us, we respond with your ideal fabrication plan. In the last few years, our strategic acquisitions have allowed us to expand into fabrication segments and specialties with like-minded companies and crews while growing our national footprint and capabilities. With more than 30 years’ experience and millions of parts delivered, your project’s unique requirements are well within our experience and expertise. Whether you need light, medium, or heavy fabrication — industrial or precision — please <a href='/contact'>contact our sales team</a> today. With nine manufacturing facilities reaching from Texas to Tennessee, our production capacity allows us to handle some of the largest metal fabrication projects in the industry. We look forward to serving you as your manufacturing partner.</p>
const IContent =
  "Anchor is ISO 9001:2015 certified, which validates our exceptional management practices and our focus on meeting our clients’ needs, time and time again.";

const Services = ({ location: { pathname } }) => {
  const tabContent = [
    {
      url: ImageOne,
      Heading: "Engineering",
      Description:
        "Engineering’s ultimate goal is to design a manufacturing process that drives down the cost of production without compromising (while in some cases improving) the quality of the function of parts.",
      ButtonText: "Learn More",
      ButtonURL: "/services/Engineering",
    },
    {
      url: ImageTwo,
      Heading: "Laser Cutting",
      Description:
        "Without the need for cleaning or preparing materials before and after cutting, Anchor’s laser cutting services create precision cuts that reduce fit time for welds and ensure the part quality remains consistent.",
      ButtonText: "Learn More",
      ButtonURL: "/services/laser-cutting",
    },
    {
      url: ImageThree,
      Heading: "Plasma Cutting",
      Description:
        "Reserved for more robust metal cuts, Anchor’s plasma cutting services provide rapid, high-scale, and cost-effective cutting for a variety of materials.",
      ButtonText: "Learn More",
      ButtonURL: "/services/plasma-cutting",
    },
    {
      url: ImageFour,
      Heading: "Forming",
      Description:
        "Through lean manufacturing best practices, we also optimize the forming process to limit part re-dos and improve efficiency.",
      ButtonText: "Learn More",
      ButtonURL: "/services/Forming",
    },
    {
      url: ImageFive,
      Heading: "Machining",
      Description:
        "We curate code for our machines to ensure the most accurate and timely products possible. Our tool changes are lightning quick and can be made in as few as 3 seconds.",
      ButtonText: "Learn More",
      ButtonURL: "/services/Machining",
    },
    {
      url: ImageSix,
      Heading: "Welding",
      Description:
        "Not every steel fabricator employs certified weld inspectors (CWIs) for their welding manufacturing, but Anchor is one of the custom metal fabricators that does.",
      ButtonText: "Learn More",
      ButtonURL: "/services/Welding",
    },
    {
      url: ImageSeven,
      Heading: "Coating",
      Description:
        "Designed as a one-stop custom metal fabrication shop, Anchor Fabrication offers coating as a value add-on to your final products.",
      ButtonText: "Learn More",
      ButtonURL: "/services/Coating",
    },
    {
      url: ImageEight,
      Heading: "Assembly",
      Description:
        "In creating a manufacturing process for a product design, our engineering team will design for assembly.",
      ButtonText: "Learn More",
      ButtonURL: "/services/Assembly",
    },
  ];

  const currentPage = pathname.split("/")[1];

  return (
    <Layout>
      <Helmet
        bodyAttributes={{
          class: "services-page",
        }}
      />
      <SEO title="Services" />
      <Hero
        title="Custom Metal Fabrication Services"
        image={ServicesHeaderImg}
        page={currentPage}
      />
      <Tab />
      <FullImageText
        title={"Over 1.25 Million Square Feet of Metal Fabrication Power"}
        content={FIContent}
        isMarkdown={false}
        ctaUrl="/schedule-tour"
        ctaText="Schedule a tour"
        page={currentPage}
        section={0}
        image={FITImage}
      />
      <ImageText
        logo={SRILogo}
        image={ITImage}
        title={"ISO 9001:2015 Certified"}
        content={IContent}
        isMarkdown={true}
        textPosition="left"
        fillColor="blue"
        page={currentPage}
        section={0}
      />

      {/* Need to make this a component. It is being used on index.js */}
      <section className="services-tabs .services-tabs">
        {tabContent.map((tab, index) => {
          return <ServicesTab tab={tab} key={tab.id} index={index} />;
        })}
      </section>
    </Layout>
  );
};

export default Services;
