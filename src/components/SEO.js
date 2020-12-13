import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, content }) => {
  const { site: { siteMetadata } } = useStaticQuery(query);
  const { image, description, siteTitle } = siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={content || description} />
      <meta name="image" content={image} />
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        image
        siteUrl
        description
        siteTitle
      }
    }
  }
`

export default SEO
