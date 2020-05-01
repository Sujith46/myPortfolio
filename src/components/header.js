import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './scss/header.scss'

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
          Sujith
        </Link>
        </div>
        <div className="nav-links">
          <Link to="/"
          >
            About
          </Link>
          <Link to="/"
          >
            Articles
          </Link>
          <Link to="/"
          >
            Contact
          </Link>
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
