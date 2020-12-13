import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, content }) => {
  const { site: { siteMetadata } } = useStaticQuery(query);
  const { image, siteUrl, description, siteTitle } = siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={content || description} />
      <meta name="image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
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
