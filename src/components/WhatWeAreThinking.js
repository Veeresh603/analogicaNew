import React from "react";
import styled from "styled-components";
import box from "../images/box.png";
import HeadingBorderAnimation from "./HeadingBorderAnimation";
import img from "../images/traing pic 1.png";

function WhatWeAreThinking() {
  return (
    <Wrapper>
      <div className="section">
        <div className="section_right"></div>
        <div className="section_left">
          <div className="upper_section">
            <HeadingBorderAnimation>what we're thinking</HeadingBorderAnimation>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim
              in cursus nec nunc diam mi id odio. Amet morbi amet velit ut.{" "}
            </p>
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
          <div className="bottom_section">
            <div className="bottom_reactangle">
              <h2>empowering constituents</h2>
              <div className="bottom_text">
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  enim in cursus nec nunc diam mi id odio. Amet morbi amet velit
                  ut.{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default WhatWeAreThinking;

const Wrapper = styled.div`
  grid-area: auto/1/auto/12;
  display: flex;
  box-sizing: border-box;

  width: 100%;
  height: auto;
  @media (max-width: 479px) {
    height: auto;
  }
  .section {
    width: 100%;
    display: flex;
    flex-direction: row;

    justify-content: flex-end;
    background: url("${box}");
    height: auto;
    background-size: 100% 1295px;
    background-repeat: no-repeat;
    @media (max-width: 479px) {
      height: 1500px;
      background-size: 100% 1500px;
      flex-wrap: wrap;
    }
  }

  .section_right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 35%;
    @media (max-width: 479px) {
      width: 0%;
    }
    @media (max-width: 767px) {
      width: 0%;
    }
  }

  .section_left {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 65%;
    @media (max-width: 479px) {
      width: 100%;
      justify-content: center;
      align-items: center;
      align-self: center;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .upper_section {
    padding: 50px 50px 0 50px;
    @media (max-width: 479px) {
      /* padding: 50px 0px; */
      justify-content: center;
      align-items: center;
      align-self: center;
    }
    @media (max-width: 767px) {
      margin-top: 50px;
      justify-content: center;
      align-items: center;
      align-self: center;
      padding: 0 30px;
    }
    h2 {
      color: var(--primaryColor);
      font-size: 20px;
      font-weight: 600;
      @media (max-width: 479px) {
        font-size: 20px;
      }
    }
  }
  p {
      font-size: 22px;
      font-weight: var(--MediumWeight);
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }
  .middle_section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 100%;
    height: auto;
    padding: 0 50px;
    @media (max-width: 479px) {
      padding: 0px;
    }
    @media (max-width: 767px) {
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
  .rectangle_box {
    @media (max-width: 479px) {
      width: 90%;
      height: auto;
    }
    @media (max-width: 767px) {
      height: auto;
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
  .middle_section:hover {
    h4 {
      background-color: var(--primaryColor);
      color: white;
      transition: 1s ease-in-out;
    }
  }
  .bottom_section {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 500px;

    .bottom_reactangle {
      display: flex;
      width: 80%;
      flex-direction: column;
      border-radius: 5px;
      height: 249.73px;
      background-color: #000000;
      justify-content: center;
      padding: 50px;
      @media (max-width: 479px) {
        width: 90%;
        padding: 20px;
        height: auto;
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
    h2 {
        font-size:22px;
        font-weight: var(--NormalWeight);
      color: var(--primaryColor);
      @media (max-width: 479px) {
        font-size: 15px;
      }
    }
  }
`;
