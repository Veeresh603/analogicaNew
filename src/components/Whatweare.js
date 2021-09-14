import React from "react";
import styled from "styled-components";
import HeadingBorderAnimation from "./HeadingBorderAnimation";
import img from "../images/traing pic 1.png";

import box from "../images/box.png";
import News from "./News";

// import linkedin from "../../images/linkedin.svg"

function WhatWeAreThinking(props) {
  return (
    <Wrapper>
      <div className="section_right">
        <div className="uppersection">
          <HeadingBorderAnimation>what we're thinking</HeadingBorderAnimation>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim in
            cursus nec nunc diam mi id odio. Amet morbi amet velit ut.{" "}
          </p>
        </div>

        <div className="middle_section_wrapper">
          <div className="middle_section">
            <div className="rectangle_box">
              <img src={img} alt="" />
            </div>
            <div className="text">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>
          </div>
          <div className="middle_section">
            <div className="rectangle_box">
              <img src={img} alt="" />
            </div>
            <div className="text">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>
          </div>
          <div className="middle_section">
            <div className="rectangle_box">
              <img src={img} alt="" />
            </div>
            <div className="text">
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_section">
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            borderRadius: "6px",
          }}
          className="bottom_section_section"
        >
          <div className="bottom">
            <h2>empowering constituents</h2>
            <div className="bottom_text">
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim
                in cursus nec nunc diam mi id odio. Amet morbi amet velit ut.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="section_left">
        <div className="section_left_column">
          <News />
        </div>
      </div>
    </Wrapper>
  );
}

export default WhatWeAreThinking;

const Wrapper = styled.div`
  background: #dfdddd;
  height: auto;
  /* background-size: 100% 1465px; */
  background-repeat: no-repeat;
  margin-bottom: 100px;
  grid-area: auto/1/auto/12;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  grid-gap: 5px;
  width: 100%;
  background-size: cover;
  @media (max-width: 479px) {
    margin-bottom: 20px;
  }
  .section_right {
    width: 100%;
    margin-top: 100px;
    grid-area: 1/6/2/11;
  }
  .upper_section {
    h2 {
      color: var(--primaryColor);
      font-size: 20px;
      font-weight: 600;
      @media (max-width: 479px) {
        font-size: 20px;
      }
    }
  }

  .middle_section_wrapper {
    width: 100%;
    height: 711px;
    overflow-y: auto;
    scrollbar-color: var(--primaryColor) transparent;
    scrollbar-width: 1px;
    @media (max-width: 767px) {
      height: 500px;
    }
  }
  .middle_section_wrapper::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

.middle_section_wrapper::-webkit-scrollbar-track-piece  {
    background-color: transparent;
}

.middle_section_wrapper::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    background-color: var(--primaryColor);
}
  
  .middle_section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 100%;
    height: auto;
    padding: 10px 0;

    padding-right: 2px;
    @media (max-width: 767px) {
      padding-right: 10px;
    }

    h4 {
      margin-top: -30px;
      width: 600px;
      padding: 20px;
      background-color: #f8f8f8;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
      color: #111111;
      border-radius: 5px;
      font-weight: var(--MediumWeight);
      font-size: 15.96px;

      @media (max-width: 767px) {
        width: 400px;
        height: auto;
      }
      @media (max-width: 479px) {
        width: 300px;
        height: auto;
        font-size: 15px;
      }
    }
  }

  .bottom {
    min-height: 280px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    padding: 40px 0;
    h2 {
      font-size: 22px;
      font-weight: var(--NormalWeight);
      color: var(--primaryColor);
      @media (max-width: 479px) {
        font-size: 15px;
      }
      h4 {
        color: #f8f8f8;
        font-size: 18px;
        font-weight: var(--MediumWeight);
        @media (max-width: 479px) {
          font-weight: 400;
          font-size: 12px;
        }
      }
    }
  }

  .bottom_section {
    grid-area: auto/7/auto/12;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 6px;
  }

  .bottom_section_section {
    background-color: #000;
  }
  .section_left {
    grid-area: 1/2/2/5;
    margin-top: 100px;
    height: 711px;
    overflow-y: auto;
    scrollbar-color: var(--primaryColor) transparent;
    scrollbar-width: 1px;
    @media (max-width: 767px) {
      height: 500px;
    }
  }
  .rectangle_box {
    width: 100%;
    height: 302px;
    background-color: #000000;
    border-radius: 5px;
    display: block;
    @media (max-width: 479px) {
      width: 100%;
      height: auto;
    }
    img {
      width: 100%;
      height: 302px;

      @media (max-width: 479px) {
        height: auto;
      }
    }
  }
  .text {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 479px) {
      width: 90%;
    }
  }
  h4 {
    color: #f8f8f8;
    font-size: 18px;
    font-weight: var(--MediumWeight);
    @media (max-width: 479px) {
      font-weight: 400;
      font-size: 12px;
    }
  }
  .middle_section:hover {
    h4 {
      background-color: var(--primaryColor);
      color: white;
      transition: 1s ease-in-out;
    }
  }
  @media (max-width: 479px) {
    .bottom_section {
      grid-area: 3/1/4/12 !important;
      margin-top: 0px;
      justify-content: flex-start;
    }

    .section_right {
      grid-area: 1/2/2/11 !important;
      margin-top: 0px;
    }
  }
  @media (max-width: 767px) {
    .bottom_section {
      grid-area: 3/5/4/12;
      height: auto;
      margin-top: 0px;
      justify-content: flex-start;
    }
    .bottom {
      height: auto !important;
      padding-bottom: 35px;
      padding-top: 20px;
    }

    .section_right {
      grid-area: 1/4/2/11;
      font-size: 17px;
    }
    .section_left {
      grid-area: 2/2/3/11;
      margin-top: 0px;
    }
  }
`;
