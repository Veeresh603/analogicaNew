import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

function LinkTo(props) {
  return (
    <>
      <Linked to={props.path}>{props.children}</Linked>
    </>
  );
}

export default LinkTo;

const Linked = styled(Link)`
  min-width: 150px;
  background-color: var(--primaryColor);
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  text-decoration: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    background-color 0.25s ease;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin: 5px 0;
  &:hover {
    transition-duration: 0.45s;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: #fff;
    color: var(--primaryColor);
    border: 1px solid var(--primaryColor);
    box-shadow: none;
  }
`;
