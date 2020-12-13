import React from "react"

import Layout from "../components/Layout/Layout"
import FormContainer from "../components/Form/FormContainer"
import SEO from "../components/SEO"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" content="This is the contact page"/>
      <FormContainer />
    </Layout>
  )
}

export default Contact
