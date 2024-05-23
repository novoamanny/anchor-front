/**
 * This is a component that will render text over a background
 * @prop {String} title - primary title of the header
 * @prop {String} subtitle - secondary title of the header
 * @prop {Boolean} isMarkdown - set to true if the content is markdown. It will convert to HTML if true
 * @prop {String} content - body content to display
 * @prop {String} image - the URL of the image, including the root relative path
 * @prop {String} ctaUrl - the URL of a CTA if you want one
 * @prop {String} ctaText - the text of a CTA if you want one
 */
import React from "react";
import "../styles/fullImageText.css";
import ReactMarkdown from "react-markdown";
import Forms from "../components/Contact/form";

const imageText = ({
  page,
  form,
  formSection,
  section,
  title,
  subtitle,
  content,
  isMarkdown,
  image,
  ctaUrl,
  ctaText,
}) => {
  const defaultImage = "/static/about-welder.jpg";
  const backgroundImage = image ?? defaultImage;
  return (
    <section
      className={`full-image-text ${page}-image-section-${section}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={`content ${page}`}>
        {title && subtitle && (
          <div className={page === "contact" && "contact-left"}>
            <h2>
              <span>{`${title}: `}</span>
              {subtitle}
            </h2>
          </div>
        )}

        {title && !subtitle && <h2>{title}</h2>}
        {isMarkdown && content && (
          <div className="text">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
        {!isMarkdown && content && <div className="text">{content}</div>}
        {page === "contact" && form && (
          <div className="form-right">
            <Forms page={page} section={formSection} />
          </div>
        )}
        {ctaUrl && ctaText && (
          <div className='center-cta'>
          
          <a className="cta-button" href={ctaUrl}>
            {ctaText}
          </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default imageText;
