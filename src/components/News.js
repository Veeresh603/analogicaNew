import React from "react";
import styled from "styled-components";
import CustomizedAccordions from "./CustomAccordion";
import HeadingBorderAnimation from "./HeadingBorderAnimation";

function News() {
  return (
    <Wrapper>
      <HeadingBorderAnimation>news</HeadingBorderAnimation>
      <div className="accordion">
        <CustomizedAccordions />
      </div>
    </Wrapper>
  );
}

export default News;

const Wrapper = styled.div`
  h3 {
    margin: 0;
    font-size: 16px !important;
    font-weight: var(--NormalWeight) !important;
    color: #fff;
  }
  h4 {
    margin: 0;
    font-weight: var(--LightWeight) !important;
    font-size: 13px !important;
    color: #fff;
  }
  .accordion{
    margin-top: 21px;
  }
  .MuiAccordion-root.Mui-expanded {
    margin-bottom: 15px;
  }
  .MuiPaper-root {
    background-color: transparent !important;
  }
`;
