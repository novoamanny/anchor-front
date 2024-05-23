import React, {useEffect, useState, useRef} from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/navBar.css";
import mobileLogo from "../images/mobile-logo.png";


// const OwlCarousel = Loadable(() => import('react-owl-carousel'));


const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiNewsPost(limit: 3, sort: { fields: published_at, order: DESC }) {
        nodes {
          id
          Title
          slug
        }
      }
    }
  `);

  const latestPosts = data.allStrapiNewsPost.nodes;    
  
  const childMenuRef = useRef(null);

  const toggleMenu = () => {
    // Define your logic to open the menu here
    // For example, if HamburgerMenu has an open method, you can call it
    // childMenu.open();
    console.log("toggleMenu: " + childMenuRef);
    if (childMenuRef.current) {
      childMenuRef.current.open();
    }
  };

  return (
    <>
      <nav>
    
    <div className="carousel-container">
      <div class='static'>
        <h2>Latest News</h2>
      </div>
      
    <section class="enable-animation">

      <div class="marquee marquee--hover-pause">
        <ul class="marquee__content">
          {latestPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/resources/news/${post.slug}`}>{post.Title}</Link>
            </li>
          ))}
        </ul>
        
        <ul class="marquee__content" aria-hidden="true">
          {latestPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/resources/news/${post.slug}`}>{post.Title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

      <div class='button-container'>
        <a class="cta-button" href='/resources/News'>Archive</a>
      </div>
    </div>
        <div class="navigation height" style={{width: 100 + '%'}}>
          <div className="nav-left">
            <Link to="/about" activeClassName="active">
              About
            </Link>
            <Link to="/services" activeClassName="active">
              Services
              <div className="submenu">
                <Link to="/services/Engineering">Engineering</Link>
                <Link to="/services/laser-cutting">Laser Cutting</Link>
                <Link to="/services/plasma-cutting">Plasma Cutting</Link>
                <Link to="/services/Forming">Forming</Link>
                <Link to="/services/Machining">Machining</Link>
                <Link to="/services/Welding">Welding</Link>
                <Link to="/services/Coating">Coating</Link>
                <Link to="/services/Assembly">Assembly</Link>
              </div>
            </Link>
            <Link to="/light" activeClassName="active">
              Light
            </Link>
            <Link to="/medium" activeClassName="active">
              Medium
            </Link>
          </div>
          <div className="nav-center">
            <Link to="/">
              <StaticImage
                className="anchor-logo"
                src="../images/anchor-logo.svg"
                alt="Anchor Fabrication Logo"
                layout="constrained"
              />
            </Link>
          </div>
          <div className="nav-right">
            <Link to="/heavy" activeClassName="active">
              Heavy
            </Link>
            <Link to="/resources" activeClassName="active">
              Resources
              <div className="submenu">
                <Link to="/resources/Blog">Blog</Link>
                <Link to="/resources/News">News</Link>
                <Link to="/download-e-guide">E-Guides</Link>
              </div>
            </Link>
            <Link to="/careers" activeClassName="active">
              Careers
            </Link>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </div>
        </div>

        <div className="mobile-nav">
          <div className="mobile-nav-logo">
            <Link to="/">
              <img src={mobileLogo} />
            </Link>
          </div>
          <div
            class="hamburger-icon"
            id="icon"
            onClick={() => toggleMenu()}
          >
            <div class="icon-1" id="a"></div>
            <div class="icon-2" id="b"></div>
            <div class="icon-3" id="c"></div>
            <div class="clear"></div>
          </div>
        </div>
        
      </nav>
      <HamburgerMenu ref={childMenuRef} />
    </>
  );
}

export default NavBar;