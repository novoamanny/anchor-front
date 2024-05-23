import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import ContactTab from "../components/contactTab";
import ServicesTab from "../components/Services/servicesTab";
import ImageText from "../components/imageText";
import FullImageText from "../components/fullImageText";
import ContactFull from "../components/contactFull";

import heroImage from "../images/contact-hero.jpg";
import fullImage from "../images/contact-full.jpg";
import ImageTextImage from "../images/contact-image-text.jpg";
import ImageTextImage2 from "../images/guy.jpg";

// Tab Images
import ImageOne from "../images/contact-tab-one.jpg";
import ImageTwo from "../images/contact-tab-two.jpg";
import ImageThree from "../images/contact-tab-three.jpg";
import ImageFour from "../images/contact-tab-four.jpg";

const Contact = ({ location: { pathname } }) => {
  const tabContent = [
    {
      url: ImageOne,
      Heading: "Anchor Fort Worth",
      Description:
        "Engineering’s ultimate goal is to design a manufacturing process that drives down the cost of production without compromising (while in some cases improving) the quality of the function of parts.",
      ButtonText: "Learn More",
      ButtonURL: "/locations/fort-worth",
    },
    {
      url: ImageTwo,
      Heading: "Anchor Mississippi",
      Description:
        "Without the need for cleaning or preparing materials before and after cutting, Anchor’s laser cutting services create precision cuts that reduce fit time for welders and ensure the part quality remains consistent.",
      ButtonText: "Learn More",
      ButtonURL: "/locations/mississippi",
    },
    {
      url: ImageThree,
      Heading: "Anchor Tennessee",
      Description:
        "Reserved for more robust metal cuts, Anchor’s plasma cutting services provide rapid, high-scale, and cost-effective cutting for a variety of materials.",
      ButtonText: "Learn More",
      ButtonURL: "/locations/tennessee",
    },
    {
      url: ImageFour,
      Heading: "Anchor Kansas",
      Description:
        "Developed for a broad array of fabrication competencies to provide customers with single-point, turn-key solutions to their complex fabrication requirements with seamless integration.",
      ButtonText: "Learn More",
      ButtonURL: "/locations/kansas",
    },
  ];

  return (
    <Layout>
      <SEO title="Contact" />
      {/* image={heroImage} */}
      <Hero
        title="Contact"
        page={pathname.split("/")[1]}
        
        image={heroImage}
      />
      <ContactTab />
      <section className="services-tabs .services-tabs contact-tabs">
        <div className="locations-tabs">
          <h2>Locations</h2>
        </div>

        {tabContent.map((tab, index) => {
          return (
            <ServicesTab tab={tab} key={tab.id} index={index > 2 ? 0 : index} contact={true} />
          );
        })}
      </section>
      <ImageText
        title={"Want To Work For Anchor?"}
        content={"See all available job postings by clicking the link below."}
        isMarkdown={true}
        textPosition={"right"}
        fillColor={"tan"}
        page={pathname.split("/")[1]}
        section={0}
        ctaUrl="/careers"
        ctaText={"View Jobs"}
        image={ImageTextImage2}
      />

      <ImageText
        title={"Contact Form"}
        content={null}
        form={true}
        formSection={0}
        isMarkdown={false}
        textPosition={"left"}
        fillColor={"blue"}
        page={pathname.split("/")[1]}
        section={1}
        image={ImageTextImage}
      />

      <ContactFull
        title="Request A Consultation"
        content={
          "Need some advice from someone who knows the ins and outs of custom metal fabrication? Let's chat."
        }
      />
    </Layout>
  );
};

export default Contact;
