import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "../components/Seo/seo";
import GlobalStyles from "../styles/GlobalStyles";
import TypographyStyles from "../styles/TypographyStyles";
import Logo from "../images/AnaLogoWhite.svg";
import '../styles/animate.css'
import WOW from 'wowjs';


const Layout = ({ children }) => {

  React.useEffect(() => {
    new WOW.WOW({
      live: false
    }).init()
 })
  return (
    <>
      <SEO />
      <GlobalStyles />
      <TypographyStyles />
      <Navbar Logo={Logo} />
      <div className="layout">{children}</div>
      <Footer Logo={Logo} />
    </>
  );
};

export default Layout;
