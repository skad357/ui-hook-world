import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const FixedButton = styled.button`
  cursor: pointer;
  background: green;
  position: fixed;
  top: 2rem;
  right: 2rem;
  border-radius: 1rem;
  padding: 0.5rem;
  color: white;
  font-weight: bolder;
`;
const GoHome = () => {
  return (
    <Link to="/">
      <FixedButton>Go to Home</FixedButton>
    </Link>
  );
};

export default GoHome;
