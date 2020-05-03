import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./scss/header.scss"
import "typeface-inter"
import mouse from "../../static/mouse_1.svg"

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      background: `#202020`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="header-wrapper"
      style={{
        margin: `0 auto`,
        maxWidth: 800,
        padding: `1.45rem 0`,
      }}
    >
      <div className="identity">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img className="mouse-logo" src={mouse}></img>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
