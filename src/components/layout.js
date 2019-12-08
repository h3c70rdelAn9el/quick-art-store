import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css";
import "./layout.css";
import Navbar from "./globals/Navbar";
import Footer from "./globals/Footer";



const Layout = ({ children }) => 
  <>
    <Navbar />
    {children}
    <Footer />
  </>;


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
