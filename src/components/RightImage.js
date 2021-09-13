import React from "react";
import styled from "styled-components";
import HeadingBorderAnimation from "./HeadingBorderAnimation";
import { GatsbyImage } from "gatsby-plugin-image";

function RightImage(props) {
  return (
    <Wrapper>
      <div className="right_image">
        <GatsbyImage image={props.image} alt="" />
      </div>
      <div className="left_description">
        <HeadingBorderAnimation>{props.title}</HeadingBorderAnimation>
        <p>{props.desc}</p>
        <ul>
          <li>Artificial Intelligence</li>
          <li>Artificial Intelligence</li>
          <li>Artificial Intelligence</li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default RightImage;

const Wrapper = styled.div`
  grid-area: auto/2/auto/11;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  @media (min-width: 1900px) {
    width: 80%;
  }
  .right_image {
    grid-area: 1/2/2/3;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 767px) {
      grid-area: 1/1/2/3;
    }
    img {
      object-fit: contain !important;
    }
    .gatsby-image-wrapper {
      width: 100%;
    }
  }
  .left_description {
    grid-area: 1/1/2/2;
    padding-right: 100px;
    @media (max-width: 767px) {
      grid-area: 2/1/3/3;
      padding-right: 0px;
    }
    p {
      font-size: 22px;
      font-weight: var(--LightWeight);
      letter-spacing: 0.03em;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        font-size: 18px;
        font-weight: var(--NormalWeight);
        padding: 5px 0;
      }
    }
  }
`;
