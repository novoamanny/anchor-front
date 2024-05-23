import React, { useImperativeHandle, useRef } from "react";

import "../../styles/HamburgerMenu/HamburgerMenu.css";
import { Link } from "gatsby";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div
        role="button"
        tabIndex="0"
        className={this.state.open ? "menu open" : "menu"}
        onClick={() => this.close()}
        onKeyDown={() => this.close()}
        ref={this.props.innerRef}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/light">Light</Link>
        <Link to="/medium">Medium</Link>
        <Link to="/heavy">Heavy</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/resources/Blog">Blog</Link>
        <Link to="/download-e-guide">E-Guides</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }

  close() {
    this.setState({ open: false });
  }

  open() {
    this.setState({ open: true });
  }
}

export default React.forwardRef((props, ref) => {
  const menuRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open();
    },
  }));

  return <Menu ref={menuRef} {...props} />;
});
