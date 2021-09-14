import React from "react";
import styled from "styled-components";
import img01 from "../images/whoweareright.png";
import img02 from "../images/whoweareleft.png";
import { Link } from "gatsby";
import HeadingBorderAnimation from "./HeadingBorderAnimation";
import LinkTo from "./LinkTo";

function WhoWeAre() {
  return (
    <Wrapper>
      <div className="section">
        <div className="section_right">
          <img className="right_image" src={img01} alt="" />
          <div className="rectangle_box"></div>
        </div>

        <div className="section_middle">
          <div className="heading">
            <HeadingBorderAnimation>who we are</HeadingBorderAnimation>
          </div>
          <div className="text">
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim
              in cursus nec nunc diam mi id odio. Amet morbi amet velit ut.{" "}
            </h4>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim
              in cursus nec nunc diam mi id odio. Amet morbi amet velit ut.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim
              in cursus nec nunc diam mi id odio. Amet morbi amet velit ut.{" "}
            </p>
          </div>
          {/* <div className="button">
            <LinkTo path="/whatwedo">Learn More</LinkTo>{" "}
          </div> */}
        </div>
        <div className="section_left">
          <img className="left_image" src={img02} alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default WhoWeAre;

const Wrapper = styled.div`
  grid-area: auto/1/auto/12;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;

  .section {
    width: 100%;
    height: 714.25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    @media (max-width: 479px) {
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      height: auto;
    }
  }

  .section_right {
    width: 20%;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    height: 714.25px;
    .right_image {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    @media (max-width: 767px) {
      height: auto;
      width: 50%;
    }
  }
  .rectangle_box {
    position: absolute;
    width: 100%;
    height: 60%;
    background-color: #000000;
    border-radius: 5px;
    bottom: 0;
    margin-bottom: -170px;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .section_middle {
    width: 60%;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    align-content: center;
    height: 714.25px;
    padding: 0 80px;
    @media (max-width: 767px) {
      padding: 0 20px;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      height: auto;
      width: 100%;
      padding-top: 70px;
    }
    .heading {
      width: 100%;
      display: flex;
      align-items: flex-start;
      align-self: flex-start;
      h2 {
        font-size: 20px;
        color: var(--primaryColor);
        font-weight: 600;
      }
    }
    .text {
      margin-top: -30px;
      width: 100%;
      height: auto;

      h4 {
        letter-spacing: 0.115em;
        line-height: 28px;
        font-size: 22px;

        font-family: var(--family);
        font-weight: var(--MediumWeight);
        @media (max-width: 479px) {
          font-size: 18px;
          letter-spacing: 0px;
          line-height: 23px;
        }
      }
    }
    .para {
      width: 100%;
      height: auto;

      p {
        font-size: 16px;
        font-family: var(--family);
        font-weight: var(--LightWeight);
        margin: 0;
        @media (max-width: 479px) {
          font-size: 14px;
          margin-top: 0;
        }
      }
    }
  }

  .section_left {
    width: 20%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: flex-end;
    height: 714.25px;
    padding-bottom: 70px;
    .left_image {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    @media (max-width: 479px) {
      display: none;
    }
  }
  .button {
    width: 100%;
    margin-top: 25px;
    display: flex;
  }
`;

const LinkedTo = styled(Link)`
  width: 150px;
  padding: 18px 24px;
  background-color: var(--primaryColor);
  color: #fff;
  border-radius: 6px;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    background-color 0.25s ease;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  &:hover {
    color: var(--primaryColor);
    transform: translate3d(0px, -1px, 0px);
    background-color: #fff;
    border: 1px solid var(--black);
    box-shadow: none;
  }
`;
