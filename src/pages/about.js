import React from "react"

import Layout from "../components/layout"
import Container from "../containers/container"

import "../components/scss/about.scss"
import Technology from "../components/technology"

const About = () => {
  return (
    <Layout>
      <Container>
        <div className="about">
          <h1>About me</h1>
          <div className="about-me">
            <p>
              I'am Sujith, a web developer and a creative desiginer. In free
              time i write things about ancient histroy, space science and
              self-impovement.
            </p>
            <p>
              Currently am focusing on UX design and mobile
              development(Flutter).
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <div className="technology-exp">
          <h2>Experience</h2>
          <p>
            Below shows the technology that i have worked on/currently working
            in:
          </p>
        </div>
      </Container>
      <Container>
        <Technology />
      </Container>
    </Layout>
  )
}

export default About
