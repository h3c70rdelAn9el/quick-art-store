import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo";
import BackgroundSection from "../components/globals/BackgroundSection";
import Info from "../components/home/info";
import Showcase from "../components/home/Showcase";
import Services from "../components/home/Services";



const IndexPage = ({ data }) => (
  <div>
    <Layout>
      <SEO title="Home" keywords={`gatsby`, `application`} />
      {/* <BackgroundSection backgroundImage = {data.backgroundImage.childImageSharp.fluid} 
      title="art scratch" 
      styleClass="default-background"
     /> */}
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Art Scratch"
        styleClass="default-background"
      />
      <Info />
      <Showcase items={data.paintings} />
      <Services />
    </Layout>
  </div>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    paintings:allContentfulArtPainting {
    edges{
      node{
        id
        title
        description{
          description
        }
        price
        category
        image{
					fixed(width: 50, height: 50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
  }
`

export default IndexPage
