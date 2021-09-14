import React from "react";
import styled from "styled-components";
import VideoBanner from "../components/videoBanner";
import WhatweDO from "../components/WhatWeDo";
import { useStaticQuery, graphql } from "gatsby";
import RightImage from "../components/RightImage";
import LeftImage from "../components/LeftImage";
import OurWork from "../components/OurWork";
import TechnologyStackCarousel from "../components/TechnologyStackCarousel";
import logo from "../images/AnalogicaIcon.png"
import WhoWeAre from "../components/WhoareWe";
import WhatWeAreThinking from "../components/WhatWeAreThinking";

function Index() {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "cons.png" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);
  return (
    <Wrapper>
      <VideoBanner />
      <WhatweDO />
      <LeftImage
        title="consulting"
        image={data.img1.childImageSharp.gatsbyImageData}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas."
      />
      <RightImage
        title="consulting"
        image={data.img1.childImageSharp.gatsbyImageData}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas."
      />
      <LeftImage
        title="consulting"
        image={data.img1.childImageSharp.gatsbyImageData}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in cursus nec nunc diam mi id odio. Amet morbi amet velit ut. Sit in cras porta velit integer maecenas."
      />
      <OurWork
        title="our work"
        image={data.img1.childImageSharp.gatsbyImageData}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <TechnologyStackCarousel img={logo} title="technology stack" />
      <WhoWeAre />
      <WhatWeAreThinking />
    </Wrapper>
  );
}

export default Index;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 100px;
  grid-column-gap: 5px;
  height: auto;
  place-items: center;
`;
