import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavButton from "./nav-button"
import styles from "./header.module.css"
import AstroIcon from "../../svg/astrologo.svg"
import EarthIcon from "../../svg/landscapelogo.svg"

class Header extends React.Component {
  constructor(props) {
    super(props);
    
  }

  propTypes = {
    siteTitle: PropTypes.string,
    opacityIndex: PropTypes.number,
    pageTitle: PropTypes.string,
  };
  
  defaultProps = {
    siteTitle: ``,
    opacityIndex: 0.5,
    pageTitle: "Sahir Vellani",
  };

  render() {
    return (<header
      style={{
        position: 'fixed',
        width: '100%',
        background: 'rgba(10, 10, 10, 0.98)',
        transition: 'opacity 0.2s ease-in-out',
        zIndex: 1,
        top: 0,
      }}
      className={this.props.pageTitle === "Sahir Vellani" ? styles.dontshowheader : styles.showheader}
    >
      <div style={{
        paddingLeft: "11%",
        float: "left",
        display: this.props.pageTitle === "Sahir Vellani" ? "none" : "inline-block",
      }}>
        <NavButton to="/">Sahir Vellani</NavButton>
      </div>
      <div
        style={{
          maxWidth: 960,
          paddingRight: `11%`,
          float: "right",
        }}
      >
        <NavButton to="/astro/"><AstroIcon /></NavButton>
        <NavButton to="/travel/"><EarthIcon /></NavButton>
        {/* <NavButton to="/tech/">Tech</NavButton> */}
      </div>
    </header>);
  }
}

export default Header
