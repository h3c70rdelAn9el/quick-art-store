import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection"
import Info from "../components/home/info"

const AboutPage = ({ data }) => (
  <div>
    <Layout>
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="About Me"
        styleClass="about-background"
      />
      <Info />
    </Layout>
  </div>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-page.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage;
