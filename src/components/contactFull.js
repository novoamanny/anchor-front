import React from "react";
import Forms from "./Contact/form";

import "../styles/contactFull.css";
import backgroundImage from "../images/contact-full.jpg";
const ContactFull = ({ title, subTitle, content }) => {
  return (
    <section
      className="ContactFull"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: `cover`,
      }}
    >
      <div className="left">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="right">
        <Forms page={"contact"} section={1} />
      </div>
    </section>
  );
};
export default ContactFull;
