import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Container from "../containers/container"
import Home from '../components/home'

require("typeface-inter")

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <Home />
    </Container>
  </Layout>
)

export default IndexPage
