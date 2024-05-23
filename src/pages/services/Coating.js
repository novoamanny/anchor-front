import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import ServicesHeaderImg from "../../images/coating-hero.jpg";
import ImageText from "../../components/imageText";
import ImageTextImage from "../../images/coating-1.jpeg";
import ImageTextImage2 from "../../images/con.jpg";
import ImageTextImage3 from "../../images/wet.jpg";
// import FullImageText from '../../components/fullImageText';
// import Certifications from '../../components/certifications';

// import FullImage from '../../images/about-welder.jpg';

const Coating = ({ location: { pathname } }) => {
  const ITContent = [
    {
      Heading: "Custom Sheet Metal Fabrication",
      Description:
        "To add value to our manufacturing services, Anchor Fabrication created the coating department. Typical fabricators contract out this service and pass the expense and added time along to their customers. Anchor’s in-house metal coating services save our clients’ time and money while allowing us to deliver some of the most durable finishes in the industry. We quality check our powder coats up to a 3,000 hour salt spray test. This ensures that the coats we apply will withstand the elements and rigors of the field without degradation. We offer both wet coating and plasma coating, abiding by standards that limit and eliminate contaminants that affect the coating environment.",
      cta: "Request A Consultation",
    },
    {
      Heading: "Considerable Metal Coating Canvas",
      Description:
        "Our capacity for coating is impressive. Several large-scale automated and manual coating lines allow us to finish multiple products at once. Our current powder-coating lines allow us to handle parts 10'x10'x24' long and 6,000 lbs. With recent upgrades to our coating capabilities, we have the capacity to handle multiple, large-scale projects simultaneously.",
    },
    {
      Heading: "Wet Coating and Powder Coating",
      Description:
        "Anchor’s custom coating booths grant us the capability to make your coating vision a reality. Whether you require a simple base coat or a comprehensive multi-coat finish, you'll like what you see. For even more durable coatings, we offer powder coating in addition to wet coating as part of our custom sheet metal fabrication offering.",
      cta: "Schedule A Tour",
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
      <SEO title="Coating" />
      <Hero
        title="Coating Services"
        image={ServicesHeaderImg}
        page={currentPage}
      />
      {ITContent.map((item, index) => {
        return (
          <ImageText
            title={item.Heading}
            content={item.Description}
            isMarkdown={true}
            textPosition={index === 1 ? "right" : "left"}
            minHeight="30vw"
            fillColor={index === 0 ? "white" : index === 1 ? "tan" : "blue"}
            page={currentPage}
            section={index}
            image={
              index === 0
                ? ImageTextImage
                : index === 1
                ? ImageTextImage2
                : ImageTextImage3
            }
            ctaText={
              index === 0
                ? "Request A Consultation"
                : index === 2 && "Schedule A Tour"
            }
            ctaUrl={index === 0
                      ? "/contact/#request-a-consultation"
                      : "/schedule-tour"}
          />
        );
      })}
    </Layout>
  );
};

export default Coating;
