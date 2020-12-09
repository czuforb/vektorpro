import React from "react"

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

const IndexPage = () => (
  <Layout>
    <Header />
    <Hero />
    <Feature />
    <Goals />
    <TargetGroup />
    <Prices />
    <Places />
    <ContactFooter />
  </Layout>
)

export default IndexPage
