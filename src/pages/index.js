import React from "react"

import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO"

export default () => {
  return (
    <Layout>
      <SEO title="Home" content="This is our home page" />
      <Hero />
    </Layout>
  )
}