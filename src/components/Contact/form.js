import React from "react";

import "./form.css";
const Forms = ({ page, section }) => {

  let checked = false;
  if (section === 0) {
    return (
      <form
        id="contact-form"
        className="form-input-container"
        action="https://formspree.io/f/xoqrqqro"
        method="post"
      >
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
          type="text"
          name="Title"
          id="Title"
          placeholder="Title"
          aria-label="text"
          className="third"
        />
        <input
          type="text"
          name="Company"
          id="Company"
          placeholder="Company"
          aria-label="text"
          className="two-third"
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
          name="Industry"
          id="industry"
          placeholder="Industry"
          aria-label="text"
          className="one"
        />
        <input
          type="scroll"
          name="Interest"
          id="interest"
          placeholder="What's Your Interest In"
          aria-label="text"
          className="one"
        />
        <textarea
          type="textbox"
          name="Comments"
          id="comments"
          placeholder="Comments"
          aria-label="text"
          className="one"
        />
        <button className="cta-button" form="contact-form" value="Submit">
          Submit
        </button>
      </form>
    );
  }
  if (section === 1) {
    return (
      section === 1 && (
        <form
          id="request-a-consultation"
          className="form-input-container-full"
          action="https://formspree.io/f/xknynpbg"
          method="post"
        >
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
            type="text"
            name="Phone"
            id="phone"
            placeholder="(___)"
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
            name="Role"
            id="role"
            placeholder="Role"
            aria-label="text"
            className="one"
          />
          <input
            type="text"
            name="BusinessHeadquarters"
            id="bh"
            placeholder="Business Headquarters"
            aria-label="text"
            className="one"
          />

          <input
            type="text"
            name="Company"
            id="company"
            placeholder="Company"
            aria-label="text"
            className="half"
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
            placeholder="Are You Currently Outsourcing Your Metal Fabrication?"
            aria-label="text"
            className="one"
          />
          <div className="checkbox-container">
            <input type="checkbox" name="subscribe" value="yes" />

            <span>Subscribe to Anchor Fabrication Blog</span>
            <div className="cta-container">
              <button
                className="cta-button"
                form="request-a-consultation"
                value="Let's Connect"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </form>
      )
    );
  }
};
export default Forms;
