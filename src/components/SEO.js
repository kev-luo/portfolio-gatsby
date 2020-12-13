import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, content }) => {
  const { site: { siteMetadata } } = useStaticQuery(query);
  const { author, siteUrl, description, siteTitle } = siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={content || description} />
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteUrl
        description
        siteTitle
      }
    }
  }
`

export default SEO
