import React from 'react';

const Footer = () => { 
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mr-auto col-md-6  text-capitalize text-muted">
            <p>all rights reserved &copy;{new Date().getFullYear().toString()}</p>
            <p className="text-muted">h3c70r</p>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;