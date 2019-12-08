import React from 'react';
import BackgroundImage from  'gatsby-background-image';

const BackgroundSection = ({ img, styleClass, title, children }) => (
  <div>
    <div className="image-container">
      <BackgroundImage className={styleClass} fluid={img}>
        {children}
      </BackgroundImage>
    </div>
    <h1 className="head-title text-uppercase text-center display-4 font-weight-bold">
      {title}
    </h1>
  </div>
)

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}



export default BackgroundSection;