import React from "react";
import { Link } from "gatsby";
import "../styles/footer.css";

import FW from "../pdf/FW.pdf";
import MS from "../pdf/MS.pdf";
import TN from "../pdf/TN.pdf";
import KS from "../pdf/KS.pdf";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-nav">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/light">Light</Link>
          <Link to="/medium">Medium</Link>
          <Link to="/heavy">Heavy</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resources/Blog">Blog</Link>
          <Link to="/careers">Careers</Link>
          {/* Place Holders */}
          <Link to="/"></Link>
          <Link to="/"></Link>
          <Link to="/"></Link>
        </div>
        <div className="footer-center">
          <span className="facebook-logo">f</span>
          <span className="social-text">
            Visit us on Facebook at
            <br />
            <a href="https://www.facebook.com/anchorfab" target="_blank">
              www.facebook.com/anchorfab
            </a>
          </span>
        </div>

        <div className="footer-contact-info">
          <p>
            <a style={{textDecoration: "underline"}} target="_blank" href={"/locations/fort-worth"}>Anchor Fabrication Fort Worth</a>
            <br />
            <a style={{textDecoration: "underline"}} target="_blank" href={FW}>ISO Certification</a>
            <br/>
            1035 Meacham Blvd, Fort Worth, TX 76106
            <br />
            1.800.635.0386
            <br />
            <a style={{textDecoration: "underline"}} target="_blank" href="/privacy-policy">Privacy Policy</a>
          </p>
          <p>
            <a style={{textDecoration: "underline"}} target="_blank" href={"/locations/tennessee"}>Anchor Fabrication Tennessee</a>
            <br />
            <a style={{textDecoration: "underline"}} target="_blank" href={TN}>ISO Certification</a>
            <br />
            130 Jones Blvd, La Vergne, TN 37086
            <br />
            615.793.3000
            <br />
          </p>
          <p>
            
            <a style={{textDecoration: "underline"}} target="_blank" href={"/locations/mississippi/"}>Anchor Fabrication Mississippi</a>
            <br />
            <a style={{textDecoration: "underline"}} target="_blank" href={MS}>ISO Certification</a>
            <br />
            501 Pulliam Road, Walnut, MS 38663
            <br />
            662.223.5339
            <br />
          </p>
          <p>
            
            <a style={{textDecoration: "underline"}} target="_blank" href={"/locations/kansas"}>Anchor Fabrication Kansas</a>
            <br />
            <a style={{textDecoration: "underline"}} target="_blank" href={KS}>ISO Certification</a>
            <br />
            2237 S. West Street Ct, Wichita, KS 67213
            <br />
            316.263.1318
            <br />
          </p>
        </div>
      </div>
      <div className="footer-right">
        <h4>
          Subscribe for Industry
          <br />
          News and Updates
        </h4>
        <form
          id="subscribe-form"
          action="https://formspree.io/f/xvolovrz"
          method="post"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            aria-label="email"
            required
          />
          <button class="cta-button" form="subscribe-form" value="Subscribe">
            Subscribe
          </button>
        </form>
        <p>2023 Copyright &copy; Anchor Fabrication</p>
      </div>
    </footer>
  );
};

export default Footer;
