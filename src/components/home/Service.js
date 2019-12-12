import React from 'react';
import Img from 'gatsby-image';

export default function Service({ service }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto">
      <div className="card customs mb-4" style={{ maxHeight: "100%" }}>
        {/* <Img fluid={service.image.fluid} className="card-img-top" /> */}
        <Img fixed={service.image.fixed} className="card-img-top mt-1 mx-auto" />
        <div className="card-body text-center">
          <h6>{service.title}</h6>
          <h6>${service.price}.</h6>
          <button 
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
              data-item-id = {service.id}
              data-item-name = {service.title}
              data-item-price = {service.price}
              data-item-image = {service.image.fixed.src}
              data-item-url = "https://loving-elion-114567.netlify.com"
          >Purchase</button>
        </div>
      </div>
    </div>
  )
}
