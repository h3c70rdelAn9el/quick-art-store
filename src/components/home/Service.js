import React from 'react';
import Img from 'gatsby-image';

export default function Service({ service }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto">
      <div className="card customs" style={{ maxHeight: "70%" }}>
        {/* <Img fluid={service.image.fluid} className="card-img-top" /> */}
        <Img fixed={service.image.fixed} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{service.title}</h6>
          <h6>${service.price}.</h6>
          <button className="btn btn-yellow mt-3 text-capitalize">Purchase</button>
        </div>
      </div>
    </div>
  )
}
