import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../../static/fonts.css"
import "typeface-inter"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../components/theme"
import { GlobalStyles } from "../components/global"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, setTheme] = useState('light')
  

  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={
            {
              // margin: `0 auto`,
              // maxWidth: 960,
              // padding: `0 1.0875rem 1.45rem`,
            }
          }
        >
          <main>{children}</main>
          <footer>
            {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          </footer>
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
