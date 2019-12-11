import React from 'react';
// import Service from './Service';
// import Title from '../Title';
import { StaticQuery, graphql } from 'gatsby';
import Title from '../Title';
import Service from './Service';

const getServices = graphql`
        {
          services: allContentfulArtCustom {
            edges {
              node {
                id
                title
                price
                image {
                  # fluid(maxHeight: 200) {
                  #   src
                  #   ...GatsbyContentfulFluid_tracedSVG
                  fixed(width: 100 height: 100) {
                    src 
                    ...GatsbyContentfulFixed_tracedSVG
                  }
                  
                }
              }
            }
          }
        }
      `;
      
           

export default function Services() {
  return (
    <StaticQuery
      query={getServices}
      render={data => {
        return (
          <section>
            <Title title="customs" />
            <div className="row">
              {data.services.edges.map(({node:service}) => {
                return <Service key={service.id} service={service} />
              })}
            </div>
          </section>
        )
      }}
    />
  )
}