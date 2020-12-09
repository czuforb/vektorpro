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

const IndexPage = () => (
  <Layout>
    <Header />
    <Hero />
    <Feature />
    <Goals />
    <TargetGroup />
    <Prices />
    <ContactFooter />
  </Layout>
)

export default IndexPage
