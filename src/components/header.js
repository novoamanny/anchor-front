import * as React from "react";
import PropTypes from "prop-types";
import NavBar from "./navBar";

const headerStyle = {
  position: "relative",
  zIndex: "100",
};

const Header = ({ siteTitle }) => (
  <header style={headerStyle}>
    <NavBar />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
