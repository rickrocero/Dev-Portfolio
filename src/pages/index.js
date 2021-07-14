import React from "react"
import "@fontsource/quicksand/300.css"

import Navbar from '../components/Navbar/navbar'
import Intro from '../components/Intro/intro'
import Footer from '../components/Footer/footer'
import About from '../components/about'
import './index.scss'

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Footer />
    </>
  )
}

export default IndexPage
