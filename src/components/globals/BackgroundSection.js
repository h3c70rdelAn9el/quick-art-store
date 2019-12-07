import React from 'react';
import BackgroundImage from  'gatsby-background-image';

const BackgroundSection = ({
  img,
  styleClass,
  title,
  overlayColor,
  children,
}) => (
  <div className="overlay">
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  </div>
)

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background"
}



export default BackgroundSection;