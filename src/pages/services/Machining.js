import React from "react";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/hero";
import ServicesHeaderImg from "../../images/Services/service-single-header.jpg";
import ImageText from "../../components/imageText";
import ImageTextImage from "../../images/welder-light.jpg";
import ImageTextImage2 from "../../images/Raising.jpg";
import ImageTextImage3 from "../../images/Need.jpg";
// import FullImageText from '../../components/fullImageText';

// import FullImage from '../../images/about-welder.jpg';

const Machining = ({ location: { pathname } }) => {
  const ITContent = [
    {
      Heading: "Timely Metal Fabrication",
      Description:
        "With more than 100 years of combined experience and meeting tolerances at +/-.0005 of an inch, our machining department can confidently satisfy any client demand. VA/VE is integrated into every aspect of Anchor's custom metal fabrication process to ensure that we're as efficient as possible with our processes and material usage without compromising accuracy or quality. ",
      cta: "Request A Consultation",
    },
    {
      Heading: "Raising The Volume",
      Description:
        "Anchor’s machining shop features the capacity for high-volume work, so complex projects can be executed without hassle. We can also machine larger parts after the welding process, which is a service you won't find with any steel fabricator.",
    },
    {
      Heading: "Need For Speed",
      Description:
        "We craft code for our machines to ensure the most accurate and timely fabrication possible. Our  tool changes are lightning quick and can be made in as few as three seconds. With our variety of lathes (large and small), as well as our multi-axis machines, we promptly turn around projects of just about any size in a singular setup. This increases efficiency and immensely cuts down product-creation time.",
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
      <SEO title="Machining" />
      <Hero title="Machining" image={ServicesHeaderImg} page={currentPage} />
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
              ctaText={"Request A Consulation"}
              ctaUrl={"/contact/#request-a-consultation"}
            />
          );
        }
        if(index === 1){
          return(
            <ImageText
              title={item.Heading}
              content={item.Description}
              isMarkdown={false}
              textPosition={index === 1 ? "right" : "left"}
              minHeight="30vw"
              fillColor={index === 1 ? "tan" : "blue"}
              page={currentPage}
              section={index}
              image={index === 1 ? ImageTextImage2 : ImageTextImage3}
              ctaText={index === 2 && "Schedule A Tour"}
              ctaUrl={"/schedule-tour"}
            />
          )
            
        }
        
        else {
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
              image={index === 1 ? ImageTextImage2 : ImageTextImage3}
              ctaText={index === 2 && "Schedule A Tour"}
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

export default Machining;
