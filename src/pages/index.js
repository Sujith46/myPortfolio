import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../containers/container"

require("typeface-inter")

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <div className="details">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
