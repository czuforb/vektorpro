import React from "react"
import image2 from "../img/02.png"
import image1 from "../img/01.png"

import styled from "@emotion/styled"
// Components
import Layout from "../components/layout"
import Header from "../components/header"
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Goals from "../components/Goals"
import TargetGroup from "../components/TargetGroup"
import Prices from "../components/Prices"
import ContactFooter from "../components/ContactFooter"
import Places from "../components/Places"
import Hero2 from "../components/Hero2"

const IndexPage = () => (
  <Layout>
    <Header />
    <Hero2 />
    <ImageMobile>
      <img src={image2} alt="vektor pro image 12" />
    </ImageMobile>
    <ImageMobile2>
      <img src={image1} alt="vektor pro image 12" />
    </ImageMobile2>
    <Feature />
    <Goals />
    <TargetGroup />
    <Prices />
    <Places />
    <ContactFooter />
  </Layout>
)

const ImageMobile = styled.div`
  @media (min-width: 1080px) {
    display: none;
  }
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  margin-top: -125px;
  margin-left: 25%;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`
const ImageMobile2 = styled.div`
  @media (min-width: 1080px) {
    display: none;
  }
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  margin-top: -160px;
  margin-left: 55%;
  img {
    width: 150px;
    height: 170px;
    object-fit: cover;
  }
`

export default IndexPage
