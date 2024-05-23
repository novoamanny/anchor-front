import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import heroImage from "../images/eguides-header.jpg";
const EGuideForm = ({ location: { pathname } }) => {
  return (
    <Layout>
      <Hero
        title="Download E-guides"
        page={"schedule-tour"}
        image={heroImage}
      />
      <div className="schedule-container">
        <form
          id="download-e-guide"
          className="form-input-container blue-form"
          action="https://formspree.io/f/xjvlgqag"
          method="post"
        >
          <h2>
            Fill out your information below to download your e-guide today!
          </h2>
          <input
            type="text"
            name="FirstName"
            id="FirstName"
            placeholder="First Name"
            aria-label="text"
            className="half"
            required
          />
          <input
            type="text"
            name="LastName"
            id="LastName"
            placeholder="Last Name"
            aria-label="text"
            className="half"
            required
          />
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="Email"
            aria-label="email"
            className="half"
            required
          />

          <input
            type="text"
            name="Company"
            id="Company"
            placeholder="Company"
            aria-label="text"
            className="half"
          />
          <input
            type="text"
            name="Phone"
            id="phone"
            placeholder="(___)"
            aria-label="text"
            className="half"
            required
          />
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Role"
            aria-label="text"
            className="half"
          />
          <input
            type="text"
            name="BusinessHeadquarters"
            id="bh"
            placeholder="Where is Your Business Headquartered"
            aria-label="text"
            className="one"
          />
          <input
            type="text"
            name="company-name"
            id="company-name"
            placeholder="Company Name"
            aria-label="text"
            className="one"
          />
          <input
            type="text"
            name="AnnualRevenue"
            id="revenue"
            placeholder="Annual Revenue"
            aria-label="text"
            className="half"
          />
          <input
            type="text"
            name="CurrentlyOutsourcing"
            id="out"
            placeholder="Are You Currently Outsourcing?"
            aria-label="text"
            className="half"
          />

          {/* <input
          type="scroll"
          name="Interest"
          id="interest"
          placeholder="What's Your Interest In"
          aria-label="text"
          className="one"
        /> */}
          {/* <div className="checkbox-container">
            <h3 >What services are you most interested in?</h3>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Turn Key Manufacturing</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Cutting: Plasma/Laser</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Tube Cutting/Forming</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Welding & Robotic Welding</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Machining</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Forming</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Assembly</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Coatings</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Stamping</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Punching</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Design Support</span>
            </div>
        </div> */}
          {/* <textarea
          type="textbox"
          name="Comments"
          id="comments"
          placeholder="What parts do you need manufactured?"
          aria-label="text"
          className="one"
        /> */}

          <div className="checkbox-container">
            <input type="checkbox" name="subscribe" value="yes" />

            <span>Subscribe to Anchor Fabrication Blog</span>
          </div>

          <button className="cta-button" form="download-e-guide" value="Submit">
            Download E-Guide
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EGuideForm;
