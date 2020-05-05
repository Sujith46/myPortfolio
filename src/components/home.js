import React from "react"
import Image from "../components/image"

import '../components/scss/home.scss'
import DayNight from "./daynight"
const Home = () => {
  return (
    <div className="hero-wrapper">
      <div className="details">
        <h1>Hi, I'am Sujith</h1>
        <p>Iam a web developer and a creative designer.</p>
      </div>
      <div className="intro-card" style={{ maxWidth: `300px`, marginBottom: `1.45rem`, textAlign: `center` }}>
        <Image />
        <DayNight />
      </div>
    </div>
  )
}

export default Home