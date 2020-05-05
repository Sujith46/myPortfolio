import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../containers/container"
import Home from '../components/home'
import Service from "../components/service"
import Services from "../components/services"



require("typeface-inter")

const IndexPage = () => {
  return (
  
    <Layout>
      <Container>
        <SEO title="Home" />
        <Home />
      </Container>
      {/* <Service /> */}

    </Layout>

)}

export default IndexPage
