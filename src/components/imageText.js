/**
 * This is a component that will render image along with text side by side
 * You can configure it to determine if you want the text on the left or right side
 * @prop {String} title - primary title of the header
 * @prop {String} subtitle - secondary title of the header
 * @prop {Boolean} isMarkdown - set to true if the content is markdown. It will convert to HTML if true
 * @prop {String} content - body content to display
 * @prop {String} image - the URL of the image, including the root relative path
 * @prop {String} textPosition - either "left" or "right"
 * @prop {String} ctaUrl - the URL of a CTA if you want one
 * @prop {String} ctaText - the text of a CTA if you want one
 * @prop {String} minHeight - css value of a min height
 * @prop {String} fillColor - what color the fill should be for the content
 *
 * TODO: Need to adjust the CSS (see imageText.css) to get the content flexible
 * Reference: See `home-section-1`
 *
 * TODO: There are variations with different "widths". Should be trivial to add a prop for
 * how wide we want a section (40/60) and use classes how we need to adjust widths
 *
 * TODO: The "text on the right" needs the angles adjusted
 */
import React from "react";
import "../styles/imageText.css";
import { graphql, useStaticQuery, Link } from "gatsby";
import Forms from "../components/Contact/form";

import ReactMarkdown from "react-markdown";

const imageText = ({
  form,
  formSection,
  formContact,
  eGuideLinks,
  blogUrl,
  blogId,
  posted,
  reverse,
  logo,
  page,
  section,
  title,
  subtitle,
  subtitleBlog,
  content,
  isMarkdown,
  image,
  textPosition,
  ctaUrl,
  ctaText,
  minHeight,
  fillColor,
  imageContain,
  imageContainV2,
  imageContainLocations,
  LMHContain,
  resourcesContain
}) => {
  const defaultImage = "/static/welder-10c6fd8e455b16b421a344183758d5c3.jpg";
  const backgroundImage = image ?? defaultImage;

  // Blog Page
  const reverseSection =
    (page === "resources-Blog" || "resources-News") && (reverse ? "reverse-section" : "odd-section");

  let classTextPosition;
  let classFill;
  if (textPosition === "left" || !textPosition) {
    classTextPosition = "text-left";
  }
  if (textPosition === "right") {
    classTextPosition = "text-right";
  }
  if (!fillColor) {
    classFill = "fill-purple";
  } else {
    classFill = `fill-${fillColor}`;
  }
  return (
    <section
      className={`image-text ${classTextPosition} ${classFill} ${page}-section-${section} ${reverseSection} ${imageContain} ${imageContainV2} ${imageContainLocations} ${LMHContain} ${resourcesContain}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: minHeight,
      }}
    >
      <div className={`content ${page} ${logo && `${page}-logo-container`}`}>
        {logo && (
          <div className={`${page}-logo`}>
            <img src={logo} />
          </div>
        )}
        {title && subtitle && (
          <h2>
            <span>{`${title}: `}</span>
            {subtitle}
          </h2>
        )}

        {title && !subtitle && <h2>{title}</h2>}
        {(page === "resources-Blog" || "resources-News") && subtitleBlog && (
          <div className={`${page}-subtitle`}>
            <h3>{subtitleBlog}</h3>
            <h5>{`Anchor Fabrication Team | ${posted}`}</h5>
          </div>
        )}
        {page === "resources-e-guides" && subtitleBlog && (
          <div className={`${page}-subtitle`}>
            <h3>{subtitleBlog}</h3>
          </div>
        )}
        {isMarkdown && content && (
          <ReactMarkdown className={`${page}-text`}>{content}</ReactMarkdown>
        )}
        {!isMarkdown &&
          content &&
          page === "services-Assembly" &&(
            <p className='text-link-blue'>Not only will Anchor <a href={'/services/laser-cutting'}>cut</a>, <a href='/services/Welding'>weld</a>, <a href='/services/Forming'>form</a>, <a href='/services/Machining'>machine</a> and <a href='/services/Coating'>coat</a> your parts, we'll assemble, package, and ship your final finished products. Our recent expansion added more assembly capacity in order to meet the demands of OEMs who would rather invest resources in R&D or product shipment. With this focus, our <a href='/services/Engineering'>engineering</a> team will design for assembly. We have the equipment and the capacity to do the heavy lifting for clients that need a turn-key service from their custom metal fabrication partner.</p>
          )
            
          }
          {!isMarkdown &&
          !content &&
          page === "services-Assembly" &&(
            <p className='text-link-white'>With efficient assembly processes and <a href='/project-management-quality-control/#p'>diligent quality testing</a>, Anchor assemblies are designed to give you consistently accurate final products. Once assembled, we ensure your products are safely packaged and shipped. Our assembly production can involve short- or long-run parts and sub-assemblies such as bolts, washers, handles, shocks, or hinges. Our team can even put decals on the final product to further reduce your handling costs. As a true, one-stop-shop, why not let Anchor take your product from concept to completion?</p>
          )
            
          }
        {!isMarkdown &&
          content &&
          page === "services-Welding" &&
          content.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
           {!isMarkdown &&
          content &&
          page === "services-laser-cutting" &&(
            <p className='text-link-white'>Anchor's laser cutting department can hold tolerances up to +/-.005 of an inch. Not only will your part be completed quickly, but your tolerance expectations will also be met with confidence. Using VA/VE, we also inform OEMs if their parts are over or under-toleranced. This allows us to optimize costs while delivering parts that don't compromise on quality. As a final step in our process, we rely heavily on our risk management team to make certain we meet our products' tolerance targets, among other <a href='/project-management-quality-control'>quality standards</a>.</p>
          )
            
          }
          {!isMarkdown &&
          content &&
          page === "services-Machining" &&(
            <p className='text-link-white'>Anchor’s machining shop features the capacity for high-volume work, so complex projects can be executed without hassle. We can also machine larger parts after the <a href='/services/Welding'>welding process</a>, which is a service you won't find with any steel fabricator.</p>
          )
            
          }
          
        {!isMarkdown &&
          content &&
          page.split("-")[0] === "locations" &&
          content.map((item, index) => {
            return (
              <a key={index}>
                {item.text}
              </a>
            );
          })}
        {!isMarkdown &&
          content &&
          page === "light" &&
          content.map((item, index) => {
            let links = [
              '/services/Engineering',
              '/services/Coating',
              '/services/Assembly',
              '/services/Forming',
              '/services/Welding',
              '/services/laser-cutting',
            ]
            if(section === 1){
              return <li className='text-link-white' key={index}><a href={links[index]}>{item}</a></li>
            }
            else{
              return <li key={index}>{item}</li>;
            }
        
          })}
        {!isMarkdown &&
          content &&
          page === "medium" &&
          content.map((item, index) => {
            let links = [
              '/services/laser-cutting',
              '/services/Machining',
              '/services/Welding',
              '/services/Assembly',
            ]
            if(section === 1){
              return <li className='text-link-white' key={index}><a href={links[index]}>{item}</a></li>
            }
            else{
              return <li key={index}>{item}</li>;
            }
          })}
        {!isMarkdown &&
          content &&
          page === "heavy" &&
          content.map((item, index) => {
            let links = [
              '/services/Engineering',
              '/services/laser-cutting',
              '/services/plasma-cutting',
              '/services/Forming',
              '/services/Machining',
              '/services/Welding',
              '/services/Coating',
              '/services/Assembly',
            ]
            if(section === 1){
              return <li className='text-link-white' key={index}><a href={links[index]}>{item}</a></li>
            }
            else{
              return <li key={index}>{item}</li>;
            }
          })}
        {!isMarkdown && formContact && <div></div>}
        {page === "contact" && form && (
          <Forms page={page} section={formSection} />
        )}
        {ctaUrl && ctaText && (
          <a className="cta" href={ctaUrl}>
            {ctaText}
          </a>
        )}
        {blogUrl && ctaText && (
          <Link className="cta" to={blogUrl} state={{ id: blogId }}>
            {ctaText}
          </Link>
        )}
        {page === "resources-e-guides" && eGuideLinks && (
          <div className="e-guide-links">
            {eGuideLinks.map((link, index) => {
              return (
                <a href={link.assetURL} className="e-guide-link" download>
                  {link.name}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default imageText;
