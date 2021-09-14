import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "../components/Seo/seo";
import GlobalStyles from "../styles/GlobalStyles";
import TypographyStyles from "../styles/TypographyStyles";
import Logo from "../images/AnaLogo.png";
import FLogo from "../images/analogo.png";



const Layout = ({ children }) => {


  return (
    <>
      <SEO />
      <GlobalStyles />
      <TypographyStyles />
      <Navbar Logo={Logo} />
      <div className="layout">{children}</div>
      <Footer Logo={FLogo} />
    </>
  );
};

export default Layout;
